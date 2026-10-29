export interface HeaderLink {
  key: string;
  title?: string;
  href: string;
}

export const headerConfig: HeaderLink[] = [
  {
    key: "privacy-policy",
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    key: "imprint",
    title: "Imprint",
    href: "/imprint",
  },
];
