import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, loginUrl, nav } from "@/content/club";
import { Wordmark } from "./Monogram";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-500 ${
        scrolled || open ? "bg-ink/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-5 sm:h-[72px] sm:px-8">
        <a href="#topo" className="flex min-w-0 items-center" aria-label={brand.name}>
          {brand.logoSrc ? (
            <img src={brand.logoSrc} alt={brand.name} width={140} height={28} className="h-7 w-auto" />
          ) : (
            <Wordmark />
          )}
        </a>

        <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] text-ivory/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-8">
          {loginUrl ? (
            <a
              href={loginUrl}
              className="hidden text-[0.8rem] text-ivory/70 transition-colors hover:text-gold sm:block"
            >
              Entrar
            </a>
          ) : (
            <span className="hidden text-[0.8rem] text-ivory/35 sm:block" title="Link de acesso pendente">
              Entrar
            </span>
          )}
          <a
            href="#planos"
            className="hidden items-center gap-1.5 rounded-sm border border-gold px-4 py-2 text-[0.75rem] font-medium text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Quero fazer parte <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ivory/10 bg-ink lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-3" aria-label="Menu mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/10 py-4 text-base text-ivory/85"
              >
                {item.label}
              </a>
            ))}
            {loginUrl && (
              <a href={loginUrl} className="border-b border-ivory/10 py-4 text-base text-ivory/85">
                Entrar
              </a>
            )}
            <a
              href="#planos"
              onClick={() => setOpen(false)}
              className="mt-5 mb-4 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3.5 text-sm font-medium text-ink"
            >
              Quero fazer parte <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
