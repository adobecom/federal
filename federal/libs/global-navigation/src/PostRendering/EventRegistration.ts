import { getMetadata } from "../Utils/Utils";
import { lanaLog } from "../Utils/Log";

const REGISTRATION_RESOLVED_EVENT = 'registration:resolved';

const REGISTRATION_PENDING_ATTR = 'data-feds-registration-pending';

type RegistrationStatus = {
  isRegistered: boolean;
  inPersonAttendee?: boolean;
};

/**
 * Removes CTAs authored with the `#_hide-when-registered` suffix once the
 * visitor is confirmed registered. Fire-and-forget so it never blocks GNAV's
 * render; gated on `event-code` so non-event pages are unaffected.
 *
 * da-events dispatches `registration:resolved` (detail `{ isRegistered, ... }`)
 * before it assigns `window.events`, so GNAV may render on either side of it:
 * if `window.events` exists we ask it directly, otherwise we listen once for
 * the event. The check and `addEventListener` are synchronous, so the event
 * cannot slip between them.
 */
export const initEventRegistrationGating = (mountpoint: HTMLElement): void => {
  const eventCode = getMetadata('event-code');
  if (eventCode === null || eventCode === '') return;

  const gatedLinks = mountpoint.querySelectorAll<HTMLElement>('[data-feds-hide-when-registered]');
  if (gatedLinks.length === 0) return;

 const mayBeRegistered = window.adobeIMS?.isSignedInUser?.() === true;
  if (mayBeRegistered) {
  }

  const applyGate = (status: RegistrationStatus | undefined): void => {
    gatedLinks.forEach(link => {
      if (status?.isRegistered === true) {
        (link.closest('li, .feds-product-entry-cta') ?? link).remove();
      } else {
        link.removeAttribute(REGISTRATION_PENDING_ATTR);
      }
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
