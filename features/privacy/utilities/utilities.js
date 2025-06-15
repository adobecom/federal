
export function createTag(tag, attributes, html, options = {}) {
    const el = document.createElement(tag);
    // Handle HTML content (string, Node, DocumentFragment, Array)
    if (html) {
      if (html.nodeType === Node.ELEMENT_NODE
        || html instanceof SVGElement
        || html instanceof DocumentFragment) {
        el.append(html);
      } else if (Array.isArray(html)) {
        el.append(...html);
      } else {
        el.insertAdjacentHTML('beforeend', html);
      }
    }
    if (attributes) {
        Object.entries(attributes).forEach(([key, val]) => {
            if (val !== undefined && val !== null) {
              el.setAttribute(key, val);
            }
          });
    }
    if (options.parent) options.parent.append(el);
    return el;
  }  

export function loadStyle(url) {
    return new Promise((resolve, reject) => {
      if ([...document.styleSheets].some(s => s.href && s.href.endsWith(url))) return resolve();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
}


  