import { expect } from '@esm-bundle/chai';
import { parseBreadcrumbs } from '../../../src/Components/Breadcrumbs/Parse';
import { breadcrumbs } from '../../../src/Components/Breadcrumbs/Render';
import { popup } from '../../../src/Components/MegaMenu/Render';
import { IrrecoverableError } from '../../../src/Error/Error';

const createBlock = (noTransform = false) => {
  const block = document.createElement('div');
  block.className = `breadcrumbs${noTransform ? ' no-transform' : ''}`;
  block.innerHTML = `
    <ul>
      <li><a href="/products.html">creative cloud</a></li>
      <li>Adobe eSign for iPad</li>
    </ul>
  `;
  return block;
};

describe('Breadcrumbs text case', () => {
  let style;
  let header;

  before(async () => {
    const response = await fetch(
      new URL('../../../src/Components/Breadcrumbs/breadcrumbs.css', import.meta.url)
    );
    expect(response.ok).to.equal(true);
    style = document.createElement('style');
    style.textContent = await response.text();
    document.head.append(style);
  });

  after(() => style.remove());
  afterEach(() => header?.remove());

  [false, true].forEach((noTransform) => {
    const expectedTransform = noTransform ? 'none' : 'capitalize';

    it(`parses and renders ${expectedTransform} without changing authored content`, () => {
      const block = createBlock(noTransform);
      const [data, errors] = parseBreadcrumbs(block);

      expect(errors).to.deep.equal([]);
      expect(data.noTransform).to.equal(noTransform);
      expect(data.items[0].text).to.equal('creative cloud');
      expect(data.items[1]).to.equal('Adobe eSign for iPad');

      const container = document.createElement('div');
      container.innerHTML = breadcrumbs(data);
      const trail = container.querySelector('.feds-breadcrumbs');
      expect(trail.classList.contains('no-transform')).to.equal(noTransform);
      expect(trail.querySelector('a').textContent).to.equal('creative cloud');
      expect(trail.querySelector('a').href).to.equal(block.querySelector('a').href);
      expect(trail.querySelector('span').textContent).to.equal('Adobe eSign for iPad');
    });

    ['main', 'mobile-menu', 'compact-menu'].forEach((context) => {
      it(`uses ${expectedTransform} for links and current-page text in ${context}`, () => {
        const [data] = parseBreadcrumbs(createBlock(noTransform));
        header = document.createElement('header');
        header.className = `global-navigation${context === 'compact-menu' ? ' is-compact' : ''}`;
        const markup = context === 'main'
          ? breadcrumbs(data)
          : `<div class="feds-popup is-open">${popup(
            { type: 'GnavCards', megaMenuTitle: 'Products', sections: [] },
            'products',
            { type: 'MegaMenuExtraData', breadcrumbs: data }
          )}</div>`;
        header.innerHTML = `<nav>${markup}</nav>`;
        document.body.append(header);

        header.querySelectorAll('.feds-breadcrumbs > li > :is(a, span)').forEach((item) => {
          expect(getComputedStyle(item).textTransform).to.equal(expectedTransform);
        });
        expect(header.querySelectorAll('.feds-breadcrumbs > li')).to.have.lengthOf(2);
      });
    });
  });

  it('still rejects missing or empty breadcrumb blocks', () => {
    expect(() => parseBreadcrumbs(null)).to.throw(IrrecoverableError);
    expect(() => parseBreadcrumbs(document.createElement('div')))
      .to.throw(IrrecoverableError, 'Error when parsing Breadcrumbs. No items found');
  });
});
