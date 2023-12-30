import Dart from "@/icons/react/Dart";
import Flutter from "@/icons/react/Flutter";
import Laravel from "@/icons/react/Laravel";
import NestJS from "@/icons/react/NestJS";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const experienceTimeLines: TimeLineElement[] = [
  {
    date: "2023",
    title: "Encuba's Company intern",
    description: 'Development of a scholastic system for the "Instituto Superior Universitario ITCA"',
    technologies: [
      {
        icon: Laravel,
        name: "Laravel",
        style: "bg-red-500/70 dark:bg-red-500/70 text-white dark:text-white"
      },
      {
        icon: NestJS,
        name: "NestJS",
        style: "bg-rose-600/70 dark:bg-rose-600/70 text-white dark:text-white"
      }
    ]
  },
  {
    date: "2023",
    title: "Liaison Intern",
    description: `Development of a mobile application for the cultural center of Tungurahua to visualize 
      the most outstanding paintings and the cultural agenda of events.`,
    technologies: [
      {
        icon: Flutter,
        name: "Flutter",
        style: "bg-sky-600/50 dark:bg-sky-600/50 text-white dark:text-white"
      },
      {
        icon: Dart,
        name: "Dart",
        style: "bg-sky-600/50 dark:bg-sky-600/50 text-white dark:text-white"
      }
    ]
  }
];
