import { expect } from '@esm-bundle/chai';
import { decorateGnavLinks, setLocalizeLink } from '../../src/Utils/Utils';
import { link } from '../../src/Components/Link/Render';
import { primaryCTA } from '../../src/Components/CTA/Render';
import { linkscard } from '../../src/Components/LinksCard/Render';

// Mirrors milo's localizeLink: strips #_dnt without localizing, skips
// already-prefixed paths, otherwise adds the /fr prefix.
const frLocalizer = (href) => {
  const url = new URL(href);
  if (url.hash.includes('#_dnt')) return href.replace('#_dnt', '');
  if (url.pathname.startsWith('/fr/')) return href;
  url.pathname = `/fr${url.pathname}`;
  return url.href;
};

const createBody = () => {
  const body = document.createElement('div');
  body.innerHTML = `
    <a id="dnt" href="/acrobat/student-spaces.html#_dnt">Student Spaces</a>
    <a id="normal" href="/education/students.html">Students</a>
  `;
  return body;
};

const pathOf = (body, id) => new URL(body.querySelector(`#${id}`).href).pathname;

describe('gnav link localization', () => {
  beforeEach(() => setLocalizeLink(frLocalizer));
  after(() => setLocalizeLink((href) => href));

  describe('decorateGnavLinks (fallback localizer)', () => {
    it('localizes normal links and leaves DNT links unprefixed', async () => {
      const body = createBody();
      await decorateGnavLinks(body, {});

      expect(pathOf(body, 'normal')).to.equal('/fr/education/students.html');
      expect(pathOf(body, 'dnt')).to.equal('/acrobat/student-spaces.html');
    });

    it('strips the DNT marker', async () => {
      const body = createBody();
      await decorateGnavLinks(body, {});

      expect(body.querySelector('#dnt').getAttribute('href')).to.not.include('#_dnt');
    });
  });

  describe('decorateGnavLinks (host decorateBody)', () => {
    it('uses the host decorator instead of the fallback localizer', async () => {
      const body = createBody();
      let fallbackCalls = 0;
      setLocalizeLink((href) => { fallbackCalls += 1; return href; });

      await decorateGnavLinks(body, {
        decorateBody: async (b) => {
          b.querySelectorAll('a').forEach((a) => { a.href = frLocalizer(a.href); });
        },
      });

      expect(fallbackCalls).to.equal(0);
      expect(pathOf(body, 'normal')).to.equal('/fr/education/students.html');
      expect(pathOf(body, 'dnt')).to.equal('/acrobat/student-spaces.html');
    });

    it('strips a DNT marker the host decorator left behind', async () => {
      const body = createBody();
      await decorateGnavLinks(body, { decorateBody: async () => {} });

      expect(body.querySelector('#dnt').getAttribute('href'))
        .to.equal('/acrobat/student-spaces.html');
    });
  });

  it('runs stage conversion after localization and DNT stripping', async () => {
    const body = createBody();
    let seen = null;
    await decorateGnavLinks(body, {
      convertStageLinks: ({ anchors }) => {
        seen = anchors.map((a) => a.getAttribute('href'));
      },
    });

    expect(seen.some((href) => href.includes('#_dnt'))).to.be.false;
    expect(seen.some((href) => href.includes('/fr/education/students.html'))).to.be.true;
  });

  describe('renderers output hrefs verbatim', () => {
    it('does not re-localize a decorated DNT link in a link', () => {
      const html = link({ type: 'Link', text: 'Student Spaces', href: '/acrobat/student-spaces.html' });
      expect(html).to.include('href="/acrobat/student-spaces.html"');
    });

    it('does not re-localize a links-card item with a description', () => {
      const html = linkscard({
        type: 'LinksCard',
        card: {
          type: 'LinksCardItem',
          title: 'Students',
          links: [{
            type: 'Link',
            text: 'Student Spaces',
            href: '/acrobat/student-spaces.html',
            description: 'AI study partner',
          }],
          footerCTA: null,
          footerLink: null,
        },
      });
      expect(html).to.include('href="/acrobat/student-spaces.html"');
      expect(html).to.not.include('/fr/acrobat');
    });

    it('does not re-localize a CTA', () => {
      const html = primaryCTA({ type: 'PrimaryCTA', text: 'Buy', href: '/acrobat/student-spaces.html' });
      expect(html).to.include('href="/acrobat/student-spaces.html"');
    });
  });
});
