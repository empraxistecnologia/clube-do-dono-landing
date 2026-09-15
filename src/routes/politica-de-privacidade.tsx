import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Política de Privacidade — Clube do Dono";
const description =
  "Como o Clube do Dono coleta, usa, armazena e protege os dados pessoais dos membros e visitantes do site.";

export const Route = createFileRoute("/politica-de-privacidade")({
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
      title="Política de Privacidade"
      intro="Esta política explica quais dados pessoais o Clube do Dono coleta, como eles são utilizados e quais são os seus direitos como titular, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. Quais dados coletamos",
          paragraphs: [
            "Coletamos os dados que você informa ao criar uma conta, contratar um plano ou entrar em contato conosco, como nome, e-mail, telefone, documento de identificação e dados de cobrança.",
            "Também coletamos dados de navegação, como páginas acessadas, tipo de dispositivo e endereço IP, por meio de cookies e tecnologias semelhantes.",
          ],
        },
        {
          title: "2. Como utilizamos os dados",
          paragraphs: [
            "Utilizamos os dados para criar e manter sua conta, processar pagamentos e assinaturas, liberar os benefícios do plano contratado, prestar atendimento e enviar comunicações sobre o clube.",
            "Podemos usar dados de navegação de forma agregada para melhorar o site e entender quais conteúdos são mais relevantes para os membros.",
          ],
        },
        {
          title: "3. Compartilhamento",
          paragraphs: [
            "Não vendemos dados pessoais. Compartilhamos informações apenas com prestadores de serviço necessários à operação do clube, como meios de pagamento, plataformas de hospedagem e ferramentas de atendimento, e quando houver obrigação legal ou determinação judicial.",
          ],
        },
        {
          title: "4. Armazenamento e segurança",
          paragraphs: [
            "Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, perda ou uso indevido. Os dados são mantidos pelo tempo necessário ao cumprimento das finalidades desta política e das obrigações legais aplicáveis.",
          ],
        },
        {
          title: "5. Seus direitos",
          paragraphs: [
            "Você pode solicitar a qualquer momento a confirmação do tratamento, o acesso, a correção, a portabilidade, a anonimização ou a exclusão dos seus dados, além de revogar consentimentos.",
            "Para exercer esses direitos, entre em contato pelos canais oficiais de atendimento do Clube do Dono.",
          ],
        },
        {
          title: "6. Alterações desta política",
          paragraphs: [
            "Esta política pode ser atualizada para refletir mudanças legais ou operacionais. A data da última atualização está indicada no topo desta página.",
          ],
        },
      ]}
    />
  );
}
