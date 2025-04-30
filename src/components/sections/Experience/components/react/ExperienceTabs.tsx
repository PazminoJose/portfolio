import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/react/Tabs";
import Award from "@/icons/react/Award";
import Books from "@/icons/react/Books";
import Building from "@/icons/react/Building";
import Certificate from "@/icons/react/Certificate";
import { awards } from "@/lib/data/awards";
import { certificates } from "@/lib/data/certificates";
import { education } from "@/lib/data/education";
import { laboralExperience } from "@/lib/data/laboralExperience";
import ExperienceTimeLine from "./ExperienceTimeLine";

interface ExperienceTabsProps {
  locale: string;
}

export default function ExperienceTabs({ locale = "es" }: ExperienceTabsProps) {
  const texts = {
    en: {
      laboralExperience: "Laboral Experience",
      education: "Education",
      certificates: "Certificates",
      awards: "Awards"
    },
    es: {
      laboralExperience: "Experiencia Laboral",
      education: "Educación",
      certificates: "Certificados",
      awards: "Premios"
    }
  }[locale]!;

  return (
    <Tabs className="flex flex-col gap-28 sm:block sm:gap-0" defaultValue="laboral-experience">
      <TabsList className="grid w-full grid-cols-1 grid-rows-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0">
        <TabsTrigger value="laboral-experience">
          <Building />
          {texts.laboralExperience}
        </TabsTrigger>
        <TabsTrigger value="education">
          <Books />
          {texts.education}
        </TabsTrigger>
        <TabsTrigger value="certificates">
          <Certificate />
          {texts.certificates}
        </TabsTrigger>
        <TabsTrigger value="awards">
          <Award />
          {texts.awards}
        </TabsTrigger>
      </TabsList>
      <div className="flex h-full w-full justify-center">
        <TabsContent value="laboral-experience">
          <ExperienceTimeLine data={laboralExperience[locale]} />
        </TabsContent>
        <TabsContent value="education">
          <ExperienceTimeLine data={education[locale]} />
        </TabsContent>
        <TabsContent value="certificates">
          <ExperienceTimeLine data={certificates[locale]} />
        </TabsContent>
        <TabsContent value="awards">
          <ExperienceTimeLine data={awards[locale]} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
