import spotifyClone from "@/assets/images/spotify-clone.webp";
import vivoVivo from "@/assets/images/vivo-vivo.webp";
import AstroIcon from "@/icons/react/AstroIcon";
import NestJS from "@/icons/react/NestJS";
import NextJS from "@/icons/react/NextJS";
import PostgreSQL from "@/icons/react/PostgreSQL";
import ReactIcon from "@/icons/react/ReactIcon";
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
        icon: NestJS,
        name: "NestJS",
        style: "bg-rose-600/70 dark:bg-rose-600/70"
      },
      {
        icon: TypeScript,
        name: "TypeScript",
        style: "bg-blue-700/70 dark:bg-blue-700/70"
      }
    ],
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
    liveUrl: new URL("https://vivo-vivo-app-production.up.railway.app"),
    image: vivoVivo
  }
];
