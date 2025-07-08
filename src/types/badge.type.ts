import type { JSX } from "astro/jsx-runtime";

export type Badge = {
  href: string;
  icon: JSX.Element;
  text: string;
  color: string;
  hoverColor: string;
  darkColor: string;
};
