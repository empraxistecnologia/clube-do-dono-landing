import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/content/club";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch lg:grid-cols-[1.02fr_1fr]">
        {/* Texto */}
        <div className="order-2 flex flex-col justify-center px-5 pt-10 pb-14 sm:px-8 lg:order-1 lg:py-32 lg:pr-14">
          <p className="eyebrow text-gold">{hero.eyebrow}</p>
          <div className="mt-5 hairline w-16 text-gold" />
          <h1 className="display mt-7 text-[clamp(2.9rem,11vw,5.6rem)]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block font-serif text-[1.08em] font-normal italic tracking-tight text-gold normal-case">
              {hero.titleAccent}
            </span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-ivory/65 sm:text-[0.95rem]">{hero.text}</p>

          <div className="mt-9 flex flex-col items-start gap-6">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
            >
              {hero.primaryCta.label} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex items-center gap-2 text-[0.8rem] text-ivory/60 transition-colors hover:text-gold"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative order-1 min-h-[52vw] sm:min-h-[46vw] lg:order-2 lg:min-h-[720px]">
          <img
            src={hero.image}
            alt="Cadeira de barbeiro em uma barbearia clássica"
            width={1280}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent lg:from-ink lg:via-ink/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent"
          />

          <p className="display absolute top-28 left-5 hidden max-w-[6.5rem] text-[0.72rem] leading-tight tracking-[0.14em] text-ivory/85 sm:left-8 lg:block">
            {hero.sideNote.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
          <p className="absolute right-5 bottom-6 hidden text-right text-[0.62rem] leading-relaxed tracking-[0.22em] text-ivory/55 uppercase sm:right-8 lg:block">
            {hero.caption.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
