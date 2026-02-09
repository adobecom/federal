var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/Utils/Log.ts
var LANA_CLIENT_ID, lanaLog;
var init_Log = __esm({
  "src/Utils/Log.ts"() {
    "use strict";
    init_test_exports();
    LANA_CLIENT_ID = "feds-milo";
    lanaLog = (message, tags = "default", errorType = "e") => {
      const { locale } = getMiloConfig();
      const url = getMetadata("gnav-source") ?? `${locale.contentRoot ?? ""}/gnav`;
      if (!window.lana)
        console.warn("lana logging unavailable in the gnav");
      window?.lana?.log(`${message} | gnav-source: ${url} | href: ${window.location.href}`, {
        clientId: LANA_CLIENT_ID,
        sampleRate: 1,
        tags,
        errorType
      });
    };
  }
});

// src/Error/Error.ts
var IrrecoverableError, RecoverableError;
var init_Error = __esm({
  "src/Error/Error.ts"() {
    "use strict";
    init_Log();
    IrrecoverableError = class _IrrecoverableError extends Error {
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, _IrrecoverableError.prototype);
      }
    };
    RecoverableError = class _RecoverableError extends Error {
      constructor(message, severity = "Minor") {
        super(message);
        Object.setPrototypeOf(this, _RecoverableError.prototype);
        if (severity === "Critical") {
          lanaLog(message);
        }
      }
    };
  }
});

// src/Utils/Placeholders.ts
var setPlaceholders, getPlaceholders;
var init_Placeholders = __esm({
  "src/Utils/Placeholders.ts"() {
    "use strict";
    init_test_exports();
    init_Log();
    init_Utils();
    [
      setPlaceholders,
      getPlaceholders
    ] = /* @__PURE__ */ (() => {
      let placeholdersPromise;
      return [
        (p) => {
          if (placeholdersPromise) return;
          placeholdersPromise = p;
        },
        () => {
          if (!placeholdersPromise) {
            throw new Error("Placeholders not initialized. Call setPlaceholders() first.");
          }
          return placeholdersPromise;
        }
      ];
    })();
  }
});

// src/Utils/Utils.ts
function loadLink(href, {
  id,
  as,
  callback,
  crossorigin,
  rel,
  fetchpriority
} = { rel: "stylesheet" }) {
  const existingLink = document.head.querySelector(`link[href="${href}"]`);
  if (existingLink) {
    callback?.("noop");
    return existingLink;
  }
  const link = document.createElement("link");
  link.setAttribute("rel", rel);
  if (id !== void 0) link.setAttribute("id", id);
  if (as !== void 0) link.setAttribute("as", as);
  if (crossorigin !== void 0) link.setAttribute("crossorigin", crossorigin);
  if (fetchpriority !== void 0) link.setAttribute("fetchpriority", fetchpriority);
  link.setAttribute("href", href);
  if (callback) {
    link.onload = (e) => callback(e.type);
    link.onerror = (e) => callback(typeof e === "string" ? "error" : e.type);
  }
  document.head.appendChild(link);
  return link;
}
function loadStyle(href, callback) {
  return loadLink(href, { rel: "stylesheet", callback });
}
function loadStyles(url, override = false) {
  if (!override) return;
  loadStyle(url);
}
function getMetadata(name, doc = document) {
  const attr = name && name.includes(":") ? "property" : "name";
  const meta = doc.head.querySelector(`meta[${attr}="${name}"]`);
  return meta?.content ?? null;
}
function getDefaultLangstoreCountry(language) {
  let country = LanguageMap[language];
  if (!country && GeoMap[language]) {
    country = language;
  }
  if (!country && language.includes("-")) {
    [country] = language.split("-");
  }
  return country || "US";
}
function getMiloLocaleSettings(miloLocale) {
  const localePrefix = miloLocale?.prefix || "US_en";
  const geo = localePrefix.replace("/", "") ?? "";
  let [country = "US", language = "en"] = (GeoMap[geo] ?? geo).split("_", 2);
  if (geo.startsWith(LANG_STORE_PREFIX) || window.location.pathname.startsWith(`/${LANG_STORE_PREFIX}`)) {
    const localeLang = geo.replace(LANG_STORE_PREFIX, "").toLowerCase();
    country = getDefaultLangstoreCountry(localeLang);
    language = localeLang;
  }
  country = country.toUpperCase();
  language = language.toLowerCase();
  return {
    language,
    country,
    locale: `${language}_${country}`
  };
}
var isDesktop, icons, alternative, escapeHTML, isDarkMode, loadScript, isValidMiloConfig, setMiloConfig, getMiloConfig, LanguageMap, GeoMap, LANG_STORE_PREFIX;
var init_Utils = __esm({
  "src/Utils/Utils.ts"() {
    "use strict";
    init_Error();
    init_Log();
    init_Placeholders();
    isDesktop = window.matchMedia("(min-width: 900px)");
    icons = {
      brand: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',
      company: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',
      search: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',
      home: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'
    };
    alternative = (primaryFn) => {
      return {
        eval: primaryFn,
        or: (fallbackFn) => alternative((input) => {
          try {
            return primaryFn(input);
          } catch (_error) {
            return fallbackFn(input);
          }
        })
      };
    };
    escapeHTML = (str) => {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    };
    isDarkMode = () => {
      return true;
    };
    loadScript = (url, type, { mode, id } = {}) => new Promise((resolve, reject) => {
      let script = document.querySelector(`head > script[src="${url}"]`);
      if (!script) {
        const { head } = document;
        script = document.createElement("script");
        script.setAttribute("src", url);
        if (id !== null && id !== void 0) script.setAttribute("id", id);
        if (type !== null && type !== void 0) {
          script.setAttribute("type", type);
        }
        if (mode && ["async", "defer"].includes(mode)) script.setAttribute(mode, "");
        head.append(script);
      }
      const loaded = script.dataset.loaded;
      if (loaded !== null && loaded !== void 0) {
        resolve(script);
        return;
      }
      const onScript = (event) => {
        script.removeEventListener("load", onScript);
        script.removeEventListener("error", onScript);
        if (event.type === "error") {
          reject(new Error(`error loading script: ${script.src}`));
        } else if (event.type === "load") {
          script.dataset.loaded = "true";
          resolve(script);
        }
      };
      script.addEventListener("load", onScript);
      script.addEventListener("error", onScript);
    });
    isValidMiloConfig = (config) => {
      const cfg = config;
      const invalid = (x) => x === null || x === void 0 || typeof x !== "object";
      if (invalid(cfg)) return false;
      if (invalid(cfg.locale)) return false;
      const locale = cfg.locale;
      if (typeof locale.prefix !== "string") return false;
      if (invalid(cfg.env)) return false;
      const env = cfg.env;
      if (typeof env.name !== "string") return false;
      if (cfg.unav !== void 0) {
        if (typeof cfg.unav !== "object" || cfg.unav === null) return false;
        const unav = cfg.unav;
        if (unav.profile !== void 0) {
          if (typeof unav.profile !== "object" || unav.profile === null) return false;
          const profile = unav.profile;
          if (profile.signInCtaStyle !== void 0) {
            if (profile.signInCtaStyle !== "primary" && profile.signInCtaStyle !== "secondary") {
              return false;
            }
          }
          if (profile.messageEventListener !== void 0 && typeof profile.messageEventListener !== "function") {
            return false;
          }
        }
      }
      if (cfg.jarvis !== void 0) {
        if (typeof cfg.jarvis !== "object" || cfg.jarvis === null) return false;
        const jarvis = cfg.jarvis;
        if (typeof jarvis.id !== "string") return false;
      }
      return true;
    };
    [setMiloConfig, getMiloConfig] = /* @__PURE__ */ (() => {
      let miloConfig;
      let isInitialized = false;
      return [
        (config) => {
          if (config === null) {
            isInitialized = false;
            miloConfig = void 0;
            return;
          }
          if (isInitialized) {
            return;
          }
          if (!isValidMiloConfig(config)) {
            throw new Error("MiloConfig validation failed: Invalid structure");
          }
          miloConfig = config;
          isInitialized = true;
        },
        () => {
          if (!miloConfig) {
            throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");
          }
          return miloConfig;
        }
      ];
    })();
    LanguageMap = {
      en: "US",
      "en-gb": "GB",
      "es-mx": "MX",
      "fr-ca": "CA",
      da: "DK",
      et: "EE",
      ar: "DZ",
      el: "GR",
      iw: "IL",
      he: "IL",
      id: "ID",
      ms: "MY",
      nb: "NO",
      sl: "SI",
      sv: "SE",
      cs: "CZ",
      uk: "UA",
      hi: "IN",
      "zh-hans": "CN",
      "zh-hant": "TW",
      ja: "JP",
      ko: "KR",
      fil: "PH",
      th: "TH",
      vi: "VN"
    };
    GeoMap = {
      ar: "AR_es",
      be_en: "BE_en",
      be_fr: "BE_fr",
      be_nl: "BE_nl",
      br: "BR_pt",
      ca: "CA_en",
      ch_de: "CH_de",
      ch_fr: "CH_fr",
      ch_it: "CH_it",
      cl: "CL_es",
      co: "CO_es",
      la: "DO_es",
      mx: "MX_es",
      pe: "PE_es",
      africa: "MU_en",
      dk: "DK_da",
      de: "DE_de",
      ee: "EE_et",
      eg_ar: "EG_ar",
      eg_en: "EG_en",
      es: "ES_es",
      fr: "FR_fr",
      gr_el: "GR_el",
      gr_en: "GR_en",
      ie: "IE_en",
      il_he: "IL_iw",
      it: "IT_it",
      lv: "LV_lv",
      lt: "LT_lt",
      lu_de: "LU_de",
      lu_en: "LU_en",
      lu_fr: "LU_fr",
      my_en: "MY_en",
      my_ms: "MY_ms",
      hu: "HU_hu",
      mt: "MT_en",
      mena_en: "DZ_en",
      mena_ar: "DZ_ar",
      nl: "NL_nl",
      no: "NO_nb",
      pl: "PL_pl",
      pt: "PT_pt",
      ro: "RO_ro",
      si: "SI_sl",
      sk: "SK_sk",
      fi: "FI_fi",
      se: "SE_sv",
      tr: "TR_tr",
      uk: "GB_en",
      at: "AT_de",
      cz: "CZ_cs",
      bg: "BG_bg",
      ru: "RU_ru",
      ua: "UA_uk",
      au: "AU_en",
      in_en: "IN_en",
      in_hi: "IN_hi",
      id_en: "ID_en",
      id_id: "ID_id",
      nz: "NZ_en",
      sa_ar: "SA_ar",
      sa_en: "SA_en",
      sg: "SG_en",
      cn: "CN_zh-Hans",
      tw: "TW_zh-Hant",
      hk_zh: "HK_zh-hant",
      jp: "JP_ja",
      kr: "KR_ko",
      za: "ZA_en",
      ng: "NG_en",
      cr: "CR_es",
      ec: "EC_es",
      pr: "US_es",
      // not a typo, should be US
      gt: "GT_es",
      cis_en: "TM_en",
      cis_ru: "TM_ru",
      sea: "SG_en",
      th_en: "TH_en",
      th_th: "TH_th"
    };
    LANG_STORE_PREFIX = "langstore/";
  }
});

