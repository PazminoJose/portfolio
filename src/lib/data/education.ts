import Books from "@/icons/react/Books";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const education: TimeLineElement[] = [
  {
    icon: Books,
    date: "2016",
    title: "BACHELOR´S DEGREE IN SOFTWARE ENGINEERING",
    description: "UNIVERSIDAD TÉCNICA DE AMBATO",
    links: [
      {
        title: "View Bachelor's Degree",
        href: "/docs/titulo.pdf"
      }
    ]
  },
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
  }
];
