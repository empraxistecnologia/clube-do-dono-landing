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
    return (
      <p className="mt-2 flex flex-wrap items-baseline gap-2 text-[0.9rem]">
        <span className="text-muted-foreground line-through">{brl(product.listPrice)}</span>
        <span className="text-[1.05rem] font-semibold text-gold">{brl(product.memberPrice)}</span>
        <span className="text-muted-foreground">preço de membro</span>
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

  const trackRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const read = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);

  useEffect(() => {
    setPage(0);
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [plan]);

  const pageCount = Math.max(1, Math.ceil(list.length / perView));

  const goToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setPage(i);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const next = Math.round(el.scrollLeft / el.clientWidth);
    setPage((cur) => (cur === next ? cur : next));
  };

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

            <div role="tabpanel" id={`panel-${plan}`} aria-labelledby={`tab-${plan}`} key={plan} className="mt-8">
              {list.length ? (
                <>
                  <div
                    ref={trackRef}
                    onScroll={onScroll}
                    className="-mx-2 flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {list.map((p) => (
                      <article
                        key={p.id}
                        className="w-full shrink-0 snap-start px-2 sm:w-1/2 lg:w-1/3"
                      >
                        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                          <div className="overflow-hidden bg-ivory">
                            <img
                              src={p.image}
                              alt={`${p.name} — ${p.category}`}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-6">
                            <p className="eyebrow text-muted-foreground">{p.category}</p>
                            <ProductLink product={p} className="mt-2 block" />
                            <div className="mt-auto pt-3">
                              <PriceLine product={p} />
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {pageCount > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-3">
                      {Array.from({ length: pageCount }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Ver produtos ${i * perView + 1} a ${Math.min((i + 1) * perView, list.length)}`}
                          aria-current={i === page}
                          onClick={() => goToPage(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            i === page ? "w-8 bg-gold" : "w-2.5 bg-border hover:bg-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="rounded-sm border border-border p-8 text-[0.95rem] text-muted-foreground">
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
