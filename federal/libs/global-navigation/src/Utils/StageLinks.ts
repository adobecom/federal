type StageLinkConverter = (args: {
  anchors: HTMLAnchorElement[];
  hostname: string;
  href: string;
}) => void;

export const convertRenderedNavigationLinks = (
  mountpoint: HTMLElement,
  convertStageLinks: StageLinkConverter | undefined,
  hostname: string,
  href: string,
): void => {
  if (convertStageLinks === undefined) return;
  const anchors = [...mountpoint.querySelectorAll<HTMLAnchorElement>('a')];
  convertStageLinks({ anchors, hostname, href });
};
