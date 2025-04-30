import Certificate from "@/icons/react/Certificate";
import type { LocalizedObject } from "@/types/localizedObject.type";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const certificates: LocalizedObject<TimeLineElement[]> = {
  en: [
    {
      icon: Certificate,
      date: "2021",
      title: "CSEI 2021",
      description: "III Conference on Computer Science, Electronics and Industrial Engineering (CSE12021)",
      links: [
        {
          title: "View Certificate",
          href: "/docs/CSEI%202021.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2022",
      title: "CSEI 2022",
      description: `IV Conference on Computer Science, Electronics and Industrial Engineering (CSE12022)`,
      links: [
        {
          title: "View Certificate",
          href: "/docs/CSEI%202022.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2022",
      title: "Google Study Conference",
      description: "INSPIRING STUDY CONFERENCE WITH GOOGLE",
      links: [
        {
          title: "View Certificate",
          href: "/docs/GOOGLE.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2023",
      title: "CSEI 2023",
      description: `V Conference on Computer Science, Electronics and Industrial Engineering (CSE12023)`,
      links: [
        {
          title: "View Certificate",
          href: "/docs/CSEI%202023.pdf"
        }
      ]
    }
  ],
  es: [
    {
      icon: Certificate,
      date: "2021",
      title: "CSEI 2021",
      description:
        "III Conferencia de Ciencias de la Computación, Electrónica e Ingeniería Industrial (CSE12021)",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/CSEI%202021.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2022",
      title: "CSEI 2022",
      description: `IV Conferencia de Ciencias de la Computación, Electrónica e Ingeniería Industrial (CSE12022)`,
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/CSEI%202022.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2022",
      title: "Google Study Conference",
      description: "CONFERENCIA DE ESTUDIO INSPIRADORA CON GOOGLE",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/GOOGLE.pdf"
        }
      ]
    },
    {
      icon: Certificate,
      date: "2023",
      title: "CSEI 2023",
      description: `V Conferencia de Ciencias de la Computación, Electrónica e Ingeniería Industrial (CSE12023)`,
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/CSEI%202023.pdf"
        }
      ]
    }
  ]
};
