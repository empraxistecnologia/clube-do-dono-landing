import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
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
    const save = product.listPrice - product.memberPrice;
    return (
      <p className="mt-2 flex flex-wrap items-baseline gap-2 text-[0.9rem]">
        <span className="text-muted-foreground line-through">{brl(product.listPrice)}</span>
        <span className="font-semibold">{brl(product.memberPrice)}</span>
        <span className="text-gold">
          −{off}% · economia de {brl(save)}
        </span>
      </p>
    );
  }
  if (product.memberPrice != null) {
    return <p className="mt-2 text-[0.9rem] font-semibold">{brl(product.memberPrice)}</p>;
  }
  return <p className="mt-2 text-[0.9rem] text-muted-foreground">Consultar condições</p>;
}

function ProductLink({ product, className = "" }: { product: Product; className?: string }) {
  const label = (
    <>
      {product.name} <ArrowUpRight className="inline h-4 w-4" />
    </>
  );
  return product.href ? (
    <a href={product.href} className={`text-[1.0625rem] font-medium transition-colors hover:text-gold ${className}`}>
      {label}
    </a>
  ) : (
    <span className={`text-[1.0625rem] font-medium ${className}`}>{label}</span>
  );
}

function CatalogDialog({
  plan,
  list,
  onClose,
}: {
  plan: PlanId;
  list: Product[];
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const label = TABS.find((t) => t.id === plan)?.label ?? "";

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-ink/70 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`Produtos do plano ${label}`}
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full max-w-lg flex-col overflow-y-auto bg-background p-6 sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow text-muted-foreground">Plano {label}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Produtos e condições</h3>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">{products.planNote[plan]}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-8 space-y-6">
          {list.map((p) => (
            <li key={p.id} className="flex gap-4 border-b border-border pb-6">
              <img
                src={p.image}
                alt={`${p.name} — ${p.category}`}
                loading="lazy"
                className="h-24 w-24 shrink-0 rounded-sm object-cover"
              />
              <div className="min-w-0">
                <p className="eyebrow text-muted-foreground">{p.category}</p>
                <ProductLink product={p} className="mt-1 block" />
                <PriceLine product={p} />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[0.85rem] leading-relaxed text-muted-foreground">
          Os valores e a disponibilidade de cada item são confirmados na plataforma do clube.
        </p>
      </div>
    </div>
  );
}

export function ProductTabs() {
  const [plan, setPlan] = useState<PlanId>("gold");
  const [openCatalog, setOpenCatalog] = useState(false);
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
    <section id="produtos" className="bg-background py-24 sm:py-32">
      <div className="shell">
        <p className="eyebrow border-b border-border pb-4 text-muted-foreground">03 &nbsp;/&nbsp; Produtos</p>

        <div className="mx-auto mt-16 flex max-w-[68rem] flex-col items-center text-center">
          <h2 className="display text-[clamp(2.8rem,6.4vw,5rem)]">
            {products.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-7 max-w-[60ch] text-[1.125rem] leading-relaxed text-muted-foreground">
            {products.text}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {products.cta.href ? (
              <a
                href={products.cta.href}
                className="btn-shine inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ivory"
              >
                {products.cta.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setOpenCatalog(true)}
                className="btn-shine inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ivory"
              >
                {products.cta.label} <ArrowUpRight className="h-4 w-4" />
              </button>
            )}
            <a
              href="#planos"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-gold"
            >
              Fazer parte do clube <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16">
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
                  className={`relative py-4 text-[0.9rem] tracking-[0.16em] uppercase transition-colors ${
                    plan === t.id ? "text-ink" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {t.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold transition-transform duration-300 ${
                      plan === t.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            <p className="mt-4 text-[0.85rem] text-muted-foreground">{products.planNote[plan]}</p>

            <div
              role="tabpanel"
              id={`panel-${plan}`}
              aria-labelledby={`tab-${plan}`}
              key={plan}
              className="mt-6 grid gap-6 sm:grid-cols-2"
            >
              {featured ? (
                <>
                  <Reveal className="sm:row-span-2">
                    <div className="group overflow-hidden rounded-sm bg-ink">
                      <img
                        src={featured.image}
                        alt={featured.name}
                        loading="lazy"
                        width={900}
                        height={1200}
                        className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="eyebrow text-muted-foreground">{featured.category}</p>
                      <ProductLink product={featured} className="mt-1.5 block" />
                      <PriceLine product={featured} />
                    </div>
                  </Reveal>

                  {rest.map((p, i) => (
                    <Reveal key={p.id} delay={80 + i * 80}>
                      <div className="group overflow-hidden rounded-sm bg-ink">
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          width={900}
                          height={600}
                          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="eyebrow text-muted-foreground">{p.category}</p>
                        <ProductLink product={p} className="mt-1.5 block" />
                        <PriceLine product={p} />
                      </div>
                    </Reveal>
                  ))}
                </>
              ) : (
                <p className="rounded-sm border border-border p-8 text-[0.95rem] text-muted-foreground sm:col-span-2">
                  Ainda não há produtos cadastrados para este plano.
                </p>
              )}
            </div>
          </div>
      </div>

      {openCatalog && <CatalogDialog plan={plan} list={list} onClose={() => setOpenCatalog(false)} />}
    </section>
  );
}
