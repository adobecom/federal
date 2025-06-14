import privacyState from './privacy-state.js';
import { setLibs, getLibs } from '../../scripts/utils.js';
import { loadStyle } from './utilities/loadStyle.js';

setLibs('/libs'); // <-- This is critical!
const miloLibs = getLibs();

function fragment(children) {
  const frag = document.createDocumentFragment();
  children.forEach(child => frag.appendChild(child));
  return frag;
}

const getValue = (arr, key) => arr?.data?.find((row) => row.key === key)?.value || '';

function collectConsentFromModal(modalContent) {
  const checkboxes = modalContent.querySelectorAll('.privacy-modal-cookiegroup input[type="checkbox"]:not(:disabled)');
  const checked = Array.from(checkboxes)
    .map((cb) => (cb.checked ? cb.closest('.privacy-modal-cookiegroup').dataset.cat : null))
    .filter(Boolean);
  if (!checked.includes('C0001')) checked.unshift('C0001');
  return checked;
}

function createAccordion(accordion, createTag) {
  const accWrap = createTag('div', { class: 'privacy-modal-accordion' });
  accordion.data.forEach((section) => {
    const item = createTag('div', { class: 'privacy-modal-accordion-item' });
    const header = createTag('button', { class: 'privacy-modal-accordion-header', type: 'button' }, section.heading);
    const body = createTag('div', { class: 'privacy-modal-accordion-body' }, section.description);
    header.onclick = () => item.classList.toggle('open');
    item.append(header, body);
    accWrap.appendChild(item);
  });
  return accWrap;
}
function createEnableInfo({ data = [] }, createTag) {
  const infoWrap = createTag('div', { class: 'privacy-modal-enableinfo' });
  const ei = data[0];
  if (!ei) return infoWrap;
  const makeList = (bullets) => (bullets ? bullets.split('\n').map((b) => createTag('li', null, b)) : [createTag('li', null, 'No bullets found!')]);
  const enabled = createTag('div', { class: 'privacy-modal-enabled' }, [
    createTag('h4', null, ei.enabled_heading),
    createTag('ul', null, fragment(makeList(ei.enabled_bullets))),
  ]);
  const disabled = createTag('div', { class: 'privacy-modal-disabled' }, [
    createTag('h4', null, ei.disabled_heading),
    createTag('ul', null, fragment(makeList(ei.disabled_bullets))),
  ]);
  infoWrap.append(enabled, disabled);
  return infoWrap;
}

function createCookieGroups(cookiegroups, createTag) {
  const activeConsent = privacyState.activeCookieGroups();
  const groupsWrap = createTag('div', { class: 'privacy-modal-cookiegroups' });
  cookiegroups.data.forEach((group, i) => {
    const cat = group.category || `C000${i + 1}`;
    const groupDiv = createTag('div', { class: 'privacy-modal-cookiegroup', 'data-cat': cat });
    const groupHeader = createTag('div', { class: 'privacy-modal-cookiegroup-header' });

    const inputAttrs = {
      type: 'checkbox',
      'aria-label': group.group_heading,
    };
    if (activeConsent.includes(cat)) inputAttrs.checked = true;
    if (group.always_active === 'true') inputAttrs.disabled = true; // if needed
    groupHeader.append(
      createTag('span', { class: 'privacy-modal-cookiegroup-title' }, group.group_heading),
      createTag('input', inputAttrs),
    );

    const desc = createTag('div', { class: 'privacy-modal-cookiegroup-desc' }, group.group_description);
    const link = createTag('a', {
      class: 'privacy-modal-cookiegroup-link',
      href: group.details_link_u,
      target: '_blank',
      rel: 'noopener noreferrer',
    }, group.details_link_text);
    groupDiv.append(groupHeader, desc, link);
    groupsWrap.appendChild(groupDiv);
  });
  return groupsWrap;
}

function showPrivacyToaster() {
  if (document.querySelector('.privacy-toast')) return;
  const toaster = document.createElement('div');
  toaster.className = 'privacy-toast';
  toaster.textContent = 'Your privacy preferences have been saved.';
  document.body.appendChild(toaster);
  setTimeout(() => toaster.remove(), 3000);
}

