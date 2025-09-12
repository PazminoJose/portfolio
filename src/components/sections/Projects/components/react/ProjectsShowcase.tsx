import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/react/Accordion";
import Badge from "@/components/ui/react/Badge";
import BadgeLink from "@/components/ui/react/BadgeLink";
import AppWindow from "@/icons/react/AppWindow";
import GitHub from "@/icons/react/GitHub";
import NPM from "@/icons/react/NPM";
import { projectItems as pi } from "@/lib/data/projectItems";
import { cn } from "@/lib/utils";
import { positiveMod } from "@/lib/utils/positiveMod";
import type { ProjectItem } from "@/types/projectItem.type";
import { useState } from "react";

const titleHeight = 40;

interface ProjectShowcaseProps {
  locale: string;
}
export default function ProjectsShowcase({ locale = "es" }: ProjectShowcaseProps) {
  const [current, setCurrent] = useState<number>(0);
  const projectItems: ProjectItem[] = pi[locale];

  const texts = {
    en: {
      links: "Links",
      technologies: "Technologies"
    },
    es: {
      links: "Enlaces",
      technologies: "Tecnologías"
    }
  }[locale]!;

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-10 px-4 md:flex-row md:items-center md:px-0">
      <section>
        <Accordion type="single" defaultValue={"0"}>
          {projectItems.map((item, index) => {
            const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
              if (event.target instanceof HTMLAnchorElement) return;
              event.preventDefault();
              setCurrent(index);
            };
            return (
              <AccordionItem onClick={handleItemClick} key={item.title} value={index.toString()}>
                <AccordionTrigger className="group z-10 text-xl font-bold">
                  <h3 className="text-emerald-400 group-hover:underline">{item.title}</h3>
                </AccordionTrigger>
                <AccordionContent className="max-w-xl text-pretty">
                  <p className="mb-2">{item.description}</p>
                  {(item.githubUrl || item.liveUrl || item.npmUrl) && (
                    <>
                      <h4 className="my-3 text-center text-lg font-semibold text-cyan-600">{texts.links}</h4>
                      <div className="mr-14 flex w-full justify-center gap-3">
                        {item.githubUrl && (
                          <BadgeLink
                            href={item.githubUrl ?? ""}
                            className="bg-black/50 hover:bg-gray-800 dark:bg-black/50"
                          >
                            <GitHub />
                            GitGub
                          </BadgeLink>
                        )}
                        {item.liveUrl && (
                          <BadgeLink href={item.liveUrl?.toString() ?? ""}>
                            <AppWindow />
                            Demo
                          </BadgeLink>
                        )}
                        {item.npmUrl && (
                          <BadgeLink
                            href={item.npmUrl.toString()}
                            className="bg-red-500/70 hover:bg-red-600 dark:bg-red-500/70"
                          >
                            <NPM />
                            NPM
                          </BadgeLink>
                        )}
                      </div>
                    </>
                  )}

                  <h4 className="my-3 text-center text-lg font-semibold text-cyan-600">
                    {texts.technologies}
                  </h4>
                  <div className="grid auto-cols-max grid-flow-col grid-cols-2 grid-rows-3 gap-x-3 gap-y-4 sm:grid-flow-row sm:grid-cols-4 sm:grid-rows-2">
                    {item.technologies?.map((technology) => (
                      <Badge key={technology.name} className={technology.style}>
                        <technology.icon />
                        {technology.name}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
      <div
        aria-label="Example Previews"
        style={{ paddingBottom: `calc(${titleHeight}px * ${projectItems.length - 1})` }}
        className="relative md:w-1/2"
      >
        {projectItems.map((item, index) => {
          const style = {
            "--position": positiveMod(index - (current ?? 0), projectItems.length),
            "--translate": `calc(var(--position) * ${titleHeight}px)`,
            zIndex: `calc(${projectItems.length} - var(--position))`
          } as React.CSSProperties;

          return item.liveUrl?.href ? (
            <a
              key={index}
              tabIndex={-1}
              href={item.liveUrl?.href ?? item.npmUrl?.href ?? "/"}
              target="_blank"
              style={style}
              className={cn(
                "panel top-0 left-0 block w-full",
                "translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)]",
                index === current ? "relative" : "absolute"
              )}
              data-card
            >
              <p className="code flex items-center justify-center py-1 text-sm" aria-hidden="true">
                {item.liveUrl?.hostname ?? ""}
              </p>
              <img
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={`Example image for ${item.title}`}
                className="w-full rounded-md object-cover object-left-top"
                loading="lazy"
                decoding="async"
              />
            </a>
          ) : (
            <div
              key={index}
              tabIndex={-1}
              style={style}
              className={cn(
                "panel top-0 left-0 block w-full",
                "translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)]",
                index === current ? "relative" : "absolute"
              )}
              data-card
            >
              <p className="code flex items-center justify-center py-1 text-sm" aria-hidden="true">
                {item.liveUrl?.hostname ?? ""}
              </p>
              <img
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={`Example image for ${item.title}`}
                className="w-full rounded-md object-cover object-left-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
