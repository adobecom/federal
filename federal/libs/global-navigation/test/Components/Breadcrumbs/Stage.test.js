import { expect } from '@esm-bundle/chai';
import { convertRenderedNavigationLinks } from '../../../src/Utils/StageLinks';

describe('breadcrumb stage links', () => {
  it('converts rendered breadcrumbs in the nav and mega menu', () => {
    const mountpoint = document.createElement('div');
    mountpoint.innerHTML = `
      <ul class="feds-breadcrumbs"><li><a href="https://www.adobe.com/">Adobe</a></li></ul>
      <div class="feds-popup">
        <ul class="feds-breadcrumbs"><li><a href="https://www.adobe.com/">Adobe</a></li></ul>
      </div>
    `;
    const convertStageLinks = ({ anchors }) => {
      anchors.forEach((anchor) => {
        anchor.href = anchor.href.replace('www.adobe.com', 'www.stage.adobe.com');
      });
    };

    convertRenderedNavigationLinks(
      mountpoint,
      convertStageLinks,
      'www.stage.adobe.com',
      'https://www.stage.adobe.com/creativecloud/video.html',
    );

    const breadcrumbAnchors = [...mountpoint.querySelectorAll('.feds-breadcrumbs a')];
    expect(breadcrumbAnchors).to.have.lengthOf(2);
    breadcrumbAnchors.forEach((anchor) => {
      expect(anchor.href).to.equal('https://www.stage.adobe.com/');
    });
  });
});