// src/Components/Link/Parse.ts
var ERRORS, parseLink;
var init_Parse = __esm({
  "src/Components/Link/Parse.ts"() {
    "use strict";
    init_Error();
    ERRORS = {
      elementNull: "Error when parsing Link. Element is null",
      notAnchor: "Cannot parse non-anchor as Link",
      textContentNotFound: "Error when parsing Link. Element has no textContent",
      hrefNotFound: "Element has no href"
    };
    parseLink = (anchor) => {
      if (anchor === null)
        throw new IrrecoverableError(ERRORS.elementNull);
      if (anchor.tagName !== "A")
        throw new IrrecoverableError(ERRORS.notAnchor);
      const text = anchor?.textContent ?? "";
      if (text === "")
        throw new IrrecoverableError(ERRORS.textContentNotFound);
      const href = anchor?.getAttribute("href") ?? "";
      if (href === "")
        throw new IrrecoverableError(ERRORS.hrefNotFound);
      return [
        {
          type: "Link",
          text,
          href
        },
        []
      ];
    };
  }
});

// src/Components/LinkGroup/Parse.ts
var parseLinkGroup, ERRORS2, parseLinkGroupLink, parseLinkGroupHeader, parseLinkGroupBlue;
var init_Parse2 = __esm({
  "src/Components/LinkGroup/Parse.ts"() {
    "use strict";
    init_Error();
    init_Utils();
    init_Parse();
    parseLinkGroup = (element) => alternative(parseLinkGroupHeader).or(parseLinkGroupLink).or(parseLinkGroupBlue).eval(element);
    ERRORS2 = {
      elementNull: "Element not found",
      noTitleAnchor: "Title anchor not found",
      noHref: "Title Anchor has no href",
      noTitle: "Title text not found",
      noSubtitleP: "Subtitle <p> not found",
      noSubtitle: "Subtitle text not found",
      notAHeader: "Expected a Header class"
    };
    parseLinkGroupLink = (element) => {
      const errors = /* @__PURE__ */ new Set();
      if (!element)
        throw new IrrecoverableError(ERRORS2.elementNull);
      const titleElement = element.querySelector("p a");
      if (!titleElement)
        throw new IrrecoverableError(ERRORS2.noTitleAnchor);
      const title = titleElement.textContent ?? "";
      if (title === "")
        errors.add(new RecoverableError(ERRORS2.noTitle));
      const href = titleElement.getAttribute("href") ?? "";
      if (href === "")
        errors.add(new RecoverableError(ERRORS2.noHref));
      const subtitleElement = titleElement?.closest("p")?.nextElementSibling;
      if (!subtitleElement)
        throw new IrrecoverableError(ERRORS2.noSubtitleP);
      const subtitle = subtitleElement.textContent ?? "";
      if (subtitle === "")
        errors.add(new RecoverableError(ERRORS2.noSubtitle));
      const [iconHref = null, iconAlt = null] = (element.firstElementChild?.firstElementChild?.textContent?.split("|") ?? []).map((x) => x.trim());
      return [
        {
          type: "LinkGroupLink",
          iconHref,
          iconAlt,
          title,
          href,
          subtitle
        },
        [...errors]
      ];
    };
    parseLinkGroupHeader = (element) => {
      if (!element)
        throw new IrrecoverableError(ERRORS2.elementNull);
      const classes = [...element.classList];
      if (!classes.includes("header"))
        throw new IrrecoverableError(ERRORS2.notAHeader);
      const title = element.querySelector("a")?.textContent ?? "";
      if (title === "")
        throw new IrrecoverableError(ERRORS2.noTitle);
      return [
        {
          type: "LinkGroupHeader",
          title,
          classes
        },
        []
      ];
    };
    parseLinkGroupBlue = (element) => {
      if (!element)
        throw new IrrecoverableError(ERRORS2.elementNull);
      if (!element.classList.contains("blue"))
        throw new Error("Not a Blue Link Group");
      const a = element.querySelector("a");
      const [link, es] = parseLink(a);
      return [
        {
          type: "LinkGroupBlue",
          link
        },
        es
      ];
    };
  }
});

