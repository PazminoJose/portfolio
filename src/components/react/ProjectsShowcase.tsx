import AppWindow from "@/icons/react/AppWindow";
import GitHub from "@/icons/react/GitHub";
import { projectItems } from "@/lib/data/projectItems";
import { cn } from "@/lib/utils";
import { positiveMod } from "@/lib/utils/positiveMod";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import Badge from "./Badge";
import BadgeLink from "./BadgeLink";

const titleHeight = 40;

export default function ProjectShowcase() {
  const [current, setCurrent] = useState<number>(0);

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
                  {(item.githubUrl || item.liveUrl) && (
                    <>
                      <h4 className="my-3 text-center text-lg font-semibold text-cyan-600">Links</h4>
                      <div className="mr-14 flex w-full justify-center gap-3">
                        <BadgeLink
                          href={item.githubUrl ?? ""}
                          className="bg-black/50 hover:bg-gray-800 dark:bg-black/50"
                        >
                          <GitHub />
                          GitGub
                        </BadgeLink>
                        <BadgeLink href={item.liveUrl?.toString() ?? ""}>
                          <AppWindow />
                          Demo
                        </BadgeLink>
                      </div>
                    </>
                  )}

                  <h4 className="my-3 text-center text-lg font-semibold text-cyan-600">Technologies</h4>
                  <div className="grid auto-cols-max grid-flow-col grid-cols-2 grid-rows-3  gap-x-3 gap-y-4 sm:grid-flow-row sm:grid-cols-4 sm:grid-rows-2">
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
      {/* <section className="relative rounded-md px-2 sm:px-0 md:w-1/2">
        <div
          className="animate-tilt absolute -inset-0.5 h-[105%]  w-[105%] rounded-lg bg-gradient-to-r 
        from-[#4af2c8] to-[#2f4cb3] opacity-20 blur transition duration-1000 group-hover:opacity-100 
        group-hover:duration-200"
        ></div> */}

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

          return (
            <a
              key={index}
              tabIndex={-1}
              href={item.liveUrl?.href ?? ""}
              target="_blank"
              style={style}
              className={cn(
                "panel left-0 top-0 block w-full",
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
          );
        })}
      </div>
      {/* </section> */}
    </div>
  );
}
