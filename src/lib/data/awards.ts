import Award from "@/icons/react/Award";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const awards: TimeLineElement[] = [
  {
    icon: Award,
    date: "October 22, 2022",
    title: "IEEE Xtreme programming",
    description: "Front team NoCompilaCode Participated in IEEEXtreme 16.0 Programming",
    links: [
      {
        title: "View Certificate",
        href: "/docs/IEEEXTREME.pdf"
      }
    ]
  },
  {
    icon: Award,
    date: "December 16-17, 2022",
    title: "Multi-academic Interuniversity Competition (CIMA)",
    description:
      "For having participated and obtaining second place in the multi-academic interuniversity competition (CIMA), carried out by the company ENCUBA S.C., in the month of December 2022.",
    links: [
      {
        title: "View Certificate",
        href: "/docs/certificado-encuba.pdf"
      }
    ]
  },
  {
    icon: Award,
    date: "July 21, 2023",
    title: "Academic Recognition from the Universidad Técnica de Ambato",
    description: `The faculty of systems, electronic and industrial engineering and the faculty of accounting and auditing confer recognition for 
    their outstanding participation and having obtained second place in the interuniversity competition for technological and innovative projects, organized by the company ENCUBA S.C. 
    from December 16 to 17, 2022 in the city of Ibarra, as a student.`,
    links: [
      {
        title: "View Certificate",
        href: "/docs/certificado-uta.pdf"
      }
    ]
  },
  {
    icon: Award,
    date: "November 15-17, 2023",
    title: "TuApp 2023",
    description: "Finalist in the University App Tournament",
    links: [
      {
        title: "View Certificate",
        href: "/docs/tuapp.pdf"
      }
    ]
  }
];
