import type { LocalizedObject } from "./localizedObject.type";

export type Menu = {
  label: LocalizedObject<string>;
  href: string;
};
