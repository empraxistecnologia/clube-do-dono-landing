import { clubIntro } from "@/content/club";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function ClubBenefits() {
  return (
    <section id="o-clube" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <Monogram
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-16 h-64 w-64 text-ink/[0.05] sm:h-80 sm:w-80"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">01 &nbsp;/&nbsp; O clube</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(1.75rem,4.4vw,2.75rem)] leading-[1.12] font-semibold tracking-tight">
              {clubIntro.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:pt-2">{clubIntro.text}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px border-t border-border sm:grid-cols-3">
          {clubIntro.pillars.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 90} className="pt-8 sm:pr-8">
              <p className="font-serif text-2xl italic text-gold">{p.number}</p>
              <h3 className="mt-4 text-[0.95rem] font-semibold">{p.title}</h3>
              <p className="mt-2 max-w-[26ch] text-[0.82rem] leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
