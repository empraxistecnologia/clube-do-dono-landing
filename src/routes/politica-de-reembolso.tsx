import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Política de Reembolso — Clube do Dono";
const description =
  "Arrependimento em 7 dias, cancelamento de planos semestral e anual, multa de 20% e devolução proporcional no Clube do Dono.";

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
      intro="Esta política descreve como funcionam o arrependimento, o cancelamento e a devolução de valores das assinaturas do Clube do Dono, de acordo com o Código de Defesa do Consumidor (Lei nº 8.078/1990) e o Código Civil."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. Planos abrangidos",
          paragraphs: [
            "Esta política se aplica às assinaturas do Clube do Dono contratadas pelo site, nas modalidades de pagamento recorrente e de pagamento antecipado por período (semestral e anual).",
            "A assinatura dá acesso a benefícios de uso contínuo, como descontos em produtos, condições em eventos, cursos e mentorias, conteúdos e comunidade. Esses benefícios ficam disponíveis durante todo o período contratado.",
          ],
        },
        {
          title: "2. Direito de arrependimento — 7 dias",
          paragraphs: [
            "Conforme o artigo 49 do Código de Defesa do Consumidor, você pode desistir da contratação em até 7 (sete) dias corridos contados da data do pagamento, sem precisar justificar o motivo.",
            "Nesse prazo, a devolução é de 100% do valor pago, e o acesso aos benefícios é encerrado imediatamente após o pedido.",
            "Se, dentro desses 7 dias, você já tiver utilizado benefícios de valor econômico imediato — por exemplo, compras com desconto de membro, inscrição em evento com condição exclusiva ou acesso liberado a curso — o valor correspondente à vantagem obtida poderá ser descontado do reembolso, para evitar enriquecimento sem causa.",
          ],
        },
        {
          title: "3. Cancelamento após os 7 dias — planos semestral e anual",
          paragraphs: [
            "Depois do prazo de arrependimento, o contrato é válido pelo período contratado. Você pode cancelar a qualquer momento, e nesse caso aplicamos a regra abaixo:",
            "a) o período já utilizado não é devolvido, pois os benefícios estiveram disponíveis e foram prestados;",
            "b) sobre o valor proporcional ao período restante, é aplicada uma multa contratual de 20% (vinte por cento), correspondente aos custos administrativos e à quebra antecipada do contrato;",
            "c) o saldo restante é devolvido a você.",
            "Exemplo prático: plano anual de R$ 1.200,00 (R$ 100,00 por mês), cancelado após 4 meses de uso. Período utilizado: R$ 400,00 (não devolvido). Período restante: R$ 800,00. Multa de 20% sobre R$ 800,00 = R$ 160,00. Valor devolvido ao membro: R$ 640,00.",
            "Alternativa à devolução: se preferir, em vez de receber o reembolso você pode optar por manter o acesso ativo até o fim do período já pago, sem multa e sem renovação automática.",
          ],
        },
        {
          title: "4. Cancelamento de planos mensais",
          paragraphs: [
            "Nos planos com cobrança mensal, o cancelamento interrompe as cobranças seguintes. O mês em curso permanece ativo até o fim do ciclo já pago, sem devolução proporcional e sem multa.",
          ],
        },
        {
          title: "5. Benefícios já utilizados",
          paragraphs: [
            "Benefícios já usufruídos no período — compras com preço de membro, participação em eventos, cursos, mentorias e workshops — são considerados prestados e entram no cálculo do reembolso.",
            "Produtos adquiridos com desconto de membro seguem as regras próprias de troca e devolução da compra, e não se confundem com a devolução da assinatura.",
          ],
        },
        {
          title: "6. Prazos e forma de devolução",
          paragraphs: [
            "Pedidos de reembolso são analisados em até 7 (sete) dias úteis após a solicitação.",
            "A devolução é feita pelo mesmo meio de pagamento utilizado na compra. Em cartão de crédito, o estorno pode aparecer em até duas faturas seguintes, conforme o prazo da operadora. Em Pix ou boleto, a devolução ocorre em até 10 (dez) dias úteis após a aprovação, na conta indicada pelo titular da assinatura.",
          ],
        },
        {
          title: "7. Como solicitar",
          paragraphs: [
            "Solicite o cancelamento ou o reembolso pelos canais oficiais de atendimento do Clube do Dono, informando o nome completo, o e-mail cadastrado, o plano contratado e a data da compra.",
            "Confirmamos o recebimento do pedido e informamos o valor calculado antes de processar a devolução.",
          ],
        },
        {
          title: "8. Casos não cobertos",
          paragraphs: [
            "Não há devolução em caso de encerramento da conta por violação dos Termos de Uso, uso fraudulento dos benefícios, revenda não autorizada de produtos ou compartilhamento indevido do acesso.",
            "Nenhuma cláusula desta política afasta os direitos garantidos ao consumidor pela legislação brasileira.",
          ],
        },
      ]}
    />
  );
}
