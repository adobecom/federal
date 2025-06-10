export function loadStyles(url) {
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