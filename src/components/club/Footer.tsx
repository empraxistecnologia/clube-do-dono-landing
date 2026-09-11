import { brand, footer, loginUrl, nav } from "@/content/club";
import { Wordmark } from "./Monogram";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="shell flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between">
        <a href="#topo" aria-label={brand.name} className="flex items-center">
          {brand.logoSrc ? (
            <img src={brand.logoSrc} alt={brand.name} width={180} height={36} className="h-9 w-auto" />
          ) : (
            <Wordmark />
          )}
        </a>

        <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
              {item.label}
            </a>
          ))}
          {loginUrl && (
            <a href={loginUrl} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
              Entrar
            </a>
          )}
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {footer.social.map((s) => (
            <a key={s.href} href={s.href} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
              {s.label}
            </a>
          ))}
          <p className="text-[0.7rem] leading-relaxed tracking-[0.22em] text-ivory/45 uppercase">
            {footer.tagline.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-wrap items-center justify-between gap-3 py-6 text-[0.8rem] text-ivory/45">
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {footer.legal.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-gold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
