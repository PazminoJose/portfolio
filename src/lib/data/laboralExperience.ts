import Building from "@/icons/react/Building";
import Dart from "@/icons/react/Dart";
import Flutter from "@/icons/react/Flutter";
import Laravel from "@/icons/react/Laravel";
import NestJS from "@/icons/react/NestJS";
import type { LocalizedObject } from "@/types/localizedObject.type";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const laboralExperience: LocalizedObject<TimeLineElement[]> = {
  en: [
    {
      icon: Building,
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
      icon: Building,
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
  ],
  es: [
    {
      icon: Building,
      date: "2023",
      title: "Practicas laborales en la empresa Encuba",
      description: 'Desarrollo de un sistema escolar para el "Instituto Superior Universitario ITCA"',
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
      icon: Building,
      date: "2023",
      title: "Practicas laborales de vinculación con la sociedad",
      description: `Desarrollo de una aplicación móvil para el centro cultural de Tungurahua para visualizar 
        las pinturas más destacadas y la agenda cultural de eventos.`,
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
  ]
};
