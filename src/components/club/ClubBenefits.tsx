import { clubIntro } from "@/content/club";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function ClubBenefits() {
  return (
    <section id="o-clube" className="relative bg-background py-24 sm:py-32">
      <Monogram
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -left-20 h-72 w-72 text-ink/[0.05] sm:h-96 sm:w-96"
      />

      <div className="shell relative">
        <p className="eyebrow border-b border-border pb-4 text-muted-foreground">01 &nbsp;/&nbsp; O clube</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="max-w-[20ch] text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.1] font-semibold tracking-tight">
              {clubIntro.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-muted-foreground lg:pt-3">
              {clubIntro.text}
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-10 border-t border-border sm:grid-cols-3 sm:gap-8">
          {clubIntro.pillars.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 90} className="pt-10 sm:pr-10">
              <p className="font-serif text-3xl italic text-gold">{p.number}</p>
              <h3 className="mt-5 text-[1.15rem] font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-[32ch] text-[1rem] leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-12">
          <a
            href="#planos"
            className="btn-shine inline-flex items-center rounded-full bg-gold px-8 py-4 text-[0.95rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-gold"
          >
            Fazer parte do clube
          </a>
          <a
            href="#videos"
            className="btn-shine inline-flex items-center rounded-full border border-ink px-8 py-4 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ivory"
          >
            Ver como o clube funciona
          </a>
        </div>
      </div>
    </section>
  );
}
