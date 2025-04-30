import type { LocalizedObject } from "./localizedObject.type";

export type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  icon: () => any;
};

export type SkillLevel = {
  description: LocalizedObject<string>;
  color: string;
};
