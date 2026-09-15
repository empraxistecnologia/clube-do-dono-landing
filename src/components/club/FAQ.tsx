import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/content/club";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faq.items[0]?.q ?? null);

  return (
    <section id="duvidas" className="bg-background pt-20 pb-24 sm:pt-24 sm:pb-32">
      <div className="shell">
        <p className="eyebrow border-b border-border pb-4 text-muted-foreground">06 &nbsp;/&nbsp; Dúvidas</p>

        <div className="mx-auto mt-16 max-w-[68rem] text-center">
          <h2 className="display text-[clamp(2.8rem,6.4vw,5rem)]">
            {faq.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-[0.82rem] leading-relaxed tracking-[0.18em] text-muted-foreground uppercase">
            {faq.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[76rem]">
          <ul className="border-t border-border">
            {faq.items.map((item, i) => {
              const isOpen = open === item.q;
              const panelId = `faq-panel-${i}`;
              return (
                <li key={item.q} className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.q)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-8 py-6 text-left text-[1.0625rem] font-medium transition-colors hover:text-gold"
                    >
                      {item.q}
                      {isOpen ? (
                        <Minus className="h-4 w-4 shrink-0 text-gold" />
                      ) : (
                        <Plus className="h-4 w-4 shrink-0" />
                      )}
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={panelId}
                      className="max-w-[70ch] pr-6 pb-7 text-[1rem] leading-relaxed text-muted-foreground"
                    >
                      {item.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#planos"
              className="btn-shine inline-flex items-center rounded-full bg-gold px-8 py-4 text-[0.95rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-gold"
            >
              Fazer parte do clube
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center rounded-full border border-ink px-8 py-4 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ivory"
            >
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
