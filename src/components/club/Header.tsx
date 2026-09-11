import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, loginUrl, nav } from "@/content/club";
import { Wordmark } from "./Monogram";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Seção ativa
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Painel mobile: scroll lock, Escape e foco
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
        if (!focusables.length) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-ivory transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled || open
          ? "border-ivory/12 bg-ink/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md"
          : "border-ivory/10 bg-ink"
      }`}
    >
      <div className="shell flex h-[76px] items-center gap-6 lg:h-[88px]">
        <a href="#topo" className="flex min-w-0 shrink-0 items-center" aria-label={brand.name}>
          {brand.logoSrc ? (
            <img src={brand.logoSrc} alt={brand.name} width={180} height={36} className="h-9 w-auto" />
          ) : (
            <Wordmark />
          )}
        </a>

        <nav className="ml-auto hidden items-center gap-10 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              aria-current={active === item.href ? "true" : undefined}
              className="link-underline text-[0.95rem] text-ivory/75 transition-colors hover:text-gold data-[active=true]:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5 lg:ml-10">
          {loginUrl ? (
            <a
              href={loginUrl}
              className="link-underline hidden text-[0.95rem] text-ivory/75 transition-colors hover:text-gold sm:block"
            >
              Entrar
            </a>
          ) : (
            <span className="hidden text-[0.95rem] text-ivory/40 sm:block" title="Link de acesso pendente">
              Entrar
            </span>
          )}
          <a
            href="#planos"
            className="hidden items-center gap-2 rounded-sm border border-gold px-5 py-2.5 text-[0.875rem] font-medium text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Fazer parte do clube <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" ref={panelRef} className="border-t border-ivory/12 bg-ink lg:hidden">
          <nav className="shell flex flex-col py-4" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                data-active={active === item.href}
                className="border-b border-ivory/10 py-4 text-base text-ivory/85 data-[active=true]:text-gold"
              >
                {item.label}
              </a>
            ))}
            {loginUrl && (
              <a
                href={loginUrl}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/10 py-4 text-base text-ivory/85"
              >
                Entrar
              </a>
            )}
            <a
              href="#planos"
              onClick={() => setOpen(false)}
              className="mt-6 mb-4 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3.5 text-base font-medium text-ink"
            >
              Fazer parte do clube <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
