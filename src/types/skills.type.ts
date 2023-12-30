export type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  icon: () => any;
};

export type SkillLevel = {
  description: string;
  color: string;
};
