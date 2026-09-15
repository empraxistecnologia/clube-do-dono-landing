import { GraduationCap, Tag, Users } from "lucide-react";
import { clubIntro } from "@/content/club";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

const icons = {
  tag: Tag,
  graduation: GraduationCap,
  users: Users,
};

export function ClubBenefits() {
  return (
    <section id="o-clube" className="relative bg-background py-24 sm:py-32">
      <Monogram
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -left-20 h-72 w-72 text-ink/[0.05] sm:h-96 sm:w-96"
      />

      <div className="shell relative">
        <p className="eyebrow border-b border-border pb-4 text-muted-foreground">01 &nbsp;/&nbsp; O clube</p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,5vw,4rem)] leading-[0.98]">
              {clubIntro.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="mt-2 block font-serif text-[0.92em] font-normal italic tracking-tight text-gold normal-case">
                {clubIntro.titleAccent}
              </span>
            </h2>
            <p className="mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
              {clubIntro.text}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-3xl border border-gold/40">
              <img
                src={clubIntro.image.src}
                alt={clubIntro.image.alt}
                loading="lazy"
                className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[480px]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/30" />
            </div>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-6 sm:grid-cols-3">
          {clubIntro.pillars.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal
                as="li"
                key={p.number}
                delay={i * 90}
                className="group rounded-2xl border border-border bg-ink/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-serif text-4xl italic text-gold">{p.number}</p>
                  <Icon aria-hidden="true" className="h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-gold" />
                </div>
                <h3 className="mt-6 text-[1.15rem] font-semibold">{p.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 rounded-full bg-ink px-8 py-5 text-center">
          {clubIntro.marquee.map((m) => (
            <span key={m} className="eyebrow text-ivory/80">
              {m}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
