// Types lifted from src/Utils/Utils.ts as part of the
// extract-input-type-and-singletons migration. The matching singleton
// wrappers live in src/state/. During the transition,
// src/Utils/Utils.ts re-exports these names so existing importers
// continue to work; remove those re-exports in a final cleanup commit.

export type PersonalizationConfig = {
  commands: unknown[];
  handleCommands: (
    commands: unknown[],
    rootEl: Document | HTMLElement,
  ) => unknown;
};

export type LocalizeLink = (link: string) => string;

export type MiloConfigEnv = {
  // Env name: 'local', 'stage', or 'prod'
  name: string;
  // IMS environment: 'stg1' or 'prod'
  ims?: string;
  // Adobe I/O hostname
  adobeIO?: string;
  // Admin Console hostname
  adminconsole?: string;
  // Account hostname
  account?: string;
  // Edge configuration ID
  edgeConfigId?: string;
  // PDF Viewer client ID
  pdfViewerClientId?: string;
  // Consumer-specific configuration (optional)
  consumer?: {
    pdfViewerClientId: string;
    pdfViewerReportSuite: string;
    psUrl: string;
    odinEndpoint: string;
  };
};

export type MiloConfigLocale = {
  // e.g., '', '/fr', '/de', '/jp/ja'
  prefix: string;
  // e.g., 'en-US', 'fr-FR', 'de-DE'
  ietf?: string;
  // Typekit font ID, e.g., 'hah7vzn.css'
  tk?: string;
  // Region/country code, e.g. 'us', 'gb', 'fr'
  region?: string;
  // Regional configuration mapping
  regions?: Record<string, unknown>;
  // Full content path with origin
  contentRoot?: string;
  // Langcode (new routing) e.g., 'en','fr','de'
  language?: string;
  // Text direction: 'ltr' or 'rtl'
  dir?: string;

  // Allow additional locale-specific properties
  [key: string]: unknown;
};

export type UnavProfileConfig = {
  messageEventListener?: (event: CustomEvent) => void;
  complexConfig?: Record<string, unknown> | null;
  config?: Record<string, unknown>;
  signInCtaStyle?: 'primary' | 'secondary';
  enableManagePeople?: boolean;
  managePeopleConfig?: Record<string, unknown>;
};

// NOTE: name collides with the unrelated `UnavConfig` in
// src/PostRendering/Unav/Unav.types.ts. Keep them separate.
export type UnavConfig = {
  unavHelpChildren?: Array<{ type: string }>;
  profile?: UnavProfileConfig;
  uncAppId?: string;
  uncConfig?: Record<string, unknown>;
  showSectionDivider?: boolean;
  isArpEnabled?: boolean;
  arpConfig?: {
    metadata?: Record<string, string>;
  };
};

export type JarvisConfig = {
  id: string;
  callbacks?: Record<string, () => unknown>;
};

export type MiloConfig = {
  env: MiloConfigEnv;
  base: string;
  locale: MiloConfigLocale;
  unav?: UnavConfig;
  jarvis?: JarvisConfig;
  // IMS sign-in context for UNAV
  signInContext?: object;
};

/**
 * Lingo locale config — federal-specific locale data (currently just
 * `ietf`, e.g. `'fr-LU'`) that may override the milo config locale for
 * downstream consumers (AUP SDK, UNav). Optional; consumers must fall
 * back to `getMiloConfig().locale.ietf` when `getLingoLocaleConfig()`
 * returns `undefined`.
 */
export type LingoLocaleConfig = {
  ietf: string;
};
