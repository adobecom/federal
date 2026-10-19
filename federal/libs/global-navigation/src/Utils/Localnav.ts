import { Component } from "../Components/Component";

// Mirror Milo: the localnav bar shows the item's title, so its mobile
// dropdown entry falls back to "Overview" unless authored as `Title::Label`.
export const withLocalnavOverviewLabel = (
  c: Component,
  placeholders: Map<string, string>,
): Component => (
  c.type === 'Link' && c.mobileText === undefined
    ? { ...c, mobileText: placeholders.get('overview') ?? 'Overview' }
    : c
);
