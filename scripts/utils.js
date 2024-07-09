/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * The decision engine for where to get Milo's libs from.
 */
export const [setLibs, getLibs] = (() => {
  let libs;
  return [
    (prodLibs, location) => {
      libs = (() => {
        const { hostname, search } = location || window.location;
        if (!(hostname.includes('.hlx.') || hostname.includes('local'))) return prodLibs;
        const branch = new URLSearchParams(search).get('milolibs') || 'main';
        if (branch === 'local') return 'http://localhost:6456/libs';
        return branch.includes('--') ? `https://${branch}.hlx.live/libs` : `https://${branch}--milo--adobecom.hlx.live/libs`;
      })();
      return libs;
    }, () => libs,
  ];
})();

export function loadLink(href, { as, callback, crossorigin, rel, fetchpriority } = {}) {
  let link = document.head.querySelector(`link[href="${href}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    if (as) link.setAttribute('as', as);
    if (crossorigin) link.setAttribute('crossorigin', crossorigin);
    if (fetchpriority) link.setAttribute('fetchpriority', fetchpriority);
    link.setAttribute('href', href);
    if (callback) {
      link.onload = (e) => callback(e.type);
      link.onerror = (e) => callback(e.type);
    }
    document.head.appendChild(link);
  } else if (callback) {
    callback('noop');
  }
  return link;
}

/*
 * ------------------------------------------------------------
 * Edit above at your own risk.
 *
 * Note: This file should have no self-invoking functions.
 * ------------------------------------------------------------
 */

function loadStyle(href, callback) {
  return loadLink(href, { rel: 'stylesheet', callback });
}

export async function bootstrapBlock(miloConfigs, blockConfig) {
  if (!miloConfigs.url) {
    console.log(`${blockConfig.label} url not found!`);
    return;
  }
  const { miloLibs } = miloConfigs;
  const { setConfig, createTag } = await import(`${miloLibs}/utils/utils.js`);
  setConfig({ ...miloConfigs });
  loadStyle(`${miloLibs}/blocks/${blockConfig.name}/${blockConfig.name}.css`);
  loadStyle(`${miloLibs}/styles/styles.css`); //TODO: remove when css gets updated in core milo

  const { default: initBlock } = await import(`${miloLibs}/blocks/${blockConfig.name}/${blockConfig.name}.js`);
  const meta = createTag('meta', { name: blockConfig.metaName, content: miloConfigs.url });
  document.head.append(meta);

  if (!document.querySelector(blockConfig.targetEl)) {
    const block = createTag(blockConfig.targetEl, { class: blockConfig.name});
    document.body.appendChild(block)
  }
  initBlock(document.querySelector(blockConfig.targetEl));
}

