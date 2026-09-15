import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero } from "@/content/club";

const SLIDE_MS = 6000;

export function Hero() {
  const slides = hero.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearInterval(id);
  }, [slides.length, paused]);

  const active = slides[index] ?? slides[0]!;

  return (
    <section
      id="topo"
      className="relative isolate bg-ink text-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Carrossel de fotografia full-bleed */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
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

      <div className="shell relative flex min-h-[560px] flex-col justify-center pt-28 pb-24 lg:min-h-[80svh] lg:pt-32 lg:pb-24">
        <div key={index} className="max-w-[38rem] animate-fade-in lg:max-w-[46rem]">
          <p className="eyebrow max-w-[28ch] text-gold">{active.eyebrow}</p>
          <div className="hairline mt-5 w-20 text-gold" />

          <h1 className="display mt-6 text-[clamp(2.6rem,6.5vw,5.2rem)]">
            {active.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            {active.titleAccent && (
              <span className="ml-[0.12em] font-serif text-[1.12em] font-normal italic tracking-tight text-gold normal-case">
                {active.titleAccent}
              </span>
            )}
          </h1>

          <p className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-ivory/75">{active.text}</p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
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

        {slides.length > 1 && (
          <div className="absolute bottom-9 left-[clamp(1.25rem,4vw,4rem)] flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Mostrar mensagem ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-3 bg-ivory/30 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
