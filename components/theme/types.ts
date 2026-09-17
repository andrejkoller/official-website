export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
  mounted: boolean;
}
