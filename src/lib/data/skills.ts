import Angular from "@/icons/react/Angular";
import AstroIcon from "@/icons/react/AstroIcon";
import CSS from "@/icons/react/CSS";
import CSharp from "@/icons/react/CSharp";
import Flutter from "@/icons/react/Flutter";
import Git from "@/icons/react/Git";
import HTML from "@/icons/react/HTML";
import Java from "@/icons/react/Java";
import JavaScript from "@/icons/react/JavaScript";
import Jira from "@/icons/react/Jira";
import Laravel from "@/icons/react/Laravel";
import Mongo from "@/icons/react/Mongo";
import MySQL from "@/icons/react/MySQL";
import NestJS from "@/icons/react/NestJS";
import NextJS from "@/icons/react/NextJS";
import Node from "@/icons/react/Node";
import PHP from "@/icons/react/PHP";
import PostgreSQL from "@/icons/react/PostgreSQL";
import Python from "@/icons/react/Python";
import ReactIcon from "@/icons/react/ReactIcon";
import SASS from "@/icons/react/SASS";
import Tailwind from "@/icons/react/Tailwind";
import TypeScript from "@/icons/react/TypeScript";
import Vue from "@/icons/react/Vue";
import type { Skill, SkillLevel } from "@/types/skills.type";

export const colors = {
  beginner: "bg-teal-600/50 font-semibold",
  intermediate: "bg-yellow-500/50 font-semibold",
  advanced: "bg-blue-600/50 font-semibold"
};

export const levels: SkillLevel[] = [
  {
    description: {
      en: "beginner",
      es: "principiante"
    },
    color: colors.beginner
  },
  {
    description: {
      en: "intermediate",
      es: "intermedio"
    },
    color: colors.intermediate
  },
  {
    description: {
      en: "advanced",
      es: "avanzado"
    },
    color: colors.advanced
  }
];

export const skills: Skill[] = [
  { name: "Angular", icon: Angular, level: "beginner" },
  { name: "Laravel", icon: Laravel, level: "beginner" },
  { name: "Vue", icon: Vue, level: "beginner" },
  { name: "Flutter", icon: Flutter, level: "beginner" },
  { name: "Jira", icon: Jira, level: "beginner" },
  { name: "C#", icon: CSharp, level: "beginner" },
  { name: "Python", icon: Python, level: "beginner" },
  { name: "NextJS", icon: NextJS, level: "intermediate" },
  { name: "Node", icon: Node, level: "intermediate" },
  { name: "Git", icon: Git, level: "intermediate" },
  { name: "Astro", icon: AstroIcon, level: "intermediate" },
  { name: "HTML", icon: HTML, level: "intermediate" },
  { name: "CSS", icon: CSS, level: "intermediate" },
  { name: "Tailwind", icon: Tailwind, level: "intermediate" },
  { name: "SASS", icon: SASS, level: "intermediate" },
  { name: "TypeScript", icon: TypeScript, level: "intermediate" },
  { name: "JavaScript", icon: JavaScript, level: "intermediate" },
  { name: "PHP", icon: PHP, level: "intermediate" },
  { name: "Java", icon: Java, level: "intermediate" },
  { name: "MySQL", icon: MySQL, level: "intermediate" },
  { name: "PostgreSQL", icon: PostgreSQL, level: "intermediate" },
  { name: "React", icon: ReactIcon, level: "advanced" },
  { name: "NestJS", icon: NestJS, level: "advanced" },
  { name: "MongoDB", icon: Mongo, level: "advanced" }
];
