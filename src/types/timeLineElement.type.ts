import type { IconProps } from "@/icons/react/interfaces/IconProps";

export type TimeLineElement = {
  icon?: ({ className }: IconProps) => JSX.Element;
  date: string;
  title: string;
  description: string;
  technologies?: Technology[];
  links?: Link[];
};

export type Technology = {
  icon: () => JSX.Element;
  name: string;
  style: string;
};

export type Link = {
  href: string;
  title: string;
};
