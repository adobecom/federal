import { expect } from '@esm-bundle/chai';
import { holdUntilMerchLinksSettle, initMerchLinks } from '../../src/PostRendering/MerchLinks';
import { setMerchDecorators, setMiloConfig } from '../../src/Utils/Utils';

const MAS_FIELD = 'https://mas.adobe.com/studio.html#content-type=merch-card&path=acom-cc&field=promoText';
const OST_PRICE = 'https://www.adobe.com/tools/ost?osi=abc&type=price';
const PENDING = 'data-feds-merch-pending';

const settle = () => new Promise((resolve) => { setTimeout(resolve, 0); });

describe('holdUntilMerchLinksSettle', () => {
  let container;

  before(() => {
    try {
      setMiloConfig({ env: { name: 'stage' }, locale: { prefix: '', ietf: 'en-US' } });
    } catch {
      // Already initialized by another test file.
    }
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    setMerchDecorators({});
    container.remove();
  });

  it('does not hold a container without commerce links', async () => {
    container.innerHTML = '<p>Save 20% <a href="/plans">today</a></p>';
    await initMerchLinks(container);

    const held = holdUntilMerchLinksSettle(container, 5000);
    expect(container.hasAttribute(PENDING)).to.equal(false);
    await held;
    expect(container.querySelector('a')).to.not.equal(null);
  });

  it('holds the container until its commerce links have resolved', async () => {
    container.innerHTML = `<p><a href="${MAS_FIELD}">Mas-field: promo text</a></p>`;
    let finish;
    setMerchDecorators({
      merch: (anchor) => new Promise((resolve) => {
        finish = () => {
          const field = document.createElement('mas-field');
          field.textContent = 'Save 20% on Photoshop';
          anchor.replaceWith(field);
          resolve(field);
        };
      }),
    });
    await initMerchLinks(container);

    let released = false;
    const held = holdUntilMerchLinksSettle(container, 5000)
      .then(() => { released = true; });
    await settle();
    expect(container.hasAttribute(PENDING)).to.equal(true);
    expect(released).to.equal(false);

    finish();
    await held;
    expect(container.hasAttribute(PENDING)).to.equal(false);
    expect(container.textContent.trim()).to.equal('Save 20% on Photoshop');
  });

  it('removes links that fail to resolve, with the paragraphs they leave empty', async () => {
    container.innerHTML = `<div class="inner">
      <img alt="">
      <p class="headline"><a href="${MAS_FIELD}">Mas-field: promo text</a></p>
      <p class="body">From <a href="${OST_PRICE}">PRICE - Photoshop</a></p>
    </div>`;
    setMerchDecorators({
      // A rejected decoration, and one that resolves without replacing the link.
      merch: (anchor) => (anchor.href === MAS_FIELD
        ? Promise.reject(new Error('commerce unavailable'))
        : null),
    });
    await initMerchLinks(container);
    await holdUntilMerchLinksSettle(container, 5000);

    expect(container.querySelector('a')).to.equal(null);
    expect(container.querySelector('.headline')).to.equal(null);
    expect(container.querySelector('.body').textContent.trim()).to.equal('From');
    expect(container.querySelector('.inner img')).to.not.equal(null);
    expect(container.hasAttribute(PENDING)).to.equal(false);
  });

  it('stops waiting after the timeout and removes links still unresolved', async () => {
    container.innerHTML = `
      <p><a href="${MAS_FIELD}">Mas-field: promo text</a></p>
      <p><a href="/plans">Learn more</a></p>`;
    setMerchDecorators({ merch: () => new Promise(() => {}) });
    await initMerchLinks(container);

    await holdUntilMerchLinksSettle(container, 20);

    const links = container.querySelectorAll('a');
    expect(links.length).to.equal(1);
    expect(links[0].textContent).to.equal('Learn more');
    expect(container.hasAttribute(PENDING)).to.equal(false);
  });
});
