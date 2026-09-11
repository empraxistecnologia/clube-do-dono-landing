import { useMemo, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { products, type PlanId, type Product } from "@/content/club";
import { Reveal } from "./Reveal";

const TABS: { id: PlanId; label: string }[] = [
  { id: "silver", label: "Silver" },
  { id: "gold", label: "Gold" },
  { id: "diamond", label: "Diamond" },
];

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function PriceLine({ product }: { product: Product }) {
  if (product.listPrice != null && product.memberPrice != null && product.listPrice > product.memberPrice) {
    const off = Math.round((1 - product.memberPrice / product.listPrice) * 100);
    return (
      <p className="mt-1 flex flex-wrap items-baseline gap-2 text-[0.78rem]">
        <span className="text-muted-foreground line-through">{brl(product.listPrice)}</span>
        <span className="font-semibold">{brl(product.memberPrice)}</span>
        <span className="text-gold">-{off}%</span>
      </p>
    );
  }
  if (product.memberPrice != null) {
    return <p className="mt-1 text-[0.78rem] font-semibold">{brl(product.memberPrice)}</p>;
  }
  return <p className="mt-1 text-[0.78rem] text-muted-foreground">Consultar condições</p>;
}

function ProductLink({ product, className = "" }: { product: Product; className?: string }) {
  const label = (
    <>
      {product.name} <ArrowUpRight className="inline h-3.5 w-3.5" />
    </>
  );
  return product.href ? (
    <a href={product.href} className={`text-[0.85rem] font-medium hover:text-gold ${className}`}>
      {label}
    </a>
  ) : (
    <span className={`text-[0.85rem] font-medium ${className}`}>{label}</span>
  );
}

export function ProductTabs() {
  const [plan, setPlan] = useState<PlanId>("gold");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const list = useMemo(() => products.byPlan[plan], [plan]);
  const [featured, ...rest] = list;

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? TABS.length - 1
          : (index + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setPlan(TABS[next]?.id ?? "gold");
    refs.current[next]?.focus();
  };

  return (
    <section id="produtos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <p className="eyebrow text-muted-foreground">03 &nbsp;/&nbsp; Produtos</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
          <div>
            <h2 className="display text-[clamp(2rem,6vw,3.2rem)]">
              {products.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{products.text}</p>
            {products.cta.href ? (
              <a
                href={products.cta.href}
                className="mt-8 inline-flex items-center gap-2 rounded-sm border border-ink px-5 py-3 text-[0.8rem] font-medium transition-colors hover:bg-ink hover:text-ivory"
              >
                {products.cta.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span
                className="mt-8 inline-flex cursor-not-allowed items-center gap-2 rounded-sm border border-border px-5 py-3 text-[0.8rem] font-medium text-muted-foreground"
                title="Link do catálogo pendente"
              >
                {products.cta.label} <ArrowUpRight className="h-4 w-4" />
              </span>
            )}
          </div>

          <div>
            <div role="tablist" aria-label="Planos do catálogo" className="grid grid-cols-3 border border-border">
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={plan === t.id}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={plan === t.id ? 0 : -1}
                  onClick={() => setPlan(t.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`py-3 text-[0.78rem] tracking-[0.16em] uppercase transition-colors ${
                    plan === t.id ? "bg-gold text-ink" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`panel-${plan}`}
              aria-labelledby={`tab-${plan}`}
              key={plan}
              className="mt-5 grid gap-4 sm:grid-cols-2"
            >
              {featured && (
                <Reveal className="sm:row-span-2">
                  <div className="overflow-hidden rounded-sm bg-ink">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      loading="lazy"
                      width={900}
                      height={1200}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="eyebrow text-muted-foreground">{featured.category}</p>
                    <ProductLink product={featured} className="mt-1 block" />
                    <PriceLine product={featured} />
                  </div>
                </Reveal>
              )}

              {rest.map((p, i) => (
                <Reveal key={p.id} delay={80 + i * 80}>
                  <div className="overflow-hidden rounded-sm bg-ink">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={900}
                      height={600}
                      className="aspect-[3/2] w-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="eyebrow text-muted-foreground">{p.category}</p>
                    <ProductLink product={p} className="mt-1 block" />
                    <PriceLine product={p} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