// src/Components/LinkGroup/linkGroup.css
var css, style;
var init_linkGroup = __esm({
  "src/Components/LinkGroup/linkGroup.css"() {
    "use strict";
    css = "/**\n * Link Group Styles\n */\n.feds-link-group {\n    --title-color: #2f2f2f;\n    --sub-title-color: #4b4b4b;\n    --bg-hover-color: #e9e9e9;\n    --accent-color: #274dea;\n    --accent-color-hover: #1d3ecf;\n    --header-border-color: #b6b6b6;\n    --header-background-color: #eaeaea;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n}\n\n.feds-link-group:hover {\n    background-color: var(--bg-hover-color);\n}\n\n.feds-link-group__title {\n    /* font-family: var(--heading-font-family); */\n    font-size: 0.875rem;\n    font-weight: 700;\n    line-height: 1rem;\n    color: var(--title-color);\n}\n\n.feds-link-group__subtitle {\n    font-size: 0.75rem;\n    line-height: 1rem;\n    color: var(--sub-title-color);\n}\n\n.feds-link-group--blue,\n.feds-link-group--blue .feds-link-group__title {\n    color: var(--accent-color);\n}\n\n.feds-link-group--blue:hover,\n.feds-link-group--blue:hover .feds-link-group__title {\n    color: var(--accent-color-hover);\n}\n\n/* styles overriden coming from styles.css */\n.feds-link-group.feds-link-group--blue {\n    text-decoration: underline;\n}\n\n.feds-link-group.feds-link-group--gray-gradient {\n    background-color: var(--header-background-color);\n}\n\n@media (min-width: 900px) {\n    .feds-link-group {\n        --title-color: #9f9f9f;\n        --sub-title-color: #9f9f9f;\n        --title-color-hover: #fff;\n        --sub-title-color-hover: #fff;\n        --bg-hover-color: transparent;\n        --header-background-color: transparent;\n        padding: 0;\n    }\n\n    .feds-link-group--blue,\n    .feds-link-group--blue:hover {\n        color: var(--title-color-hover);\n    }\n\n    .feds-link-group__content {\n        padding: 24px 0;\n    }\n\n    .feds-link-group__title {\n        font-size: 1.25rem;\n        line-height: 115%;\n        padding-bottom: 10px;\n    }\n\n    .feds-link-group:hover .feds-link-group__title {\n        color: var(--title-color-hover);\n    }\n\n    .feds-link-group__subtitle {\n        font-size: 0.875rem;\n        line-height: 140%;\n    }\n\n    .feds-link-group:hover .feds-link-group__subtitle {\n        color: var(--sub-title-color-hover);\n    }\n\n    .feds-link-group--blue .feds-link-group__title,\n    .feds-link-group.feds-link-group--gray-gradient .feds-link-group__title{\n        color: var(--title-color-hover);\n    }\n\n    .feds-link-group.feds-link-group--header .feds-link-group__title {\n        color: var(--title-color);\n        border-bottom: 1px solid var(--header-border-color);\n    }\n\n    .feds-link-group.feds-link-group--header .feds-link-group__content {\n        width: 100%;\n    }\n}\n";
    style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }
});

// src/Components/LinkGroup/Render.ts
var linkGroup, linkGroupHeader, linkGroupLink, linkGroupBlue;
var init_Render = __esm({
  "src/Components/LinkGroup/Render.ts"() {
    "use strict";
    init_linkGroup();
    linkGroup = (lg) => {
      switch (lg.type) {
        case "LinkGroupHeader":
          return linkGroupHeader(lg);
        case "LinkGroupLink":
          return linkGroupLink(lg);
        case "LinkGroupBlue":
          return linkGroupBlue(lg);
        default: {
          const exhaustivenessCheck = lg;
          console.error(exhaustivenessCheck);
          return "";
        }
      }
    };
    linkGroupHeader = ({
      title,
      classes
    }) => {
      const classNames = classes.slice(1).map((cls) => `feds-link-group--${cls}`).join(" ");
      return `
    <div role="heading" class="feds-link-group ${classNames}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${title}</div>
      </div>
    </div>
  `;
    };
    linkGroupLink = ({
      iconHref,
      iconAlt,
      title,
      href,
      subtitle
    }) => {
      const hasIcon = iconAlt !== null && iconHref !== null;
      const icon = !hasIcon ? "" : `
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${iconHref}"
          alt="${iconAlt}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `;
      return `
    <a class="feds-link-group" href="${href}" daa-ll="${title}">
      ${icon}
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${title}</div>
        <div class="feds-link-group__subtitle">${subtitle}</div>
      </div>
    </a>
  `;
    };
    linkGroupBlue = ({
      link
    }) => `
  <a href="${link.href}" class="feds-link-group feds-link-group--blue" daa-ll="${link.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${link.text}</div>
      </div>
  </a>
`;
  }
});

// src/Components/Brand/Parse.ts
var ERRORS3, IMG_REGEX, extractImageSource, extractAltText, parseBrand;
var init_Parse3 = __esm({
  "src/Components/Brand/Parse.ts"() {
    "use strict";
    init_Error();
    init_Utils();
    ERRORS3 = {
      elementNull: "Error when parsing Brand. Element is null",
      noLinks: "Error when parsing Brand. No links found",
      noPrimaryLink: "Error when parsing Brand. No primary link found"
    };
    IMG_REGEX = /(\.png|\.jpg|\.jpeg|\.svg)/i;
    extractImageSource = (element) => {
      const imgSrc = element.querySelector("picture img")?.getAttribute("src") ?? null;
      if (imgSrc !== null && imgSrc !== "") return imgSrc;
      const text = element.textContent?.trim();
      if (text !== void 0 && text !== "" && IMG_REGEX.test(text)) {
        const source = text.split("|")[0]?.trim();
        if (source !== void 0 && source !== "") return source;
      }
      const href = element.getAttribute("href");
      return href !== null && href !== "" && IMG_REGEX.test(href) ? href : null;
    };
    extractAltText = (element) => {
      const text = element.textContent?.trim();
      if (text?.includes("|") === true) {
        const alt = text.split("|")[1]?.trim();
        if (alt) return alt;
      }
      const altAttr = element.querySelector("img")?.getAttribute("alt");
      return altAttr ?? "";
    };
    parseBrand = (element) => {
      if (element === null) {
        throw new IrrecoverableError(ERRORS3.elementNull);
      }
      const rawBlock = element.querySelector(".gnav-brand");
      if (rawBlock === null) {
        throw new IrrecoverableError(ERRORS3.elementNull);
      }
      const blockLinks = [...rawBlock.querySelectorAll("a")];
      if (blockLinks.length === 0) {
        throw new IrrecoverableError(ERRORS3.noLinks);
      }
      const primaryLink = blockLinks.find((link) => {
        const textContent = link.textContent ?? "";
        return !IMG_REGEX.test(link.href) && !IMG_REGEX.test(textContent);
      });
      if (!primaryLink) {
        throw new IrrecoverableError(ERRORS3.noPrimaryLink);
      }
      const isBrandImageOnly = rawBlock.matches(".brand-image-only");
      const noLogo = rawBlock.matches(".no-logo");
      const imageOnly = rawBlock.matches(".image-only");
      const renderImage2 = !noLogo;
      const renderLabel = !isBrandImageOnly && !imageOnly;
      const imageLinks = blockLinks.filter((link) => {
        const textContent = link.textContent ?? "";
        return IMG_REGEX.test(link.href) || IMG_REGEX.test(textContent);
      });
      const [imgSrc, imgSrcDark, altText] = (() => {
        const defaultImgSrc = isBrandImageOnly ? icons.brand : icons.company;
        const [svgImgSrc = null, svgDarkImgSrc = null] = [...rawBlock.querySelectorAll('picture img[src$=".svg"]')].map((img) => img?.src).filter((src) => src?.length > 0);
        const [imgSrc2 = null, imgSrcDark2 = null] = imageLinks.map(extractImageSource);
        const altText2 = imageLinks[0] instanceof Element ? extractAltText(imageLinks[0]) : primaryLink.textContent?.trim() ?? "";
        return [
          imgSrc2 ?? svgImgSrc ?? defaultImgSrc,
          imgSrcDark2 ?? svgDarkImgSrc,
          altText2
        ];
      })();
      const label = primaryLink.textContent?.trim() ?? "";
      const href = primaryLink.href;
      if (!renderImage2 && !renderLabel) return [{ type: "Brand", data: { type: "NoRender" } }, []];
      const selectSource = (light, dark) => {
        const hasDark = dark !== null && dark !== void 0 && dark !== "";
        return isDarkMode() && hasDark ? dark : light;
      };
      const imageData = imgSrc.startsWith("<svg") ? { type: "inline-svg", svgContent: selectSource(imgSrc, imgSrcDark), alt: altText } : { type: "image", src: selectSource(imgSrc, imgSrcDark), alt: altText };
      if (renderImage2 && renderLabel) {
        return [{ type: "Brand", data: { type: "LabelledBrand", href, label, image: imageData } }, []];
      }
      if (renderImage2 && isBrandImageOnly) {
        return [{ type: "Brand", data: { type: "BrandImageOnly", href, image: imageData, alt: altText } }, []];
      }
      if (renderImage2 && imageOnly) {
        return [{ type: "Brand", data: { type: "ImageOnlyBrand", href, image: imageData, alt: altText } }, []];
      }
      return [{ type: "Brand", data: { type: "BrandLabelOnly", href, label } }, []];
    };
  }
});

