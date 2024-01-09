import Books from "@/icons/react/Books";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const education: TimeLineElement[] = [
  {
    icon: Books,
    date: "2016",
    title: "Bachelor's degree",
    description: "Science Bachelor",
    links: [
      {
        title: "View Bachelor's Degree",
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
