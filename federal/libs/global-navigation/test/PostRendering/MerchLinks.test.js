import { expect } from '@esm-bundle/chai';
import { initMerchLinks } from '../../src/PostRendering/MerchLinks';
import { setMerchDecorators } from '../../src/Utils/Utils';

const MAS_FIELD =
  'https://mas.adobe.com/studio.html#content-type=merch-card&path=acom-cc&field=cardTitle';
const MAS_CARD =
  'https://mas.adobe.com/studio.html#content-type=merch-card&path=acom-cc';
const OST = 'https://www.adobe.com/tools/ost?osi=abc&type=price';
const MAS_CTA =
  'https://mas.adobe.com/studio.html#content-type=merch-card&path=acom-cc&field=ctas%5B1%5D';

/**
 * initMerchLinks tags OST/miniplans links and inline M@S field links with the
 * `merch` class (routed to Milo's lightweight `merch` block) before it touches
 * config, and leaves full M@S cards untagged so they take the
 * merch-card-autoblock path. Asserting the tagging alone avoids importing the
 * real Milo blocks: the tag runs synchronously, ahead of any config access, and
 * initMerchLinks swallows its own errors, so awaiting it is safe regardless of
 * whatever MiloConfig other test files have (or have not) initialised.
 */
describe('initMerchLinks — commerce link routing', () => {
  afterEach(() => {
    setMerchDecorators({});
  });

  it('tags OST and inline M@S field links, leaves full cards and plain links', async () => {
    const mountpoint = document.createElement('div');
    mountpoint.innerHTML = `
      <a href="${OST}">OST price</a>
      <a href="${MAS_FIELD}">M@S field</a>
      <a href="${MAS_CARD}">M@S full card</a>
      <a href="/photoshop">Photoshop</a>
    `;
    document.body.appendChild(mountpoint);

    try {
      await initMerchLinks(mountpoint);

      const [ost, field, card, plain] = mountpoint.querySelectorAll('a');
      expect(ost.classList.contains('merch'), 'OST link').to.equal(true);
      expect(field.classList.contains('merch'), 'inline field link').to.equal(true);
      expect(card.classList.contains('merch'), 'full M@S card').to.equal(false);
      expect(plain.classList.contains('merch'), 'plain link').to.equal(false);
    } finally {
      mountpoint.remove();
    }
  });

  it('rehydrates a product-card commerce placeholder into a merch anchor', async () => {
    const mountpoint = document.createElement('div');
    mountpoint.innerHTML = `
      <span class="feds-commerce-placeholder" data-commerce-href="${OST}">US$9.99/mo</span>
    `;
    document.body.appendChild(mountpoint);

    try {
      await initMerchLinks(mountpoint);

      const anchor = mountpoint.querySelector('a');
      expect(anchor, 'placeholder became an anchor').to.not.equal(null);
      expect(anchor.getAttribute('href')).to.equal(OST);
      expect(anchor.classList.contains('merch')).to.equal(true);
      expect(mountpoint.querySelector('.feds-commerce-placeholder')).to.equal(null);
    } finally {
      mountpoint.remove();
    }
  });

  it('resolves a MAS link CTA in authored paragraph context and applies Federal classes', async () => {
    const mountpoint = document.createElement('div');
    mountpoint.innerHTML = `
      <ul class="feds-gnav-items">
        <li><a class="feds-link" href="${MAS_CTA}" daa-ll="Buy now">Mas-field: long authoring label</a></li>
      </ul>
    `;
    document.body.appendChild(mountpoint);
    let stagedLink;
    setMerchDecorators({
      merch: async (link) => {
        stagedLink = link;
        expect(link.closest('p')).to.not.equal(null);
        const masField = document.createElement('mas-field');
        masField.innerHTML = '<a class="con-button button-xl outline">Buy now</a>';
        link.replaceWith(masField);
        return masField;
      },
    });

    try {
      await initMerchLinks(mountpoint);

      const resolved = mountpoint.querySelector('a');
      expect(stagedLink).to.not.equal(resolved);
      expect(resolved.textContent).to.equal('Buy now');
      expect(resolved.classList.contains('feds-link')).to.equal(true);
      expect(resolved.classList.contains('con-button')).to.equal(false);
      expect(resolved.classList.contains('button-xl')).to.equal(false);
      expect(resolved.classList.contains('outline')).to.equal(false);
      expect(resolved.getAttribute('daa-ll')).to.equal('Buy now');
    } finally {
      mountpoint.remove();
    }
  });

  it('waits for a late mas:ready CTA before replacing the hidden authored label', async () => {
    const mountpoint = document.createElement('div');
    mountpoint.innerHTML = `
      <ul class="feds-gnav-items">
        <li><a class="feds-primary-cta" href="${MAS_CTA}" daa-ll="Free trial">Mas-field: long free trial authoring label</a></li>
      </ul>
    `;
    document.body.appendChild(mountpoint);
    let masField;
    setMerchDecorators({
      merch: async (link) => {
        expect(link.closest('strong')).to.not.equal(null);
        masField = document.createElement('mas-field');
        link.replaceWith(masField);
        return masField;
      },
    });

    try {
      await initMerchLinks(mountpoint);

      const pending = mountpoint.querySelector('a');
      expect(pending.hasAttribute('data-feds-merch-pending')).to.equal(true);

      masField.innerHTML = '<a class="con-button button-l">Free trial</a>';
      masField.dispatchEvent(new CustomEvent('mas:ready', { bubbles: true }));

      const resolved = mountpoint.querySelector('a');
      expect(resolved.textContent).to.equal('Free trial');
      expect(resolved.classList.contains('feds-primary-cta')).to.equal(true);
      expect(resolved.classList.contains('con-button')).to.equal(false);
      expect(resolved.classList.contains('button-l')).to.equal(false);
      expect(resolved.hasAttribute('data-feds-merch-pending')).to.equal(false);
      expect(resolved.getAttribute('daa-ll')).to.equal('Free trial');
    } finally {
      mountpoint.remove();
    }
  });
});
