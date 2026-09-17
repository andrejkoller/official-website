import { ThemeSwitcher } from "../theme/theme-switcher";

export const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center h-(--footer-height) px-6"
      aria-label="Site footer"
    >
      <ThemeSwitcher />
    </footer>
  );
};
