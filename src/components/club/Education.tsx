import { ArrowUpRight, MessageCircle } from "lucide-react";
import { education, whatsappUrl } from "@/content/club";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="conhecimento" className="bg-background py-24 sm:py-32">
      <div className="shell">
        <p className="eyebrow border-b border-border pb-4 text-muted-foreground">05 &nbsp;/&nbsp; Conhecimento</p>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <img
              src={education.image}
              alt="Barbeiro cortando cabelo com tesoura e pente"
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full rounded-sm object-cover grayscale"
            />
            <p className="absolute -bottom-5 left-5 border-l-2 border-ink bg-gold px-5 py-4 text-[0.72rem] leading-relaxed tracking-[0.22em] text-ink uppercase sm:left-8">
              {education.stamp.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="max-w-[20ch] text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.1] font-semibold tracking-tight">
              {education.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
              {education.text}
            </p>

            <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
              {education.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between border-t border-ink/25 py-5 pr-2 text-[1rem] font-medium transition-colors hover:text-gold"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <span
                    key={link.label}
                    title="Link pendente"
                    className="flex items-center justify-between border-t border-border py-5 pr-2 text-[1rem] font-medium text-muted-foreground"
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