// src/Components/Brand/brand.css
var css2, style2;
var init_brand = __esm({
  "src/Components/Brand/brand.css"() {
    "use strict";
    css2 = ".feds-brand-container {\n    display: flex;\n    flex-shrink: 0;\n}\n\n.feds-brand {\n    display: flex;\n}\n\n.feds-brand,\n.feds-logo {\n    align-items: center;\n    outline-offset: 2px;\n    padding: 0 var(--feds-gutter);\n    column-gap: 10px;\n}\n\n.feds-brand-image,\n.feds-logo-image {\n    width: 25px;\n    flex-shrink: 0;\n}\n\n.feds-brand-image.brand-image-only {\n    height: 36px;\n    width: auto;\n    min-width: 66px;\n}\n\n.feds-brand-image.brand-image-only picture,\n.feds-brand-image.brand-image-only img,\n.feds-brand-image.brand-image-only svg {\n    width: auto;\n    height: 100%;\n}\n\n.feds-brand-image picture,\n.feds-brand-image img,\n.feds-brand-image svg,\n.feds-logo-image picture,\n.feds-logo-image img,\n.feds-logo-image svg {\n    width: 100%;\n    display: block;\n}\n\n.feds-brand-label,\n.feds-logo-label {\n    flex-shrink: 0;\n    font-weight: 700;\n    font-size: 18px;\n    color: var(--feds-color-adobeBrand);\n}\n\n@media (min-width: 900px) {\n    .feds-brand-image+.feds-brand-label {\n        display: flex;\n    }\n}";
    style2 = document.createElement("style");
    style2.textContent = css2;
    document.head.appendChild(style2);
  }
});

// src/Components/Brand/Render.ts
var renderImage, renderBrand, brand;
var init_Render2 = __esm({
  "src/Components/Brand/Render.ts"() {
    "use strict";
    init_brand();
    renderImage = (image, imageOnly) => {
      const cls = `feds-brand-image${imageOnly ? " brand-image-only" : ""}`;
      if (image.type === "inline-svg") {
        return `<span class="${cls}">${image.svgContent}</span>`;
      }
      const alt = image.alt ? ` alt="${image.alt}"` : "";
      return `<span class="${cls}"><img src="${image.src}"${alt} /></span>`;
    };
    renderBrand = (href, content, ariaLabel = "") => `<div class="feds-brand-container">
    <a href="${href}" class="feds-brand" daa-ll="Brand"${ariaLabel}>
      ${content}
    </a>
  </div>`.trim();
    brand = (brandData) => {
      const { data } = brandData;
      switch (data.type) {
        case "LabelledBrand":
          return renderBrand(
            data.href,
            renderImage(data.image, false) + `<span class="feds-brand-label">${data.label}</span>`
          );
        case "BrandImageOnly": {
          const aria = data.alt ? ` aria-label="${data.alt}"` : "";
          return renderBrand(
            data.href,
            renderImage(data.image, true),
            aria
          );
        }
        case "ImageOnlyBrand": {
          const aria = data.alt ? ` aria-label="${data.alt}"` : "";
          return renderBrand(
            data.href,
            renderImage(data.image, false),
            aria
          );
        }
        case "BrandLabelOnly":
          return renderBrand(
            data.href,
            `<span class="feds-brand-label">${data.label}</span>`
          );
        case "NoRender":
          return "";
        default:
          data;
          return "";
      }
    };
  }
});

// src/PostRendering/ImsLoader.ts
async function loadIms() {
  imsLoaded = imsLoaded || new Promise((resolve, reject) => {
    const config = getMiloConfig();
    const {
      locale,
      imsClientId,
      imsScope,
      env,
      base,
      adobeid,
      imsTimeout
    } = config;
    if (!imsClientId) {
      reject(new Error("Missing IMS Client ID"));
      return;
    }
    const [unavMeta, ahomeMeta, imsGuest] = [
      getMetadata("universal-nav")?.trim(),
      getMetadata("adobe-home-redirect"),
      getMetadata("ims-guest-token")
    ];
    const defaultScope = `AdobeID,openid,gnav${unavMeta && unavMeta !== "off" ? ",pps.read,firefly_api,additional_info.roles,read_organizations,account_cluster.read" : ""}`;
    const timeout = setTimeout(
      () => reject(new Error("IMS timeout")),
      imsTimeout || 5e3
    );
    window.adobeid = {
      client_id: imsClientId,
      scope: imsScope || defaultScope,
      locale: locale?.ietf?.replace("-", "_") || "en_US",
      redirect_uri: ahomeMeta === "on" ? `https://www${env.name !== "prod" ? ".stage" : ""}.adobe.com${locale.prefix}` : void 0,
      autoValidateToken: true,
      environment: env.ims,
      useLocalStorage: false,
      onReady: () => {
        resolve();
        clearTimeout(timeout);
      },
      onError: reject,
      ...imsGuest === "on" && {
        api_parameters: { check_token: { guest_allowed: true } },
        enableGuestAccounts: true,
        enableGuestTokenForceRefresh: true
      },
      ...adobeid
    };
    const path = PAGE_URL.searchParams.get("useAlternateImsDomain") ? "https://auth.services.adobe.com/imslib/imslib.min.js" : `${base}/deps/imslib.min.js`;
    loadScript(path);
  }).then(() => {
  }).catch((e) => {
    imsLoaded = void 0;
    throw e;
  });
  return imsLoaded;
}
var PAGE_URL, imsLoaded;
var init_ImsLoader = __esm({
  "src/PostRendering/ImsLoader.ts"() {
    "use strict";
    init_Utils();
    PAGE_URL = new URL(window.location.href);
  }
});

// src/PostRendering/Unav/Unav.utils.ts
function getUnavWidthCSS(unavComponents, signedOut = false) {
  const iconWidth = 32;
  const flexGap = 0.25;
  const sectionDivider = false;
  const sectionDividerMargin = 4;
  const cartEnabled = /uc_carts=/.test(document.cookie);
  const components = (!cartEnabled ? unavComponents?.filter((x) => x !== "cart") : unavComponents) ?? [];
  const n = components.length ?? 3;
  if (signedOut) {
    const l = components.filter((c) => SIGNED_OUT_ICONS.includes(c)).length;
    const signInButton = 92;
    return `calc(${signInButton}px + ${l * iconWidth}px + ${l * flexGap}rem${sectionDivider ? ` + 2px + ${2 * sectionDividerMargin}px + ${flexGap}rem` : ""})`;
  }
  return `calc(${n * iconWidth}px + ${(n - 1) * flexGap}rem${sectionDivider ? ` + 2px + ${2 * sectionDividerMargin}px + ${flexGap}rem` : ""})`;
}
var SIGNED_OUT_ICONS, LANGMAP, setUserProfile, getUserProfile, getUniversalNavLocale, OS_MAP, getDevice, getVisitorGuid;
var init_Unav_utils = __esm({
  "src/PostRendering/Unav/Unav.utils.ts"() {
    "use strict";
    SIGNED_OUT_ICONS = ["appswitcher", "help"];
    LANGMAP = {
      cs: ["cz"],
      da: ["dk"],
      de: ["at"],
      en: ["africa", "au", "ca", "ie", "in", "mt", "ng", "nz", "sg", "za"],
      es: ["ar", "cl", "co", "cr", "ec", "gt", "la", "mx", "pe", "pr"],
      et: ["ee"],
      ja: ["jp"],
      ko: ["kr"],
      nb: ["no"],
      pt: ["br"],
      sl: ["si"],
      sv: ["se"],
      uk: ["ua"],
      zh: ["cn", "tw"]
    };
    [setUserProfile, getUserProfile] = (() => {
      let profileData;
      let profileResolve;
      let profileTimeout;
      const profilePromise = new Promise((resolve) => {
        profileResolve = resolve;
        profileTimeout = setTimeout(() => {
          profileData = {};
          resolve(profileData);
        }, 5e3);
      });
      return [
        (data) => {
          if (data && !profileData) {
            profileData = data;
            clearTimeout(profileTimeout);
            profileResolve?.(profileData);
          }
        },
        () => profilePromise
      ];
    })();
    getUniversalNavLocale = (locale) => {
      if (!locale.prefix || locale.prefix === "/") return "en_US";
      const prefix = locale.prefix.replace("/", "");
      if (prefix.includes("_")) {
        const [lang, country] = prefix.split("_").reverse();
        return `${lang.toLowerCase()}_${country.toUpperCase()}`;
      }
      if (prefix === "uk") return "en_GB";
      const customLang = Object.keys(LANGMAP).find(
        (key) => LANGMAP[key].includes(prefix)
      );
      if (customLang) return `${customLang.toLowerCase()}_${prefix.toUpperCase()}`;
      return `${prefix.toLowerCase()}_${prefix.toUpperCase()}`;
    };
    OS_MAP = {
      Mac: "macOS",
      Win: "windows",
      Linux: "linux",
      CrOS: "chromeOS",
      Android: "android",
      iPad: "iPadOS",
      iPhone: "iOS"
    };
    getDevice = () => {
      const agent = navigator.userAgent;
      for (const [os, osName] of Object.entries(OS_MAP)) {
        if (agent.includes(os)) {
          return osName;
        }
      }
      return "linux";
    };
    getVisitorGuid = async () => {
      const windowWithAlloy = window;
      return windowWithAlloy.alloy ? await windowWithAlloy.alloy("getIdentity").then((data) => data?.identity?.ECID).catch(() => void 0) : void 0;
    };
  }
});

