import { IrrecoverableError } from "../Error/Error";
import { Input } from "../Main";
import {
  fetchAndProcessPlainHTML,
  federateUrl,
  getMetadata,
  replaceDotMedia,
} from "../Utils/Utils";

type Initial = {
  mainNav: HTMLElement;
  promoBarEl: HTMLElement | null;
};

export const getInitialHTML = async ({
  gnavSource,
}: Input): Promise<Initial | IrrecoverableError> => {
  const promoSource = getMetadata('gnav-promo-source');
  const promoUrl = promoSource !== null
    ? new URL(promoSource, window.location.href)
    : null;
  const [mainNav, promoResult] = await Promise.all([
    fetchAndProcessPlainHTML(gnavSource),
    fetchAndProcessPlainHTML(promoUrl),
  ]);
  if (mainNav instanceof IrrecoverableError)
    return mainNav;
  const promoBarEl = promoResult instanceof IrrecoverableError ?
    null : promoResult;
  const promoBar = promoBarEl?.querySelector<HTMLElement>('.gnav-promo-bar') ?? null;
  if (promoBar !== null && promoUrl !== null) {
    const fetchedFrom = federateUrl(
      `${promoUrl.origin}${promoUrl.pathname.replace(/(\.html$|$)/, '.plain.html')}`,
    );
    replaceDotMedia(fetchedFrom, promoBar);
  }
  return { mainNav, promoBarEl: promoBar };
}

