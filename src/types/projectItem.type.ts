import type { Technology } from "./timeLineElement.type";

export type ProjectItem = {
  title: string;
  description: string;
  technologies: Technology[];
  liveUrl: URL;
  image: ImageMetadata;
};
