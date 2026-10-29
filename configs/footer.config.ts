export interface FooterLink {
  key: string;
  title?: string;
  href: string;
}

export const footerConfig: FooterLink[] = [
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
