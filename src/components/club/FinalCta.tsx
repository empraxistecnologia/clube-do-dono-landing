import { ArrowUpRight } from "lucide-react";
import { finalCta } from "@/content/club";
import { Monogram } from "./Monogram";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-ivory sm:py-24">
      <Monogram
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-8 hidden h-72 w-72 -translate-y-1/2 text-ivory/[0.05] lg:block"
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-16">
        <p className="hidden border-l border-gold pl-5 text-[0.62rem] leading-relaxed tracking-[0.22em] text-ivory/45 uppercase lg:block">
          {finalCta.left.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>

        <div>
          <h2 className="display text-[clamp(1.9rem,5.5vw,3rem)]">
            {finalCta.titleLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="block">
              {finalCta.titlePlain}{" "}
              <span className="font-serif text-[1.08em] font-normal italic tracking-tight text-gold normal-case">
                {finalCta.titleAccent}
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-ivory/60">{finalCta.text}</p>
          <a
            href={finalCta.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-soft"
          >
            {finalCta.cta.label} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="hidden text-[0.62rem] leading-relaxed tracking-[0.22em] text-ivory/45 uppercase lg:block">
          {finalCta.right.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
