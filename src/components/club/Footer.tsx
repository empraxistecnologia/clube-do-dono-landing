import { Facebook, Instagram } from "lucide-react";
import { brand, footer, loginUrl, whatsappUrl } from "@/content/club";
import { Wordmark } from "./Monogram";

const socialIcon = {
  Instagram,
  Facebook,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const social = footer.social.filter((s): s is { label: keyof typeof socialIcon; href: string } =>
    Boolean(s.href),
  );

  return (
    <footer className="border-t border-ivory/10 bg-ink text-ivory">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
        <div>
          <a href="/#topo" aria-label={brand.name} className="inline-flex items-center">
            {brand.logoSrc ? (
              <img src={brand.logoSrc} alt={brand.name} width={64} height={64} className="h-14 w-auto" />
            ) : (
              <Wordmark />
            )}
          </a>
          <p className="mt-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-ivory/65">{footer.about}</p>

          {social.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <nav aria-label="Clube">
          <p className="text-[0.7rem] tracking-[0.24em] text-ivory/45 uppercase">Clube</p>
          <ul className="mt-5 space-y-3">
            {footer.clubLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
            {loginUrl && (
              <li>
                <a href={loginUrl} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
                  Entrar
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <nav aria-label="Legal">
            <p className="text-[0.7rem] tracking-[0.24em] text-ivory/45 uppercase">Legal</p>
            <ul className="mt-5 space-y-3">
              {footer.legal.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[0.95rem] text-ivory/70 transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-8 text-[0.7rem] tracking-[0.24em] text-ivory/45 uppercase">Atendimento</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-[0.95rem] text-ivory/70 transition-colors hover:text-gold"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col gap-3 py-6 text-[0.8rem] text-ivory/45 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <p className="sm:ml-auto sm:text-right">
            Site desenvolvido por{" "}
            <a
              href="https://empraxis.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Empraxis Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