// src/PostRendering/Unav/Unav.config.ts
function getHelpChildren() {
  const { unav } = getMiloConfig();
  return unav?.unavHelpChildren || [
    { type: "Support" },
    { type: "Community" }
  ];
}
var getSignInContext, getSignInCtaStyle, getMessageEventListener, getUnavComponents;
var init_Unav_config = __esm({
  "src/PostRendering/Unav/Unav.config.ts"() {
    "use strict";
    init_Unav_utils();
    init_Utils();
    getSignInContext = () => {
      try {
        const config = getMiloConfig();
        return config.signInContext || {};
      } catch {
        return {};
      }
    };
    getSignInCtaStyle = () => {
      const config = getMiloConfig();
      const isPrimary = getMetadata("signin-cta-style") === "primary" || config?.unav?.profile?.signInCtaStyle === "primary";
      return isPrimary ? "primary" : "secondary";
    };
    getMessageEventListener = () => {
      const config = getMiloConfig();
      const configListener = config?.unav?.profile?.messageEventListener;
      if (configListener) return configListener;
      return (event) => {
        const { name, payload, executeDefaultAction } = event.detail;
        if (!name || name !== "System" || !payload || typeof executeDefaultAction !== "function") return;
        switch (payload.subType) {
          case "AppInitiated":
            window.adobeProfile?.getUserProfile().then((data) => {
              setUserProfile(data);
            }).catch(() => {
              setUserProfile({});
            });
            break;
          case "SignOut":
            executeDefaultAction();
            break;
          case "ProfileSwitch":
            Promise.resolve(executeDefaultAction()).then((profile) => {
              if (profile) window.location.reload();
            });
            break;
          default:
            break;
        }
      };
    };
    getUnavComponents = () => {
      const config = getMiloConfig();
      return {
        profile: {
          name: "profile",
          attributes: {
            accountMenuContext: {
              sharedContextConfig: {
                enableLocalSection: true,
                enableProfileSwitcher: true,
                miniAppContext: {
                  logger: {
                    trace: () => {
                    },
                    debug: () => {
                    },
                    info: () => {
                    },
                    // TODO: Integrate with lanaLog for proper logging
                    // warn: (e) => lanaLog({ message: 'Profile Menu warning', e, tags: 'universalnav,warn' }),
                    // error: (e) => lanaLog({ message: 'Profile Menu error', e, tags: 'universalnav', errorType: 'e' }),
                    warn: () => {
                    },
                    error: () => {
                    }
                  }
                },
                complexConfig: config?.unav?.profile?.complexConfig || null,
                ...config?.unav?.profile?.config
              },
              messageEventListener: getMessageEventListener()
            },
            // UNav 1.5: Support for primary/secondary signIn CTA style
            // Setting signInCtaStyle = 'primary' makes signIn CTA primary and signUp secondary
            signInCtaStyle: getSignInCtaStyle(),
            isSignUpRequired: false,
            callbacks: {
              onSignIn: () => {
                window.adobeIMS?.signIn(getSignInContext());
              },
              onSignUp: () => {
                window.adobeIMS?.signIn(getSignInContext());
              }
            }
          }
        },
        appswitcher: {
          name: "app-switcher"
        },
        notifications: {
          name: "notifications",
          attributes: {
            notificationsConfig: {
              applicationContext: {
                appID: config?.unav?.uncAppId || "adobecom",
                ...config?.unav?.uncConfig
              }
            }
          }
        },
        help: {
          name: "help",
          attributes: {
            children: getHelpChildren()
          }
        },
        jarvis: {
          name: "jarvis",
          attributes: {
            appid: config?.jarvis?.id,
            callbacks: config?.jarvis?.callbacks
          }
        },
        cart: {
          name: "cart"
        }
      };
    };
  }
});

