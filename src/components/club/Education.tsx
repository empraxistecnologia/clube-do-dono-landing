import { ArrowUpRight } from "lucide-react";
import { education } from "@/content/club";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="conhecimento" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">05 &nbsp;/&nbsp; Conhecimento</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="relative">
            <img
              src={education.image}
              alt="Barbeiro cortando cabelo com tesoura e pente"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded-sm object-cover grayscale"
            />
            <p className="absolute -bottom-4 left-4 border-l-2 border-ink bg-gold px-4 py-3 text-[0.68rem] leading-relaxed tracking-[0.22em] text-ink uppercase sm:left-8">
              {education.stamp.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:pl-4">
            <h2 className="text-[clamp(1.7rem,4.4vw,2.6rem)] leading-[1.12] font-semibold tracking-tight">
              {education.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{education.text}</p>

            <div className="mt-9 grid gap-px sm:grid-cols-2">
              {education.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between border-t border-ink/25 py-4 pr-2 text-[0.85rem] font-medium transition-colors hover:text-gold sm:mr-6"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span
                    key={link.label}
                    title="Link pendente"
                    className="flex items-center justify-between border-t border-border py-4 pr-2 text-[0.85rem] font-medium text-muted-foreground sm:mr-6"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
