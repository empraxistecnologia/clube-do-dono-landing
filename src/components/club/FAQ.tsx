import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/content/club";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="duvidas" className="bg-background pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">06 &nbsp;/&nbsp; Dúvidas</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.6fr] lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2.2rem,7vw,3.4rem)]">
              {faq.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-[22ch] border-l border-gold pl-4 text-[0.68rem] leading-relaxed tracking-[0.2em] text-muted-foreground uppercase">
              {faq.subtitle}
            </p>
          </div>

          <ul className="border-t border-border">
            {faq.items.map((item) => {
              const isOpen = open === item.q;
              const panelId = `faq-${item.q.length}-${item.q.slice(0, 6)}`;
              return (
                <li key={item.q} className="border-b border-border">
                  {item.a ? (
                    <>
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : item.q)}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className="flex w-full items-center justify-between gap-6 py-4 text-left text-[0.88rem] transition-colors hover:text-gold"
                        >
                          {item.q}
                          {isOpen ? (
                            <Minus className="h-4 w-4 shrink-0" />
                          ) : (
                            <Plus className="h-4 w-4 shrink-0" />
                          )}
                        </button>
                      </h3>
                      {isOpen && (
                        <div id={panelId} className="pr-10 pb-5 text-[0.82rem] leading-relaxed text-muted-foreground">
                          {item.a}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center justify-between gap-6 py-4 text-[0.88rem] text-muted-foreground">
                      {item.q}
                      <span className="shrink-0 text-[0.62rem] tracking-[0.2em] uppercase">Resposta em breve</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
