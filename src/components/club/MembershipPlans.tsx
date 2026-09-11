import { useEffect, useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { plans, type Plan } from "@/content/club";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

const cardStyle: Record<Plan["id"], string> = {
  silver: "card-silver",
  gold: "card-gold",
  diamond: "card-diamond",
};

function MemberCard({ plan }: { plan: Plan }) {
  return (
    <div className={`${cardStyle[plan.id]} sheen relative aspect-[16/10] w-full overflow-hidden rounded-md p-5`}>
      <div className="absolute inset-2 rounded-sm border border-current opacity-25" aria-hidden="true" />
      <div className="relative flex h-full flex-col items-center justify-center gap-2">
        <Monogram className="h-10 w-10 opacity-80" />
        <p className="display text-xl tracking-[0.18em]">{plan.name}</p>
        <p className="text-[0.6rem] tracking-[0.3em] uppercase opacity-70">Clube do Dono</p>
      </div>
    </div>
  );
}

function PlanDialog({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-ink/75 p-5 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes do plano ${plan.name}`}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-sm border border-ivory/15 bg-ink p-7 text-ivory"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-ivory/45">Plano</p>
            <h3 className="display mt-2 text-3xl">{plan.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-5 text-2xl font-semibold text-gold">
          {plan.price}
          <span className="text-base font-normal text-ivory/60">{plan.period}</span>
        </p>
        <p className="mt-1 text-[0.9rem] text-ivory/60">
          {plan.limit} {plan.limitNote}
        </p>

        <ul className="mt-6 space-y-2.5 border-t border-ivory/12 pt-5">
          {plan.benefits.map((b) => (
            <li key={b} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ivory/75">
              <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
              {b}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-ivory/12 pt-5 text-[0.85rem] leading-relaxed text-ivory/50">
          A contratação online deste plano será disponibilizada em breve.
        </p>
      </div>
    </div>
  );
}

export function MembershipPlans() {
  const [detail, setDetail] = useState<Plan | null>(null);

  return (
    <section id="planos" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="shell">
        <p className="eyebrow border-b border-ivory/12 pb-4 text-ivory/45">04 &nbsp;/&nbsp; Planos</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="display text-[clamp(2.4rem,5.5vw,4rem)]">
            {plans.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-ivory/70">{plans.text}</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <ul className="grid gap-6 sm:grid-cols-3">
            {plans.items.map((plan, i) => (
              <Reveal
                as="li"
                key={plan.id}
                delay={i * 90}
                className={`plan-card flex flex-col rounded-sm border p-6 ${
                  plan.id === "gold" ? "border-gold/55 bg-ivory/[0.05]" : "border-ivory/12"
                }`}
              >
                <MemberCard plan={plan} />

                <div className="mt-7 text-center">
                  <p className="font-serif text-5xl leading-none italic text-ivory">{plan.limit}</p>
                  <p className="mx-auto mt-2 max-w-[18ch] text-[0.78rem] leading-relaxed tracking-[0.12em] text-ivory/55 uppercase">
                    {plan.limitNote}
                  </p>
                  <p className="mt-5 text-2xl font-semibold text-gold">
                    {plan.price}
                    <span className="text-base font-normal text-ivory/60">{plan.period}</span>
                  </p>
                </div>

                <ul className="mt-7 flex-1 space-y-2.5 border-t border-ivory/12 pt-6">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ivory/75">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>

                {plan.checkoutUrl ? (
                  <a
                    href={plan.checkoutUrl}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm border border-gold px-4 py-3.5 text-[0.95rem] font-medium text-gold transition-colors duration-200 hover:bg-gold hover:text-ink"
                  >
                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setDetail(plan)}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/25 px-4 py-3.5 text-[0.95rem] font-medium text-ivory/80 transition-colors duration-200 hover:border-gold hover:text-gold"
                  >
                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </Reveal>
            ))}
          </ul>

          <aside className="hidden w-44 flex-col justify-between border-l border-ivory/12 pl-7 text-[0.7rem] leading-relaxed tracking-[0.22em] text-ivory/50 uppercase lg:flex">
            <div>
              {plans.aside.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </div>
            <div>
              {plans.asideRight.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <p className="mx-auto mt-12 max-w-[68ch] text-center text-[0.85rem] leading-relaxed text-ivory/50">
          {plans.note}
        </p>
      </div>

      {detail && <PlanDialog plan={detail} onClose={() => setDetail(null)} />}
    </section>
  );
}
