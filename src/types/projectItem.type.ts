import type { Technology } from "./timeLineElement.type";

export type ProjectItem = {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: URL;
  image: ImageMetadata;
};
