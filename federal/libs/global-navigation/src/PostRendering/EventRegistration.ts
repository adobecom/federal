import { getMetadata } from "../Utils/Utils";
import { lanaLog } from "../Utils/Log";

const REGISTRATION_RESOLVED_EVENT = 'registration:resolved';

type RegistrationStatus = {
  isRegistered: boolean;
  inPersonAttendee?: boolean;
};

/**
 * Removes CTAs authored with the `#_hide-when-registered` link suffix (see
 * `getRegistrationGateAttrs`) once the visitor is confirmed registered for
 * the current event. Deliberately fire-and-forget — the event platform's
 * registration lookup must not block GNAV's own render/promise resolution.
 * `event-code` metadata gates this entirely so non-event pages never touch
 * `window.events`.
 *
 * Ordering vs. da-events (verified against registration-cache.js): the
 * platform dispatches the `registration:resolved` event on `window` FIRST,
 * carrying `{ isRegistered, inPersonAttendee }` in `event.detail`, and only
 * THEN assigns `window.events`. GNAV can render either before or after that
 * happens, so we cover both without polling:
 *  - rendered late → `window.events` already exists; ask it directly.
 *  - rendered early → subscribe once and read the answer off `event.detail`.
 * The check + `addEventListener` run in one synchronous block, so the event
 * cannot fire between them — no race, no timeout, no interval.
 */
export const initEventRegistrationGating = (mountpoint: HTMLElement): void => {
  const eventCode = getMetadata('event-code');
  if (eventCode === null || eventCode === '') return;

  const gatedLinks = mountpoint.querySelectorAll<HTMLElement>('[data-feds-hide-when-registered]');
  if (gatedLinks.length === 0) return;

  const applyGate = (status: RegistrationStatus | undefined): void => {
    if (status?.isRegistered !== true) return;
    // A gated CTA can live either as a regular nav-item (`<li>`) or as the
    // standalone Product Entry CTA (`.feds-product-entry-cta`) — remove
    // whichever wrapper is present, falling back to the link itself so an
    // unrecognized wrapper never silently no-ops.
    gatedLinks.forEach(link => {
      (link.closest('li, .feds-product-entry-cta') ?? link).remove();
    });
  };

  const onError = (error: unknown): void => {
    lanaLog(`Failed to resolve event registration status: ${String(error)}`);
  };

  if (window.events?.getRegistrationStatus) {
    window.events.getRegistrationStatus().then(applyGate).catch(onError);
    return;
  }

  window.addEventListener(
    REGISTRATION_RESOLVED_EVENT,
    (event) => applyGate((event as CustomEvent<RegistrationStatus>).detail),
    { once: true },
  );
};