// src/PostRendering/Unav/Unav.loader.ts
var setProfileSignUpRequired, loadUnav;
var init_Unav_loader = __esm({
  "src/PostRendering/Unav/Unav.loader.ts"() {
    "use strict";
    init_Error();
    init_Utils();
    init_Unav_utils();
    init_Unav_config();
    setProfileSignUpRequired = (children, value) => {
      if (children[0] && "attributes" in children[0] && children[0].attributes && typeof children[0].attributes === "object" && "isSignUpRequired" in children[0].attributes) {
        children[0].attributes.isSignUpRequired = value;
      }
    };
    loadUnav = async (nav, _config) => {
      try {
        const utilitiesContainer = nav.querySelector(".feds-utilities");
        if (!(utilitiesContainer instanceof HTMLElement)) {
          return new RecoverableError('missing ".feds-utilities" container');
        }
        const errors = /* @__PURE__ */ new Set();
        const meta = document.head.querySelector('meta[name="universal-nav"]');
        const rawValue = meta instanceof HTMLMetaElement ? meta.content ?? "" : "";
        if (!(meta instanceof HTMLMetaElement)) {
          errors.add(new RecoverableError('metadata "universal-nav" is missing'));
        }
        const trimmedValue = rawValue.trim();
        if (meta instanceof HTMLMetaElement && trimmedValue.length === 0) {
          errors.add(new RecoverableError('metadata "universal-nav" has no value'));
        }
        const signedOut = !window.adobeIMS?.isSignedInUser();
        const unavComponents = trimmedValue.split(",").map((option) => option.trim()).filter(
          (component) => Object.keys(getUnavComponents()).includes(component) || component === "signup"
        );
        if (signedOut) {
          const width = getUnavWidthCSS(unavComponents, signedOut);
          utilitiesContainer.style.setProperty("min-width", width);
        }
        let config;
        try {
          config = getMiloConfig();
        } catch (error) {
          throw new Error("MiloConfig not available for UNAV initialization");
        }
        const locale = getUniversalNavLocale(config.locale);
        const environment = config.env.name === "prod" ? "prod" : "stage";
        const visitorGuid = await getVisitorGuid();
        let unavVersion = new URLSearchParams(
          window.location.search
        ).get("unavVersion");
        if (!/^\d+(\.\d+)?$/.test(unavVersion ?? "")) {
          unavVersion = "1.5";
        }
        await Promise.all([
          loadScript(
            `https://${environment}.adobeccstatic.com/unav/${unavVersion}/UniversalNav.js`
          ),
          loadStyles(
            `https://${environment}.adobeccstatic.com/unav/${unavVersion}/UniversalNav.css`,
            true
          )
        ]);
        const getChildren = () => {
          const unavComponentsConfig = getUnavComponents();
          const children = [unavComponentsConfig.profile];
          setProfileSignUpRequired(children, false);
          unavComponents?.forEach((component) => {
            if (component === "profile") return;
            if (component === "signup") {
              setProfileSignUpRequired(children, true);
              return;
            }
            const unavComponent = unavComponentsConfig[component];
            if (unavComponent) {
              children.push(unavComponent);
            }
          });
          return children;
        };
        const getConfiguration = () => ({
          target: utilitiesContainer,
          env: environment,
          locale,
          countryCode: getMiloLocaleSettings(config?.locale)?.country || "US",
          imsClientId: window?.adobeid?.client_id,
          theme: "light",
          // TODO: Add toggle based on site theme
          analyticsContext: {
            consumer: {
              name: "adobecom",
              version: "1.0",
              platform: "Web",
              device: getDevice(),
              os_version: navigator.platform
            },
            event: { visitor_guid: visitorGuid }
          },
          children: getChildren(),
          isSectionDividerRequired: !!config?.unav?.showSectionDivider,
          showTrayExperience: !isDesktop.matches
        });
        await window?.UniversalNav?.(getConfiguration());
        if (!signedOut) {
          utilitiesContainer?.style.removeProperty("min-width");
        }
        const reloadUnav = (_) => {
          window?.UniversalNav?.reload(
            getConfiguration()
          );
        };
        isDesktop.addEventListener("change", () => {
          reloadUnav();
        });
        return {
          reloadUnav,
          errors
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : "failed to load universal nav";
        return new RecoverableError(message);
      }
    };
  }
});

// src/PostRendering/ImsManager.ts
var yieldToMain, imsReady, ims;
var init_ImsManager = __esm({
  "src/PostRendering/ImsManager.ts"() {
    "use strict";
    init_ImsLoader();
    init_Unav_loader();
    init_Unav_utils();
    init_Error();
    init_Log();
    yieldToMain = () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    };
    imsReady = async (options) => {
      const { profileType, mountpoint, decorateProfile: decorateProfile2 } = options;
      if (!window.adobeIMS?.isSignedInUser() || profileType !== "Unav") {
        setUserProfile({});
      }
      if (profileType === "Unav" && mountpoint) {
        try {
          await yieldToMain();
          const unav = await loadUnav(mountpoint);
          if (unav instanceof RecoverableError) {
            lanaLog(unav.message);
            return {
              reloadUnav: () => {
              },
              errors: /* @__PURE__ */ new Set([unav])
            };
          }
          return {
            reloadUnav: unav.reloadUnav,
            errors: unav.errors
          };
        } catch (e) {
          return {
            reloadUnav: () => {
            },
            errors: /* @__PURE__ */ new Set([new RecoverableError("Failed to load UNAV")])
          };
        }
      }
      if (decorateProfile2) {
        try {
          await yieldToMain();
          const profileErrors = await decorateProfile2();
          return {
            reloadUnav: () => {
            },
            errors: profileErrors
          };
        } catch (e) {
          return {
            reloadUnav: () => {
            },
            errors: /* @__PURE__ */ new Set([new RecoverableError("An unexpected error occurred in decorateProfile")])
          };
        }
      }
      return {
        reloadUnav: () => {
        },
        errors: /* @__PURE__ */ new Set()
      };
    };
    ims = async (options) => {
      if (window.adobeIMS?.initialized) {
        return imsReady(options);
      }
      try {
        await loadIms();
        return imsReady(options);
      } catch (e) {
        if (e instanceof Error && e.message === "IMS timeout") {
          window.addEventListener("onImsLibInstance", () => imsReady(options));
          return {
            reloadUnav: () => {
            },
            errors: /* @__PURE__ */ new Set()
          };
        }
        return {
          reloadUnav: () => {
          },
          errors: /* @__PURE__ */ new Set([new RecoverableError("Failed to load IMS")])
        };
      }
    };
  }
});

// src/Components/Profile/Parse.ts
var parseProfileHTML;
var init_Parse4 = __esm({
  "src/Components/Profile/Parse.ts"() {
    "use strict";
    init_Utils();
    parseProfileHTML = (rawHTML) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = rawHTML;
      const dropdownElem = tempDiv.querySelector(":scope > div > div:nth-child(2)");
      const signInAnchor = dropdownElem?.querySelector('[href$="?sign-in=true"]');
      const rawText = signInAnchor?.textContent?.trim() ?? null;
      return {
        hasDropdown: dropdownElem !== null,
        dropdownHTML: dropdownElem?.innerHTML ?? null,
        signInText: rawText ? escapeHTML(rawText) : null
      };
    };
  }
});

// src/Components/Profile/profile.css
var css3, style3;
var init_profile = __esm({
  "src/Components/Profile/profile.css"() {
    "use strict";
    css3 = "/**\n * Profile Component Styles\n * \n * Styles for sign-in button and dropdown menu.\n * Uses Popover API for dropdown behavior.\n */\n\n/* Profile container */\n.feds-profile {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n/* Sign-in button base styles */\n.feds-signIn {\n  padding: 5px 16px 6px;\n  border: 2px solid #dadada;\n  background: none;\n  color: #2c2c2c;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: inherit;\n  line-height: 16.8px;\n  border-radius: 16px;\n  font-weight: 700;\n  white-space: nowrap;\n  text-align: start;\n  width: 100%;\n}\n\n.feds-signIn:hover {\n  background: #e9e9e9;\n  border-color: #c6c6c6;\n}\n\n.feds-signIn:active {\n  background: #e5e5e5;\n}\n\n.feds-signIn:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: 2px;\n}\n\n/* Sign-in dropdown popup */\n.feds-signIn-dropdown {\n  margin-top: 0;\n  padding: 12px 0;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  inset: 64px auto auto auto;\n  right: anchor(right);\n}\n\n.feds-signIn-dropdown:popover-open {\n  display: block;\n}\n\n/* Dropdown items */\n.feds-signIn-dropdown ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.feds-signIn-dropdown li {\n  margin: 0;\n}\n\n.feds-signIn-dropdown button,\n.feds-signIn-dropdown a {\n  display: block;\n  padding: 6px 32px;\n  text-align: left;\n  text-decoration: none;\n  color: #2c2c2c;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: inherit;\n}\n\n.feds-signIn-dropdown button {\n  width: 100%;\n  line-height: 27px;\n  border-radius: 0;\n  font-weight: normal;\n}\n\n.feds-signIn-dropdown button:hover,\n.feds-signIn-dropdown a:hover {\n  background: #f5f5f5;\n}\n\n.feds-signIn-dropdown button:focus,\n.feds-signIn-dropdown a:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: -2px;\n}\n\n/* ============================================================================\n   Signed-In Profile Styles\n   ============================================================================ */\n\n/* Profile button with avatar */\n.feds-profile-button {\n  padding: 0;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.2s;\n\n  /* Define anchor for positioning dropdown */\n  anchor-name: --profile-button;\n}\n\n.feds-profile-button:hover {\n  opacity: 0.8;\n}\n\n.feds-profile-button:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: 2px;\n}\n\n/* Avatar image */\n.feds-profile-img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n/* Profile dropdown menu */\n.feds-profile-menu {\n  padding: 0;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  min-width: 280px;\n  inset: 64px auto auto auto;\n  right: anchor(right);\n}\n\n.feds-profile-menu:popover-open {\n  display: block;\n}\n\n/* Profile header section */\n.feds-profile-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  text-decoration: none;\n  color: inherit;\n  border-bottom: 1px solid #e1e1e1;\n  transition: background-color 0.2s;\n}\n\n.feds-profile-header:hover {\n  background: #f5f5f5;\n}\n\n.feds-profile-header:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: -2px;\n}\n\n.feds-profile-header .feds-profile-img {\n  cursor: pointer;\n  flex-shrink: 0;\n}\n\n/* Profile details */\n.feds-profile-details {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.feds-profile-name {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #2c2c2c;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.feds-profile-email {\n  margin: 0 0 4px 0;\n  font-size: 12px;\n  color: #6e6e6e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.feds-profile-account {\n  margin: 0;\n  font-size: 12px;\n  color: #0265dc;\n  font-weight: 500;\n}\n\n/* Local menu section */\n.feds-local-menu {\n  padding: 8px 0;\n  border-bottom: 1px solid #e1e1e1;\n}\n\n.feds-local-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.feds-local-menu li {\n  margin: 0;\n}\n\n.feds-local-menu a {\n  display: block;\n  padding: 8px 16px;\n  text-decoration: none;\n  color: #2c2c2c;\n  font-size: 14px;\n  transition: background-color 0.2s;\n}\n\n.feds-local-menu a:hover {\n  background: #f5f5f5;\n}\n\n.feds-local-menu a:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: -2px;\n}\n\n/* Profile actions list */\n.feds-profile-actions {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n}\n\n.feds-profile-actions li {\n  margin: 0;\n}\n\n.feds-profile-action {\n  display: block;\n  width: 100%;\n  padding: 8px 16px;\n  text-align: left;\n  text-decoration: none;\n  color: #2c2c2c;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: inherit;\n  transition: background-color 0.2s;\n}\n\n.feds-profile-action:hover {\n  background: #f5f5f5;\n}\n\n.feds-profile-action:focus {\n  outline: 2px solid #0265dc;\n  outline-offset: -2px;\n}";
    style3 = document.createElement("style");
    style3.textContent = css3;
    document.head.appendChild(style3);
  }
});

