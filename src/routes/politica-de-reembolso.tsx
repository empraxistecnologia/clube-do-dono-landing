import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Política de Reembolso — Clube do Dono";
const description =
  "Condições de arrependimento, cancelamento e reembolso das assinaturas do Clube do Dono.";

export const Route = createFileRoute("/politica-de-reembolso")({
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
      title="Política de Reembolso"
      intro="Esta política descreve as condições para cancelamento e devolução de valores pagos nas assinaturas do Clube do Dono."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. Direito de arrependimento",
          paragraphs: [
            "Conforme o artigo 49 do Código de Defesa do Consumidor, você pode desistir da contratação em até 7 (sete) dias corridos a partir do pagamento, com devolução integral do valor pago.",
          ],
        },
        {
          title: "2. Cancelamento após o período de arrependimento",
          paragraphs: [
            "Após os 7 dias, o cancelamento interrompe as cobranças futuras. O período já pago permanece ativo até o fim do ciclo, sem devolução proporcional, salvo disposição legal em contrário.",
          ],
        },
        {
          title: "3. Benefícios já utilizados",
          paragraphs: [
            "Benefícios já usufruídos no período, como compras com desconto, participação em eventos ou acesso a conteúdos, podem ser considerados na análise do pedido de reembolso.",
          ],
        },
        {
          title: "4. Prazos e forma de devolução",
          paragraphs: [
            "Reembolsos aprovados são devolvidos pelo mesmo meio de pagamento utilizado na compra. O prazo de crédito depende da operadora do cartão ou da instituição financeira.",
          ],
        },
        {
          title: "5. Como solicitar",
          paragraphs: [
            "Solicite o cancelamento ou o reembolso pelos canais oficiais de atendimento do Clube do Dono, informando o e-mail cadastrado e o plano contratado.",
          ],
        },
      ]}
    />
  );
}
