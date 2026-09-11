import { ArrowUpRight, Check } from "lucide-react";
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
    <div className={`${cardStyle[plan.id]} relative aspect-[16/10] w-full overflow-hidden rounded-md p-5`}>
      <div className="absolute inset-2 rounded-sm border border-current opacity-25" aria-hidden="true" />
      <div className="relative flex h-full flex-col items-center justify-center gap-2">
        <Monogram className="h-9 w-9 opacity-80" />
        <p className="display text-lg tracking-[0.18em]">{plan.name}</p>
        <p className="text-[0.55rem] tracking-[0.3em] uppercase opacity-70">Clube do Dono</p>
      </div>
    </div>
  );
}

export function MembershipPlans() {
  return (
    <section id="planos" className="bg-ink py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-ivory/40">04 &nbsp;/&nbsp; Planos</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="display text-[clamp(2rem,6vw,3.2rem)]">
            {plans.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">{plans.text}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-5">
            {plans.items.map((plan, i) => (
              <Reveal
                as="li"
                key={plan.id}
                delay={i * 90}
                className={`flex flex-col rounded-sm border p-5 ${
                  plan.id === "gold" ? "border-gold/60 bg-ivory/[0.04]" : "border-ivory/12"
                }`}
              >
                <MemberCard plan={plan} />

                <div className="mt-6 text-center">
                  <p className="font-serif text-4xl leading-none italic text-ivory">{plan.limit}</p>
                  <p className="mt-1 text-[0.75rem] tracking-[0.14em] text-ivory/55 uppercase">{plan.limitNote}</p>
                  <p className="mt-4 text-lg font-semibold text-gold">
                    {plan.price}
                    <span className="text-sm font-normal text-ivory/60">{plan.period}</span>
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2 border-t border-ivory/10 pt-5">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-[0.78rem] leading-relaxed text-ivory/70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>

                {plan.checkoutUrl ? (
                  <a
                    href={plan.checkoutUrl}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border border-gold px-4 py-3 text-[0.8rem] font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
                  >
                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    title="Link de assinatura pendente"
                    className="mt-6 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-sm border border-ivory/20 px-4 py-3 text-[0.8rem] font-medium text-ivory/40"
                  >
                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </Reveal>
            ))}
          </ul>

          <aside className="hidden w-40 flex-col justify-between border-l border-ivory/10 pl-6 text-[0.62rem] leading-relaxed tracking-[0.22em] text-ivory/45 uppercase lg:flex">
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

        <p className="mt-10 text-center text-[0.72rem] text-ivory/40">{plans.note}</p>
      </div>
    </section>
  );
}
