import { IrrecoverableError } from "../Error/Error";
import { Input } from "../Main";
import { fetchAndProcessPlainHTML, getMetadata } from "../Utils/Utils";

type Initial = {
  mainNav: HTMLElement;
  promoBarEl: HTMLElement | null;
};

export const getInitialHTML = async ({
  gnavSource,
}: Input): Promise<Initial | IrrecoverableError> => {
  const promoSource = getMetadata('gnav-promo-source');
  const [mainNav, promoResult] = await Promise.all([
    fetchAndProcessPlainHTML(gnavSource),
    promoSource ? fetchAndProcessPlainHTML(new URL(promoSource, window.location.href)) : Promise.resolve(null),
  ]);
  if (mainNav instanceof IrrecoverableError)
    return mainNav;
  const promoBarEl = promoResult instanceof IrrecoverableError ? null : promoResult;
  return {
    mainNav,
    promoBarEl: promoBarEl?.querySelector('.gnav-promo-bar') ?? null,
  };
}

