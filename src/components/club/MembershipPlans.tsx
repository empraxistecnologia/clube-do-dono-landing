import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Gift, X } from "lucide-react";
import { plans, type Plan } from "@/content/club";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

const cardStyle: Record<Plan["id"], string> = {
  silver: "card-silver",
  gold: "card-gold",
  diamond: "card-diamond",
};

function MemberCard({ plan, className = "" }: { plan: Plan; className?: string }) {
  return (
    <div
      className={`member-card sheen relative aspect-[1.62/1] w-full overflow-hidden rounded-2xl p-4 ${cardStyle[plan.id]} ${className}`}
    >
      <div className="absolute inset-[3px] rounded-xl border border-current opacity-25" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="h-6 w-8 rounded-[4px] border border-current opacity-60" aria-hidden="true">
            <span className="block h-1/2 w-full border-b border-current opacity-70" />
          </span>
          <span className="text-[0.55rem] font-semibold tracking-[0.28em] uppercase opacity-70">
            Membro
          </span>
        </div>

        <div className="flex flex-col items-center -mt-1">
          <Monogram className="h-7 w-7 opacity-85" />
          <p className="mt-1.5 text-[0.95rem] font-semibold tracking-[0.34em] uppercase">{plan.name}</p>
        </div>

        <p className="text-center text-[0.5rem] tracking-[0.3em] uppercase opacity-65">
          Clube do Dono
        </p>
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

        <p className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 border-y border-ivory/12 py-4 text-[0.7rem] tracking-[0.22em] text-ivory/45 uppercase">
          {[...plans.aside, ...plans.asideRight].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <ul className="mx-auto mt-14 grid max-w-[1180px] gap-6 sm:grid-cols-[1fr_1.12fr_1fr] sm:items-center">
          {plans.items.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.id}
              delay={i * 90}
              className={`plan-card sheen relative flex flex-col overflow-hidden rounded-3xl border ${
                plan.featured
                  ? "border-gold/60 bg-gradient-to-b from-gold/[0.12] via-ivory/[0.04] to-transparent p-7 shadow-[0_30px_70px_-45px_rgba(212,175,55,0.9)] sm:p-8"
                  : "border-ivory/12 bg-ivory/[0.02] p-6 sm:my-4"
              }`}
            >
              {plan.featured && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[74px] top-[30px] w-[230px] rotate-45 bg-gold py-1.5 text-center text-[0.58rem] font-semibold tracking-[0.1em] text-ink uppercase shadow-[0_8px_18px_-10px_rgba(0,0,0,0.9)]"
                >
                  {plan.tagline}
                </span>
              )}

              <div className="text-center">
                <MemberCard plan={plan} />
                <p className="mt-3 text-[0.85rem] text-ivory/55">
                  {plan.featured ? "Mais escolhido pelos membros" : plan.tagline}
                </p>
              </div>

              <div className="mt-5 text-center">
                <p
                  className={`display leading-none text-gold ${
                    plan.featured ? "text-[clamp(2.6rem,6vw,4rem)]" : "text-[clamp(2.2rem,5vw,3.2rem)]"
                  }`}
                >
                  {plan.limit}
                </p>
                <p className="mt-1.5 text-[0.75rem] tracking-[0.16em] text-ivory/55 uppercase">
                  {plan.limitNote}
                </p>
              </div>

              <p className="mt-5 flex items-center justify-center gap-2.5 rounded-2xl border border-gold/25 bg-gold/[0.07] px-3.5 py-2.5 text-center text-[0.85rem] font-semibold text-ivory">
                <Gift className="h-4 w-4 shrink-0 text-gold" />
                {plan.highlight}
              </p>

              <ul className="mt-5 flex-1 space-y-2">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[0.9rem] leading-snug text-ivory/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-ivory/12 pt-5 text-center text-2xl font-semibold text-gold">
                {plan.price}
                <span className="text-base font-normal text-ivory/60">{plan.period}</span>
              </p>

              {plan.checkoutUrl ? (
                <a
                  href={plan.checkoutUrl}
                  className={`btn-shine mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold ${
                    plan.featured
                      ? "bg-gold text-ink ring-1 ring-gold hover:bg-ink hover:text-gold"
                      : "border border-gold/60 text-gold hover:bg-gold hover:text-ink"
                  }`}
                >
                  {plan.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setDetail(plan)}
                  className="btn-shine mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-5 py-3 text-[0.95rem] font-semibold text-ivory/80 hover:border-gold hover:text-gold"
                >
                  {plan.cta} <ArrowUpRight className="h-4 w-4" />
                </button>
              )}
            </Reveal>
          ))}
        </ul>


        <p className="mx-auto mt-12 max-w-[68ch] text-center text-[0.85rem] leading-relaxed text-ivory/50">
          {plans.note}
        </p>
      </div>

      {detail && <PlanDialog plan={detail} onClose={() => setDetail(null)} />}
    </section>
  );
}
