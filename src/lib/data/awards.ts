import Award from "@/icons/react/Award";
import type { LocalizedObject } from "@/types/localizedObject.type";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const awards: LocalizedObject<TimeLineElement[]> = {
  en: [
    {
      icon: Award,
      date: "October 22, 2022",
      title: "IEEE Xtreme programming",
      description: 'Team "NoCompilaCode" Participated in IEEEXtreme 16.0 Programming',
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
  ],
  es: [
    {
      icon: Award,
      date: "22 de octubre de 2022",
      title: "IEEEXtreme programming",
      description: "Equipo NoCompilaCode participó en la competencia IEEEXtreme 16.0 Programming",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/IEEEXTREME.pdf"
        }
      ]
    },
    {
      icon: Award,
      date: "16-17 de diciembre de 2022",
      title: "Competencia Interuniversitaria Multiacadémica (CIMA)",
      description:
        "Por haber participado y obtener el segundo lugar en la competencia interuniversitaria multiacadémica (CIMA), realizada por la empresa ENCUBA S.C., en el mes de diciembre del 2022.",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/certificado-encuba.pdf"
        }
      ]
    },
    {
      icon: Award,
      date: "21 de julio de 2023",
      title: "Reconocimiento Académico de la Universidad Técnica de Ambato",
      description:
        "La facultad de ingeniería en sistemas, electrónica e industrial y la facultad de contabilidad y auditoría confieren reconocimiento por su destacada participación y haber obtenido el segundo lugar en la competencia interuniversitaria de proyectos tecnológicos e innovadores, organizada por la empresa ENCUBA S.C. del 16 al 17 de diciembre del 2022 en la ciudad de Ibarra, como estudiante.",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/certificado-uta.pdf"
        }
      ]
    },
    {
      icon: Award,
      date: "15-17 de noviembre de 2023",
      title: "TuApp 2023",
      description: "Finalista en el Torneo Universitario de Apps",
      links: [
        {
          title: "Ver Certificado",
          href: "/docs/tuapp.pdf"
        }
      ]
    }
  ]
};
