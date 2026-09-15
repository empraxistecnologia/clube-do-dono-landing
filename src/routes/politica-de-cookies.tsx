import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Política de Cookies — Clube do Dono";
const description =
  "Quais cookies o site do Clube do Dono utiliza, para que servem e como você pode gerenciá-los no navegador.";

export const Route = createFileRoute("/politica-de-cookies")({
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
      intro="Usamos cookies e tecnologias semelhantes para manter o site funcionando, lembrar preferências e entender como os visitantes navegam pelas páginas."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. O que são cookies",
          paragraphs: [
            "Cookies são pequenos arquivos gravados no seu navegador quando você acessa um site. Eles permitem reconhecer o dispositivo em visitas seguintes e guardar informações úteis à navegação.",
          ],
        },
        {
          title: "2. Tipos de cookies que utilizamos",
          paragraphs: [
            "Cookies necessários: essenciais para o funcionamento do site, login e segurança. Sem eles, áreas restritas e o processo de assinatura não funcionam corretamente.",
            "Cookies de desempenho e análise: ajudam a entender quais páginas são mais acessadas e como melhorar a experiência.",
            "Cookies de preferências: guardam escolhas feitas por você, como plano visualizado ou seção de produtos selecionada.",
          ],
        },
        {
          title: "3. Como gerenciar",
          paragraphs: [
            "Você pode bloquear ou apagar cookies nas configurações do seu navegador. O bloqueio de cookies necessários pode limitar funcionalidades do site, como o acesso à sua conta.",
          ],
        },
        {
          title: "4. Atualizações",
          paragraphs: [
            "Esta política pode ser revisada sempre que houver mudança nas tecnologias utilizadas pelo site. A data da última atualização está indicada acima.",
          ],
        },
      ]}
    />
  );
}