// src/Components/Profile/Render.ts
var renderSignInButton, renderSignInWithDropdown, processDropdownContent, renderSignIn;
var init_Render3 = __esm({
  "src/Components/Profile/Render.ts"() {
    "use strict";
    init_profile();
    init_Utils();
    renderSignInButton = (signInLabel) => {
      const escapedLabel = escapeHTML(signInLabel);
      return `
  <button 
    class="feds-signIn" 
    daa-ll="${escapedLabel}"
    data-signin-trigger
  >
    ${escapedLabel}
  </button>
`;
    };
    renderSignInWithDropdown = (signInLabel, dropdownContent) => {
      const dropdownId = "feds-signIn-dropdown";
      const escapedLabel = escapeHTML(signInLabel);
      return `
    <button 
      class="feds-signIn" 
      daa-ll="${escapedLabel}"
      aria-expanded="false"
      aria-haspopup="true"
      popovertarget="${dropdownId}"
    >
      ${escapedLabel}
    </button>
    <div 
      id="${dropdownId}" 
      popover 
      class="feds-signIn-dropdown"
    >
      ${dropdownContent}
    </div>
  `;
    };
    processDropdownContent = (dropdownHTML, signInText) => {
      if (!signInText) return dropdownHTML;
      return dropdownHTML.replace(
        /<a[^>]*href="[^"]*\?sign-in=true"[^>]*>.*?<\/a>/,
        `<button class="feds-signIn" data-signin-trigger>${signInText}</button>`
      );
    };
    renderSignIn = (signInLabel, parsedProfileData) => {
      const { hasDropdown, dropdownHTML, signInText } = parsedProfileData;
      if (!hasDropdown) {
        return renderSignInButton(signInLabel);
      }
      const processedDropdown = processDropdownContent(dropdownHTML || "", signInText);
      return renderSignInWithDropdown(signInLabel, processedDropdown);
    };
  }
});

// src/Components/Profile/ProfileData.ts
var ProfileData_exports = {};
__export(ProfileData_exports, {
  buildAccountUrl: () => buildAccountUrl,
  buildAdminConsoleUrl: () => buildAdminConsoleUrl,
  extractLocalMenu: () => extractLocalMenu,
  fetchProfileData: () => fetchProfileData,
  getLanguage: () => getLanguage,
  truncateEmail: () => truncateEmail
});
var fetchProfileData, extractLocalMenu, truncateEmail, getLanguage, buildAccountUrl, buildAdminConsoleUrl;
var init_ProfileData = __esm({
  "src/Components/Profile/ProfileData.ts"() {
    "use strict";
    init_Utils();
    init_Error();
    fetchProfileData = async () => {
      const errors = /* @__PURE__ */ new Set();
      try {
        if (!window.adobeIMS) {
          errors.add(new RecoverableError("ProfileData: Adobe IMS not loaded"));
          return [null, errors];
        }
        const accessToken = window.adobeIMS.getAccessToken();
        if (!accessToken?.token) {
          errors.add(new RecoverableError("ProfileData: No access token available"));
          return [null, errors];
        }
        const config = getMiloConfig();
        const adobeIO = config.env?.adobeIO;
        if (!adobeIO) {
          errors.add(new RecoverableError("ProfileData: Adobe IO hostname not configured"));
          return [null, errors];
        }
        const headers = new Headers({
          Authorization: `Bearer ${accessToken.token}`
        });
        const [response, imsProfile] = await Promise.all([
          fetch(`https://${adobeIO}/profile`, { headers }).then((res) => {
            if (res.status !== 200) {
              throw new RecoverableError(`ProfileData: Failed to fetch profile data with status ${res.status}`);
            }
            return res.json();
          }),
          window.adobeIMS.getProfile()
        ]);
        const { sections, user } = response;
        if (!user?.avatar) {
          errors.add(new RecoverableError("ProfileData: Invalid response - missing avatar"));
          return [null, errors];
        }
        return [{
          avatar: user.avatar,
          displayName: imsProfile.displayName,
          email: imsProfile.email,
          sections: sections || {}
        }, errors];
      } catch (error) {
        errors.add(new RecoverableError("ProfileData: Exception fetching profile data"));
        return [null, errors];
      }
    };
    extractLocalMenu = (rawElem) => {
      const temp = document.createElement("div");
      temp.innerHTML = rawElem;
      const h5Element = temp.querySelector("h5");
      const localMenu = h5Element?.parentElement;
      return localMenu ? localMenu.innerHTML : "";
    };
    truncateEmail = (email) => {
      const maxChars = 12;
      const [username, domain] = email.split("@");
      if (!domain) return email;
      const [domainName, ...tldParts] = domain.split(".");
      const tld = tldParts.join(".");
      const truncatedUsername = username.length > maxChars ? `${username.slice(0, maxChars)}\u2026` : username;
      const truncatedDomain = domainName.length > maxChars ? `${domainName.slice(0, maxChars)}\u2026` : domainName;
      return `${truncatedUsername}@${truncatedDomain}.${tld}`;
    };
    getLanguage = () => {
      try {
        const config = getMiloConfig();
        const ietf = config.locale?.ietf || "en-US";
        const nonStandardMap = { "no-NO": "nb" };
        if (nonStandardMap[ietf]) {
          return nonStandardMap[ietf];
        }
        return ietf.split("-")[0];
      } catch {
        return "en";
      }
    };
    buildAccountUrl = (path = "") => {
      try {
        const config = getMiloConfig();
        const baseUrl = config.env?.account || "account.adobe.com";
        return `https://${baseUrl}${path}`;
      } catch {
        return `https://account.adobe.com${path}`;
      }
    };
    buildAdminConsoleUrl = (path = "") => {
      try {
        const config = getMiloConfig();
        const baseUrl = config.env?.adminconsole || "adminconsole.adobe.com";
        return `https://${baseUrl}${path}`;
      } catch {
        return `https://adminconsole.adobe.com${path}`;
      }
    };
  }
});

