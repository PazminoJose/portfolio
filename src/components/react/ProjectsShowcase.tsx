import { projectItems } from "@/lib/data/projectItems";
import { positiveMod } from "@/lib/utils/positiveMod";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Acordion";
import Badge from "./Badge";

const titleHeight = 32;

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
                <AccordionTrigger className="text-xl font-bold">{item.title}</AccordionTrigger>
                <AccordionContent className="max-w-xl text-pretty">
                  <p className="mb-2">{item.description}</p>
                  <div className="grid auto-cols-max grid-flow-col grid-cols-4 grid-rows-2 gap-x-3 gap-y-4">
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
      <section className="relative rounded-md px-2 sm:px-0 md:w-1/2">
        <div
          className="animate-tilt absolute -inset-0.5 h-[105%]  w-[105%] rounded-lg bg-gradient-to-r 
        from-[#4af2c8] to-[#2f4cb3] opacity-20 blur transition duration-1000 group-hover:opacity-100 
        group-hover:duration-200"
        ></div>

        <div
          aria-label="Example Previews"
          style={{
            paddingBottom: `calc(${titleHeight}px * ${projectItems.length - 1})`
          }}
          className="relative"
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
                href={item.liveUrl.href}
                target="_blank"
                style={style}
                className={`panel left-0 top-0 block w-full translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)] ${
                  index === current ? "relative" : "absolute"
                }`}
                data-card
              >
                <p className="code flex items-center justify-center py-1 text-sm" aria-hidden="true">
                  {item.liveUrl.hostname}
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
      </section>
    </div>
  );
}
