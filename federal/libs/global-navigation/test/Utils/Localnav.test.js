import { expect } from '@esm-bundle/chai';
import { link } from '../../src/Components/Link/Render';
import { withLocalnavOverviewLabel } from '../../src/Utils/Localnav';

const render = (component) => {
  const container = document.createElement('div');
  container.innerHTML = link(component);
  return container;
};

describe('withLocalnavOverviewLabel', () => {
  it('uses the overview placeholder as the mobile label', () => {
    const container = render(withLocalnavOverviewLabel(
      { type: 'Link', text: 'Video', href: '/video' },
      new Map([['overview', 'Localized overview']]),
    ));

    expect(container.querySelector('.feds-link__desktop-text').textContent)
      .to.equal('Video');
    expect(container.querySelector('.feds-link__mobile-text').textContent)
      .to.equal('Localized overview');
  });

  it('falls back to Overview when the placeholder is missing', () => {
    const container = render(withLocalnavOverviewLabel(
      { type: 'Link', text: 'Video', href: '/video' },
      new Map(),
    ));

    expect(container.querySelector('.feds-link__mobile-text').textContent)
      .to.equal('Overview');
  });

  it('keeps an authored mobile label', () => {
    const component = {
      type: 'Link',
      text: 'Video',
      mobileText: 'Video home',
      href: '/video',
    };

    expect(withLocalnavOverviewLabel(component, new Map([['overview', 'Overview']])))
      .to.equal(component);
  });
});
