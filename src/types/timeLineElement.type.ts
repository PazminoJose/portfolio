import type { IconProps } from "@/icons/react/interfaces/IconProps";
import type React from "react";

export type TimeLineElement = {
  icon?: ({ className }: IconProps) => React.JSX.Element;
  date: string;
  title: string;
  description: string;
  technologies?: Technology[];
  links?: Link[];
};

export type Technology = {
  icon: () => React.JSX.Element;
  name: string;
  style: string;
};

export type Link = {
  href: string;
  title: string;
};