function createActions(actions, modalContent, cookiegroups, createTag) {
  const actionsDiv = createTag('div', { class: 'privacy-modal-actions' });
  let confirmBtn;
  actions.data.forEach((action) => {
    const btn = createTag('button', {
      class: `privacy-modal-action${action.primary === 'true' ? ' primary' : ''}`,
      'data-action': action.action,
      type: 'button',
      disabled: action.action === 'confirm' ? true : undefined,
    }, action.label);
    if (action.action === 'confirm') confirmBtn = btn;
    actionsDiv.appendChild(btn);
  });

  if (confirmBtn && modalContent) {
    const checkboxes = modalContent.querySelectorAll('.privacy-modal-cookiegroup input[type="checkbox"]:not(:disabled)');
    const initialState = Array.from(checkboxes).map(cb => cb.checked);
    checkboxes.forEach((cb, idx) => {
      cb.addEventListener('change', () => {
        const changed = Array.from(checkboxes).some((c, i) => c.checked !== initialState[i]);
        confirmBtn.disabled = !changed;
      });
    });
    confirmBtn.onclick = () => {
      const checkedCats = collectConsentFromModal(modalContent);
      window.adobePrivacy.setConsent(checkedCats);
      showPrivacyToaster();
      document.querySelector('#privacy-modal-v2')?.remove();
      document.querySelector('.modal-curtain')?.remove();
      document.body.classList.remove('disable-scroll');
    };
  }

  actionsDiv.querySelector('button[data-action="accept"]')?.addEventListener('click', () => {
    const allCats = cookiegroups.data.map((g, i) => g.category || `C000${i+1}`);
    privacyState.setConsent(allCats);
    showPrivacyToaster();
    document.querySelector('#privacy-modal-v2')?.remove();
    document.querySelector('.modal-curtain')?.remove();
    document.body.classList.remove('disable-scroll');
  });
  actionsDiv.querySelector('button[data-action="reject"]')?.addEventListener('click', () => {
    privacyState.setConsent(['C0001']);
    showPrivacyToaster();
    document.querySelector('#privacy-modal-v2')?.remove();
    document.querySelector('.modal-curtain')?.remove();
    document.body.classList.remove('disable-scroll');
  });

  return actionsDiv;
}

function buildModalContent(json, createTag) {
  const { privacy, enableinfo, accordion, actions, cookiegroups } = json;
  const wrap = createTag('div', { class: 'privacy-modal-content', role: 'dialog', 'aria-modal': true, 'aria-labelledby': 'privacy-modal-title' });

  wrap.append(
    createTag('h2', { id: 'privacy-modal-title' }, getValue(privacy, 'modal_title')),
    createTag('h3', null, getValue(privacy, 'main_heading')),
    createAccordion(accordion, createTag),
    createEnableInfo(enableinfo, createTag),
    createCookieGroups(cookiegroups, createTag),
  );

  const actionsDiv = createActions(actions, wrap, cookiegroups, createTag);
  wrap.prepend(actionsDiv);

  return wrap;
}

async function fetchPrivacyJson(config, getFederatedContentRoot) {
  const root = config.contentRoot ?? getFederatedContentRoot();
  const url1 = `${root}/privacy/privacy.json`;
  const url2 = 'https://stage--federal--adobecom.aem.page/federal/dev/snehal/privacy/privacy-modal.json';
  let resp = await fetch(url1, { cache: 'no-cache' });
  if (resp.ok) return resp.json();
  resp = await fetch(url2, { cache: 'no-cache' });
  if (resp.ok) return resp.json();
  throw new Error('Privacy JSON not found');
}

// ----------- MAIN EXPORT FUNCTION --------------
export default async function loadPrivacyModal(config, createTag, getMetadata) {
  // Dynamically get milo config/util
  const utilsModule = await import('../../scripts/utils.js');
  const getLibs = utilsModule.getLibs;
  const miloLibs = getLibs('/libs');
  const { getFederatedContentRoot } = await import(`${miloLibs}/utils/utils.js`);

  if (document.querySelector('.privacy-modal-backdrop')) return;
  loadStyle('./privacy-modal.css');
  
  const { getModal } = await import(`${miloLibs}/blocks/modal/modal.js`); // Adjust path if needed

  let privacyJson;
  try {
    privacyJson = await fetchPrivacyJson(config, getFederatedContentRoot);
  } catch (e) { return; }

  const content = buildModalContent(privacyJson, createTag);

  getModal(null, {
    class: 'privacy-modal-v2',
    id: 'privacy-modal-v2',
    content,
    closeEvent: 'closePrivacyModal',
  });

  content.querySelectorAll('.privacy-modal-action:not([data-action="confirm"])').forEach((btn) => {
    btn.onclick = () => {
      document.querySelector('#privacy-modal-v2')?.remove();
      document.querySelector('.modal-curtain')?.remove();
      document.body.classList.remove('disable-scroll');
    };
  });
}
