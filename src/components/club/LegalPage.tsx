import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export type LegalSection = { title: string; paragraphs: string[] };

export function LegalPage({
  title,
  intro,
  updatedAt,
  sections,
}: {
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen bg-ink text-ivory">
      <Header />
      <main className="pt-[110px] pb-24 lg:pt-[140px]">
        <div className="shell max-w-[860px]">
          <p className="eyebrow text-ivory/45">Documentos legais</p>
          <h1 className="display mt-4 text-[clamp(2.2rem,5vw,3.4rem)]">{title}</h1>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ivory/70">{intro}</p>
          <p className="mt-3 text-[0.8rem] tracking-[0.18em] text-ivory/40 uppercase">
            Última atualização: {updatedAt}
          </p>

          <div className="mt-12 space-y-10 border-t border-ivory/12 pt-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-[1.15rem] font-semibold tracking-[0.02em] text-gold">{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-3 text-[1rem] leading-relaxed text-ivory/75">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
