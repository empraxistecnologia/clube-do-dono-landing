import { ArrowUpRight } from "lucide-react";
import { finalCta } from "@/content/club";
import { Monogram } from "./Monogram";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-28">
      <Monogram
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-10 hidden h-80 w-80 -translate-y-1/2 text-ivory/[0.05] lg:block"
      />
      <div className="shell relative grid gap-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-20">
        <p className="hidden border-l border-gold pl-6 text-[0.7rem] leading-relaxed tracking-[0.22em] text-ivory/50 uppercase lg:block">
          {finalCta.left.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </p>

        <div>
          <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)]">
            {finalCta.titleLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="block">
              {finalCta.titlePlain}{" "}
              <span className="font-serif text-[1.1em] font-normal italic tracking-tight text-gold normal-case">
                {finalCta.titleAccent}
              </span>
            </span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ivory/70">{finalCta.text}</p>
          <a
            href={finalCta.cta.href}
            className="mt-9 inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-[0.95rem] font-medium text-ink transition-colors hover:bg-gold-soft"
          >
            {finalCta.cta.label} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <p className="hidden text-[0.7rem] leading-relaxed tracking-[0.22em] text-ivory/50 uppercase lg:block">
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
