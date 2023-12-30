export type TimeLineElement = {
  date: string;
  title: string;
  description: string;
  technologies: Technology[];
};

export type Technology = {
  icon: (_props: Record<string, any>) => any;
  name: string;
  style: string;
};
