import artectt from "@/assets/images/artectt.webp";
import pmv from "@/assets/images/pmv.webp";
import spotifyClone from "@/assets/images/spotify-clone.webp";
import vivoVivo from "@/assets/images/vivo-vivo.webp";
import Angular from "@/icons/react/Angular";
import AstroIcon from "@/icons/react/AstroIcon";
import Dart from "@/icons/react/Dart";
import Flutter from "@/icons/react/Flutter";
import Java from "@/icons/react/Java";
import Mongo from "@/icons/react/Mongo";
import MySQL from "@/icons/react/MySQL";
import NestJS from "@/icons/react/NestJS";
import NextJS from "@/icons/react/NextJS";
import PostgreSQL from "@/icons/react/PostgreSQL";
import ReactIcon from "@/icons/react/ReactIcon";
import SpringBoot from "@/icons/react/SpringBoot";
import Tailwind from "@/icons/react/Tailwind";
import TypeScript from "@/icons/react/TypeScript";
import type { ProjectItem } from "@/types/projectItem.type";

export const projectItems: ProjectItem[] = [
  {
    title: "Spotify Clone",
    description: `This app clone is a demonstration that mirrors the essence of Spotify's music streaming platform. 
      It replicates core features like music playback, playlist creation, and intuitive navigation, providing a glimpse 
      into the functionalities of the original app. Please note: This clone is created for showcase purposes only and does 
      not offer live streaming or access to Spotify's entire music catalog. Its sole purpose is to display the recreation 
      of Spotify's key elements and functionalities adding some animations.`,
    technologies: [
      {
        icon: AstroIcon,
        name: "Astro",
        style: "bg-[#281b3f]-500/70 dark:bg-[#281b3f]-500/70 border border-slate-500"
      },
      {
        icon: ReactIcon,
        name: "React",
        style: "bg-blue-400/70 dark:bg-blue-400/70"
      },
      {
        icon: Tailwind,
        name: "Tailwind",
        style: "bg-blue-500/70 dark:bg-blue-500/70"
      },
      {
        icon: TypeScript,
        name: "TypeScript",
        style: "bg-blue-700/70 dark:bg-blue-700/70"
      }
    ],
    githubUrl: "https://github.com/PazminoJose/spotify-clone",
    liveUrl: new URL("https://spotify-clone-khaki-seven.vercel.app"),
    image: spotifyClone
  },
  {
    title: "Vivo Vivo Alarm",
    description: `Vivo Vivo Alarm is a cutting-edge web system offering real-time tracking of 
      individuals in danger, heat maps displaying crime hotspots, and a comprehensive dashboard 
      featuring detailed crime reports. This innovative platform enables immediate assistance for 
      those in need, assists law enforcement in deploying resources effectively, and empowers communities 
      to enhance safety and security in their areas.`,
    technologies: [
      {
        icon: NextJS,
        name: "NextJS",
        style: "bg-black-500/50 dark:bg-black-500/50 border border-slate-500"
      },
      {
        icon: ReactIcon,
        name: "React",
        style: "bg-blue-400/70 dark:bg-blue-400/70"
      },
      {
        icon: Tailwind,
        name: "Tailwind",
        style: "bg-blue-500/70 dark:bg-blue-500/70"
      },
      {
        icon: NestJS,
        name: "NestsJS",
        style: "bg-rose-600/70 dark:bg-rose-600/70"
      },
      {
        icon: TypeScript,
        name: "TypeScript",
        style: "bg-blue-700/70 dark:bg-blue-700/70"
      },
      {
        icon: PostgreSQL,
        name: "PostgreSQL",
        style: "bg-blue-600/70 dark:bg-blue-600/70"
      }
    ],
    githubUrl: "https://github.com/PazminoJose/vivo-vivo-app",
    liveUrl: new URL("https://vivo-vivo-app-production.up.railway.app"),
    image: vivoVivo
  },
  {
    title: "Arte CTT",
    description: `Virtual gallery that shows the art collection of the Tungurahua Culture House. 
    Immerse yourself in the rich history of each painting, accompanied by narrations that provide 
    insight into the artistic journey. Using the QR scanner feature you can easily discover 
    specific works of art, enhancing your overall gallery experience.`,
    technologies: [
      {
        icon: Flutter,
        name: "Flutter",
        style: "bg-sky-400/70 dark:bg-sky-400/70"
      },
      {
        icon: Dart,
        name: "Dart",
        style: "bg-blue-400/70 dark:bg-blue-400/70"
      },
      {
        icon: Angular,
        name: "Angular",
        style: "bg-red-500/70 dark:bg-red-500/70"
      },
      {
        icon: MySQL,
        name: "MySQL",
        style: "bg-blue-700/70 dark:bg-blue-700/70"
      },
      {
        icon: Java,
        name: "Java",
        style: "bg-orange-700/70 dark:bg-orange-700/70"
      },
      {
        icon: SpringBoot,
        name: "Spring Boot",
        style: "bg-green-700/70 dark:bg-green-700/70"
      }
    ],
    image: artectt
  },
  {
    title: "Financial Journey",
    description: `Web application for the management of the game 'Financial Journey' by the 
    cooperative Pablo Muñoz Vega, a game similar to Pokémon GO.`,
    technologies: [
      {
        icon: ReactIcon,
        name: "React",
        style: "bg-blue-400/70 dark:bg-blue-400/70"
      },
      {
        icon: TypeScript,
        name: "TypeScript",
        style: "bg-blue-700/70 dark:bg-blue-700/70"
      },
      {
        icon: Mongo,
        name: "Mongo",
        style: "bg-green-500/70 dark:bg-green-500/70"
      },
      {
        icon: NestJS,
        name: "NestsJS",
        style: "bg-rose-600/70 dark:bg-rose-600/70"
      }
    ],
    image: pmv
  }
];
