import Books from "@/icons/react/Books";
import type { LocalizedObject } from "@/types/localizedObject.type";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const education: LocalizedObject<TimeLineElement[]> = {
  en: [
    {
      icon: Books,
      date: "2016",
      title: "HIGH SCHOOL SCIENCE DEGREE",
      description: "JUAN LEÓN MERA LA SALLE HIGH SCHOOL",
      links: [
        {
          title: "View High School Segree",
          href: "/docs/titulo%20bachiller.pdf"
        }
      ]
    },
    {
      icon: Books,
      date: "2023",
      title: "MINISTRY OF LABOR",
      description:
        "Certificate of labor competencies OFFICE: ADMINISTRATIVE ASSISTANCE WITH OFFICE MANAGEMENT.",
      links: [
        {
          title: "View Office Management Certificate",
          href: "/docs/ofimatica.pdf"
        }
      ]
    },
    {
      icon: Books,
      date: "2024",
      title: "BACHELOR´S DEGREE IN SOFTWARE ENGINEERING",
      description: "UNIVERSIDAD TÉCNICA DE AMBATO",
      links: [
        {
          title: "View Bachelor's Degree",
          href: "/docs/titulo.pdf"
        }
      ]
    }
  ],
  es: [
    {
      icon: Books,
      date: "2016",
      title: "TÍTULO DE BACHILLER EN CIENCIAS",
      description: "COLEGIO JUAN LEÓN MERA LA SALLE",
      links: [
        {
          title: "Ver Título",
          href: "/docs/titulo%20bachiller.pdf"
        }
      ]
    },
    {
      icon: Books,
      date: "2023",
      title: "MINISTERIO DE TRABAJO",
      description:
        "Certificado de competencias laborales OFICINA: ASISTENCIA ADMINISTRATIVA CON GESTIÓN OFIMÁTICA.",
      links: [
        {
          title: "Ver Certificado de Gestión Ofimática",
          href: "/docs/ofimatica.pdf"
        }
      ]
    },
    {
      icon: Books,
      date: "2024",
      title: "TÍTULO DE INGENIERÍA EN SOFTWARE",
      description: "UNIVERSIDAD TÉCNICA DE AMBATO",
      links: [
        {
          title: "Ver Título",
          href: "/docs/titulo.pdf"
        }
      ]
    }
  ]
};
