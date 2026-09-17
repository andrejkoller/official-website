export interface HeaderLink {
  key: string;
  label: string;
  url: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export const websiteLinksConfig: HeaderLink[] = [
  {
    key: "official-website",
    label: "Official Website",
    url: "/",
    hasTargetBlank: false,
    hasRelNoopener: false,
  },
  {
    key: "developer-portfolio",
    label: "Developer Portfolio",
    url: "https://dev.andrejkoller.com",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
  {
    key: "online-shop",
    label: "Online Shop",
    url: "https://shop.andrejkoller.com",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
];

export const imprintLinkConfig: HeaderLink = {
  key: "imprint",
  label: "Imprint",
  url: "/imprint",
};

export const getHeaderLinkClassName = (isActive: boolean) =>
  isActive
    ? "bg-transparent text-(--color-primary) font-medium cursor-pointer scale-95 inline-block tracking-wider"
    : "bg-transparent text-(--color-muted) font-medium cursor-pointer hover:text-(--color-primary) transition-colors duration-200 scale-95 inline-block tracking-wider";
