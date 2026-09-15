import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";
import { company } from "@/content/company";

const title = "Política de Cookies — Clube do Dono";
const description =
  "Categorias de cookies usadas pelo Clube do Dono, base legal de cada uma, gerenciamento de preferências e cookies de terceiros.";

export const Route = createFileRoute("/politica-de-cookies")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Esta política explica como o Clube do Dono utiliza cookies e tecnologias semelhantes para operar o site, preservar a segurança, lembrar preferências, medir desempenho e, quando autorizado, personalizar comunicação e publicidade."
      updatedAt={company.updatedAt}
      sections={[
        {
          title: "1. O que são cookies",
          paragraphs: [
            "Cookies são pequenos arquivos ou identificadores armazenados ou acessados no dispositivo do usuário. Alguns são necessários para o funcionamento do site; outros são utilizados para analytics, funcionalidades adicionais ou publicidade.",
          ],
        },
        {
          title: "2. Categorias utilizadas",
          paragraphs: [
            "Necessários: login, segurança, carrinho, sessão, preferências indispensáveis e prevenção a fraude. São ativados por serem necessários à operação e à prestação do serviço, e duram a sessão ou o prazo tecnicamente necessário.",
            "Funcionalidade: lembram preferências opcionais e melhoram recursos. Dependem de consentimento quando exigido e podem ser gerenciados pelo usuário.",
            "Analytics e desempenho: ajudam a entender o uso, medir páginas e corrigir problemas. Não são ativados antes do consentimento quando dependerem dessa base legal.",
            "Publicidade e marketing: mensuração de campanhas, segmentação e anúncios personalizados. Dependem de consentimento e permanecem desativados por padrão até a escolha do usuário.",
          ],
        },
        {
          title: "3. Banner e gerenciamento de preferências",
          paragraphs: [
            "O banner de cookies oferece, com destaque equivalente, as opções “Aceitar todos”, “Rejeitar cookies não necessários” e “Gerenciar preferências”.",
            "Cookies não necessários baseados em consentimento permanecem desativados até uma ação afirmativa do usuário. O consentimento pode ser revogado ou alterado a qualquer momento pelo painel de preferências ou pelas configurações do navegador.",
          ],
        },
        {
          title: "4. Cookies de terceiros",
          paragraphs: [
            "Serviços externos incorporados ao site podem instalar cookies próprios. A lista de fornecedores, nomes de cookies, finalidades e prazos é mantida atualizada no painel de preferências, considerando apenas as ferramentas efetivamente instaladas.",
          ],
        },
        {
          title: "5. Contato",
          paragraphs: [
            `Dúvidas sobre cookies e privacidade podem ser encaminhadas para ${company.privacyEmail}.`,
          ],
        },
      ]}
    />
  );
}
