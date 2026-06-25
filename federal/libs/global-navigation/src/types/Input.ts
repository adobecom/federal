// Lifted from src/Main.ts to break the Main.ts ↔ Placeholders.ts cycle.
import type {
  MiloConfig,
  PersonalizationConfig,
  LocalizeLink,
  LingoLocaleConfig,
} from "./MiloConfig";

export type Input = {
  gnavSource: URL;
  asideSource: URL | null;
  gnavTop?: number;
  mepMartech?: string;
  isLocalNav: boolean;
  mountpoint: HTMLElement;
  unavEnabled: boolean;
  placeholders: Promise<Map<string, string>>;
  miloConfig?: MiloConfig;
  lingoRegion?: LingoLocaleConfig;
  // for now we only support inBlock commands.
  // Since MEP on gnav is relatively rare we'll
  // keep it at this and see if any problems crop up.
  // The Milo gnav MEP implementation is a little
  // more entangled than what we have here.
  // For example we're not dealing with adding manifestId to the body
  // and so on. But the whole idea behind this refactor is
  // that we want to reduce coupling.
  // So we'll keep it at this for now and re-evaluate at a
  // later date.
  personalization: PersonalizationConfig;
  localizeLink?: LocalizeLink;
  convertStageLinks?: (args: {
    anchors: HTMLAnchorElement[];
    hostname: string;
    href: string;
  }) => void;
};
