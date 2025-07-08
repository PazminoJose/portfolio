import CV from "@/icons/react/CV";
import GitHub from "@/icons/react/GitHub";
import Linkedin from "@/icons/react/Linkedin";
import Mail from "@/icons/react/Mail";
import type { Badge } from "@/types/badge.type";
import type { LocalizedObject } from "@/types/localizedObject.type";

export const badges: LocalizedObject<Badge[]> = {
  es: [
    {
      href: "https://github.com/PazminoJose",
      icon: GitHub,
      text: "GitHub",
      color: "bg-black/50",
      hoverColor: "hover:bg-gray-800",
      darkColor: "dark:bg-black/50"
    },
    {
      href: "https://www.linkedin.com/in/josé-pazmiño-6021ba25a/",
      icon: Linkedin,
      text: "Linkedin",
      color: "bg-blue-600/50",
      hoverColor: "hover:bg-blue-800",
      darkColor: "dark:bg-blue-600/50"
    },
    {
      href: "mailto:josepf.dev@gmail.com",
      icon: Mail,
      text: "josepf.dev@gmail.com",
      color: "bg-cyan-800/50",
      hoverColor: "hover:bg-cyan-900",
      darkColor: "dark:bg-cyan-800/50"
    },
    {
      href: "/docs/cv.pdf",
      icon: CV,
      text: "CV",
      color: "bg-cyan-800/50",
      hoverColor: "hover:bg-cyan-900",
      darkColor: "dark:bg-cyan-800/50"
    }
  ],
  en: [
    {
      href: "https://github.com/PazminoJose",
      icon: GitHub,
      text: "GitHub",
      color: "bg-black/50",
      hoverColor: "hover:bg-gray-800",
      darkColor: "dark:bg-black/50"
    },
    {
      href: "https://www.linkedin.com/in/josé-pazmiño-6021ba25a/",
      icon: Linkedin,
      text: "Linkedin",
      color: "bg-blue-600/50",
      hoverColor: "hover:bg-blue-800",
      darkColor: "dark:bg-blue-600/50"
    },
    {
      href: "mailto:josepf.dev@gmail.com",
      icon: Mail,
      text: "josepf.dev@gmail.com",
      color: "bg-cyan-800/50",
      hoverColor: "hover:bg-cyan-900",
      darkColor: "dark:bg-cyan-800/50"
    },
    {
      href: "/docs/cv-en.pdf",
      icon: CV,
      text: "CV",
      color: "bg-cyan-800/50",
      hoverColor: "hover:bg-cyan-900",
      darkColor: "dark:bg-cyan-800/50"
    }
  ]
};
