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
  {
    key: "privacy-policy",
    label: "Privacy Policy",
    url: "/privacy",
    hasTargetBlank: false,
    hasRelNoopener: false,
  },
  {
    key: "imprint",
    label: "Imprint",
    url: "/imprint",
    hasTargetBlank: false,
    hasRelNoopener: false,
  },
];

export const getHeaderLinkClassName = (link: HeaderLink) =>
  link.key == "official-website"
    ? "bg-transparent text-(--color-primary) font-medium cursor-pointer scale-95 inline-block tracking-wider"
    : "bg-transparent text-(--color-muted) font-medium cursor-pointer hover:text-(--color-primary) transition-colors duration-200 scale-95 inline-block tracking-wider";
