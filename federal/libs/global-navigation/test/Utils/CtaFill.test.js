import { expect } from '@esm-bundle/chai';
import { BLUE_FILL_SUFFIX, getCtaFillAttrs } from '../../src/Utils/Utils';

describe('getCtaFillAttrs', () => {
  it('strips the #_button-blue suffix and flags the link', () => {
    const { href, blue } = getCtaFillAttrs(`https://www.adobe.com/buy${BLUE_FILL_SUFFIX}`);
    expect(href).to.equal('https://www.adobe.com/buy');
    expect(blue).to.be.true;
  });

  it('leaves ordinary hrefs untouched', () => {
    const { href, blue } = getCtaFillAttrs('https://www.adobe.com/buy');
    expect(href).to.equal('https://www.adobe.com/buy');
    expect(blue).to.be.false;
  });

  it('composes with other authored suffixes regardless of order', () => {
    const { href, blue } = getCtaFillAttrs(`https://www.adobe.com/buy#_blank${BLUE_FILL_SUFFIX}`);
    expect(href).to.equal('https://www.adobe.com/buy#_blank');
    expect(blue).to.be.true;
  });
});
