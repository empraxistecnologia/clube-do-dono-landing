import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/content/club";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = hero.images;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section id="topo" className="relative isolate bg-ink text-ivory">
      {/* Carrossel de fotografia full-bleed */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition: slide.position, opacity: i === index ? 1 : 0 }}
            className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-opacity duration-[1200ms] ease-out"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink/70 lg:bg-gradient-to-r lg:from-ink lg:via-ink/80 lg:via-38% lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-[38rem] lg:max-w-[46rem]">
          <p className="eyebrow max-w-[28ch] text-gold">{hero.eyebrow}</p>
          <div className="hairline mt-6 w-20 text-gold" />

          <h1 className="display mt-8 text-[clamp(3rem,8.5vw,7rem)]">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="ml-[0.12em] font-serif text-[1.12em] font-normal italic tracking-tight text-gold normal-case">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ivory/75">{hero.text}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-4 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-gold hover:ring-1 hover:ring-gold"
            >
              {hero.primaryCta.label} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="group link-underline inline-flex items-center gap-2 text-[0.95rem] text-ivory/75 transition-colors hover:text-gold"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <p className="mt-12 border-t border-ivory/15 pt-5 text-[0.8rem] tracking-[0.16em] text-ivory/60 uppercase">
            {hero.support}
          </p>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-10 left-[clamp(1.25rem,4vw,4rem)] flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Mostrar imagem ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-3 bg-ivory/30 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
        )}

        <p className="absolute right-[clamp(1.25rem,4vw,4rem)] bottom-10 hidden text-right text-[0.7rem] leading-relaxed tracking-[0.24em] text-ivory/55 uppercase lg:block">
          {hero.caption.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