// src/Components/Profile/RenderProfile.ts
var RenderProfile_exports = {};
__export(RenderProfile_exports, {
  renderSignedInProfile: () => renderSignedInProfile
});
var renderSignedInProfile;
var init_RenderProfile = __esm({
  "src/Components/Profile/RenderProfile.ts"() {
    "use strict";
    init_ProfileData();
    init_Utils();
    init_profile();
    renderSignedInProfile = (params) => {
      const {
        avatar,
        displayName,
        email,
        sections,
        placeholders,
        localMenuHTML
      } = params;
      const lang = getLanguage();
      const truncatedEmail = truncateEmail(email);
      const escapedAvatar = escapeHTML(avatar);
      const escapedDisplayName = escapeHTML(displayName);
      const escapedEmail = escapeHTML(truncatedEmail);
      const escapedAvatarAlt = escapeHTML(placeholders.get("profile-avatar") || "Profile avatar");
      const buttonHTML = `
    <button 
      class="feds-profile-button" 
      popovertarget="feds-profile-menu"
      aria-label="${escapedDisplayName}"
      daa-ll="Account">
      <img 
        class="feds-profile-img" 
        src="${escapedAvatar}" 
        alt="${escapedAvatarAlt}">
    </button>
  `;
      const escapedViewAccount = escapeHTML(placeholders.get("view-account") || "View Account");
      const escapedProfileUrl = escapeHTML(buildAccountUrl(`profile?lang=${lang}`));
      const escapedAccountUrl = escapeHTML(buildAccountUrl(`?lang=${lang}`));
      const dropdownHTML = `
    <div id="feds-profile-menu" class="feds-profile-menu" popover>
      <a 
        href="${escapedAccountUrl}" 
        class="feds-profile-header"
        daa-ll="${escapedViewAccount}"
        aria-label="${escapedViewAccount}">
        <img 
          class="feds-profile-img" 
          src="${escapedAvatar}" 
          tabindex="0"
          alt="${escapedAvatarAlt}"
          data-profile-url="${escapedProfileUrl}">
        <div class="feds-profile-details">
          <p class="feds-profile-name">${escapedDisplayName}</p>
          <p class="feds-profile-email">${escapedEmail}</p>
          <p class="feds-profile-account">${escapedViewAccount}</p>
        </div>
      </a>
      
      ${localMenuHTML ? `<div class="feds-local-menu">${localMenuHTML}</div>` : ""}
      
      <ul class="feds-profile-actions">
        ${sections?.manage?.items?.team?.id ? `<li><a class="feds-profile-action" href="${escapeHTML(buildAdminConsoleUrl("/team"))}">${escapeHTML(placeholders.get("manage-teams") || "Manage Teams")}</a></li>` : ""}
        ${sections?.manage?.items?.enterprise?.id ? `<li><a class="feds-profile-action" href="${escapeHTML(buildAdminConsoleUrl(""))}">${escapeHTML(placeholders.get("manage-enterprise") || "Manage Enterprise")}</a></li>` : ""}
        <li>
          <a href="#" class="feds-profile-action" data-signout-trigger daa-ll="${escapeHTML(placeholders.get("sign-out") || "Sign Out")}">
            ${escapeHTML(placeholders.get("sign-out") || "Sign Out")}
          </a>
        </li>
      </ul>
    </div>
  `;
      return buttonHTML + dropdownHTML;
    };
  }
});

// src/Components/Profile/ProfileEvents.ts
var ProfileEvents_exports = {};
__export(ProfileEvents_exports, {
  attachProfileEvents: () => attachProfileEvents
});
var attachProfileEvents;
var init_ProfileEvents = __esm({
  "src/Components/Profile/ProfileEvents.ts"() {
    "use strict";
    attachProfileEvents = (container, location = window.location) => {
      const dropdown = container.querySelector("#feds-profile-menu");
      const signOutLink = container.querySelector("[data-signout-trigger]");
      const avatarImg = dropdown?.querySelector("[data-profile-url]");
      if (signOutLink) {
        signOutLink.addEventListener("click", (e) => {
          e.preventDefault();
          window.dispatchEvent(new Event("feds:signOut"));
          if (window?.adobeIMS) {
            window?.adobeIMS?.signOut();
          } else {
          }
        });
      }
      if (avatarImg) {
        avatarImg.addEventListener("click", (e) => {
          e.preventDefault();
          const url = avatarImg.getAttribute("data-profile-url");
          if (url) {
            location.assign(url);
          }
        });
      }
    };
  }
});

// src/PostRendering/ProfileDecorator.ts
var setStoredProfile, getStoredProfile, attachSignInEvents, decorateSignIn, decorateSignedInProfile, decorateProfile;
var init_ProfileDecorator = __esm({
  "src/PostRendering/ProfileDecorator.ts"() {
    "use strict";
    init_Placeholders();
    init_Unav_config();
    init_Parse4();
    init_Render3();
    [setStoredProfile, getStoredProfile] = /* @__PURE__ */ (() => {
      let storedProfileHTML = null;
      return [
        (html) => {
          storedProfileHTML = html;
        },
        () => storedProfileHTML
      ];
    })();
    attachSignInEvents = (container) => {
      const signInButtons = container.querySelectorAll("[data-signin-trigger]");
      signInButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          if (!window.adobeIMS) {
            return;
          }
          const context = getSignInContext();
          window.adobeIMS.signIn(context);
        });
      });
    };
    decorateSignIn = async (rawElem, decoratedElem) => {
      const errors = /* @__PURE__ */ new Set();
      const placeholders = await getPlaceholders();
      const signInLabel = placeholders.get("sign-in") || "Sign In";
      if (!placeholders.has("sign-in")) {
      }
      const parsedProfileData = parseProfileHTML(rawElem);
      const signInHTML = renderSignIn(
        signInLabel,
        parsedProfileData
      );
      decoratedElem.innerHTML = signInHTML;
      attachSignInEvents(decoratedElem);
      return errors;
    };
    decorateSignedInProfile = async (rawElem, decoratedElem) => {
      const errors = /* @__PURE__ */ new Set();
      const { fetchProfileData: fetchProfileData2, extractLocalMenu: extractLocalMenu2 } = await Promise.resolve().then(() => (init_ProfileData(), ProfileData_exports));
      const [profileData, fetchErrors] = await fetchProfileData2();
      fetchErrors.forEach((error) => errors.add(error));
      if (!profileData) {
        return errors;
      }
      const placeholders = await getPlaceholders();
      const localMenuHTML = extractLocalMenu2(rawElem);
      const { renderSignedInProfile: renderSignedInProfile2 } = await Promise.resolve().then(() => (init_RenderProfile(), RenderProfile_exports));
      const profileHTML = renderSignedInProfile2({
        avatar: profileData.avatar,
        displayName: profileData.displayName,
        email: profileData.email,
        sections: profileData.sections,
        placeholders,
        localMenuHTML
      });
      decoratedElem.innerHTML = profileHTML;
      const { attachProfileEvents: attachProfileEvents2 } = await Promise.resolve().then(() => (init_ProfileEvents(), ProfileEvents_exports));
      attachProfileEvents2(decoratedElem);
      return errors;
    };
    decorateProfile = async (mountpoint) => {
      const rawElem = getStoredProfile();
      if (!rawElem) return /* @__PURE__ */ new Set();
      const decoratedElem = mountpoint.querySelector(".feds-profile");
      if (!decoratedElem) return /* @__PURE__ */ new Set();
      const isSignedInUser = window?.adobeIMS?.isSignedInUser();
      if (!isSignedInUser) {
        return decorateSignIn(rawElem, decoratedElem);
      }
      return decorateSignedInProfile(rawElem, decoratedElem);
    };
  }
});

// src/test-exports.ts
var init_test_exports = __esm({
  "src/test-exports.ts"() {
    init_Parse2();
    init_Render();
    init_Error();
    init_Parse();
    init_Parse3();
    init_Render2();
    init_Utils();
    init_Placeholders();
    init_ImsLoader();
    init_ImsManager();
    init_Unav_utils();
    init_Unav_config();
    init_Unav_loader();
    init_ProfileDecorator();
    init_Parse4();
    init_Render3();
    init_RenderProfile();
    init_ProfileData();
    init_ProfileEvents();
  }
});
init_test_exports();
export {
  IrrecoverableError,
  LANGMAP,
  RecoverableError,
  SIGNED_OUT_ICONS,
  attachProfileEvents,
  brand,
  decorateProfile,
  fetchProfileData,
  getDevice,
  getMetadata,
  getMiloConfig,
  getStoredProfile,
  getUnavComponents,
  getUnavWidthCSS,
  getUniversalNavLocale,
  getUserProfile,
  getVisitorGuid,
  ims,
  imsReady,
  linkGroup,
  loadIms,
  loadScript,
  loadStyles,
  loadUnav,
  parseBrand,
  parseLink,
  parseLinkGroup,
  parseProfileHTML,
  renderSignIn,
  renderSignInButton,
  renderSignInWithDropdown,
  renderSignedInProfile,
  setMiloConfig,
  setPlaceholders,
  setStoredProfile,
  setUserProfile,
  truncateEmail
};
//# sourceMappingURL=test-exports.js.map
