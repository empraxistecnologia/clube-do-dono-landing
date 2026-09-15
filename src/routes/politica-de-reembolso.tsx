import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";
import { company } from "@/content/company";

const title = "Política de Reembolso — Clube do Dono";
const description =
  "Arrependimento em 7 dias, cancelamento de planos mensal, semestral e anual e cálculo do Ajuste Proporcional de Benefícios no Clube do Dono.";

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
      title="Política de Reembolso, Cancelamento e Benefícios"
      intro="Esta política regula o cancelamento das assinaturas do Clube do Dono e a apuração de eventual reembolso, sem limitar direitos obrigatórios previstos no Código de Defesa do Consumidor (Lei nº 8.078/1990) e nas demais leis aplicáveis."
      updatedAt={company.updatedAt}
      sections={[
        {
          title: "1. Direito de arrependimento — 7 dias",
          paragraphs: [
            "Quando aplicável o art. 49 do Código de Defesa do Consumidor, o consumidor pode desistir da contratação feita fora do estabelecimento comercial, inclusive pela internet, no prazo de 7 (sete) dias. Nessa hipótese, os valores pagos pela assinatura são restituídos integralmente.",
            "O exercício desse direito não é condicionado ao pagamento de multa nem ao Ajuste Proporcional de Benefícios previsto para a rescisão comum.",
            "Compras de produtos realizadas separadamente nesse período têm tratamento próprio, conforme a legislação e a política de devolução aplicável ao pedido. O cancelamento da assinatura não transforma automaticamente o desconto de uma compra já concluída em dívida do consumidor.",
          ],
        },
        {
          title: "2. Planos mensais",
          paragraphs: [
            "Após o prazo legal de arrependimento, o cancelamento do plano mensal interrompe a renovação futura e o acesso permanece ativo até o último dia já pago.",
            "Não há reembolso proporcional do período mensal iniciado, salvo previsão legal, falha na prestação ou condição comercial expressa mais favorável.",
          ],
        },
        {
          title: "3. Planos semestrais e anuais — duas opções",
          paragraphs: [
            "Após o prazo legal de arrependimento, o membro de plano semestral ou anual pode escolher entre duas alternativas:",
            "A) Cancelar apenas a renovação: mantém a assinatura e os benefícios até o fim do período contratado, sem reembolso e sem penalidade adicional.",
            "B) Solicitar a rescisão antecipada, com encerramento do acesso antes do fim do período: pode haver restituição do saldo não utilizado, descontado o Ajuste Proporcional de Benefícios, conforme a fórmula abaixo.",
          ],
        },
        {
          title: "4. Fórmula da rescisão antecipada",
          paragraphs: [
            "A fórmula reflete a vantagem econômica concedida em troca da contratação por prazo maior e é exibida em linguagem resumida no checkout.",
            "P = valor efetivamente pago pela assinatura do período corrente, excluídos pedidos de produtos. T = total de dias do período contratado. U = dias já transcorridos até a rescisão.",
            "r = (T − U) / T (proporção restante). S = P × r (saldo-base não utilizado).",
            "Bp = benefícios de preço em produtos já usufruídos, somando, em compras concluídas e não devolvidas, a diferença entre o preço de referência válido para não membro e o preço efetivamente pago.",
            "Ba = benefício de preço da própria assinatura: quando houver plano mensal comparável, a diferença positiva entre o preço mensal público que incidiria no período já usado e a parcela econômica correspondente do plano de prazo maior. O mesmo benefício nunca é contado duas vezes.",
            "B = Bp + Ba (benefício econômico mensurável). A = B × r (Ajuste Proporcional de Benefícios). R = maior valor entre R$ 0,00 e (S − A) — o reembolso final.",
            "Para planos de consumo, o Ajuste Proporcional de Benefícios é limitado ao valor que seria restituído: o resultado não gera saldo negativo nem cobrança adicional apenas pela rescisão antecipada.",
          ],
        },
        {
          title: "5. Exemplo 1 — ainda há reembolso",
          paragraphs: [
            "Assinatura anual paga: R$ 1.200,00, com rescisão após 4 meses. Proporção restante: 8/12. Saldo-base: R$ 800,00. Benefícios mensuráveis já utilizados: R$ 600,00. Ajuste proporcional: R$ 600,00 × 8/12 = R$ 400,00. Reembolso: R$ 800,00 − R$ 400,00 = R$ 400,00.",
          ],
        },
        {
          title: "6. Exemplo 2 — os benefícios absorvem o saldo",
          paragraphs: [
            "Assinatura anual paga: R$ 1.200,00, com rescisão após 4 meses. Saldo-base: R$ 800,00. Benefícios mensuráveis: R$ 1.500,00. Ajuste proporcional: R$ 1.500,00 × 8/12 = R$ 1.000,00. Como o ajuste supera o saldo-base, o reembolso é R$ 0,00 — e não surge dívida adicional para o consumidor por causa desse cálculo.",
          ],
        },
        {
          title: "7. Como calculamos o benefício utilizado",
          paragraphs: [
            "Conta apenas a vantagem exclusiva decorrente do plano e efetivamente utilizada em compra concluída.",
            "Não conta desconto disponível ao público em geral, cupom público, promoção geral ou diferença de preço sem referência objetiva.",
            "Compras canceladas, integralmente devolvidas ou estornadas deixam de compor o benefício após a conclusão do respectivo reembolso.",
            "Registramos o preço de referência válido no momento do pedido, o preço de membro, o valor economizado e o plano responsável pelo benefício, para permitir auditoria.",
          ],
        },
        {
          title: "8. Quando o ajuste não se aplica",
          paragraphs: [
            "O Ajuste Proporcional de Benefícios não é utilizado para reduzir direitos legais de arrependimento, reembolso por cobrança indevida, falha relevante imputável ao Clube, vício do serviço ou outras hipóteses em que a legislação imponha solução mais favorável ao consumidor.",
          ],
        },
        {
          title: "9. Reembolsos de produtos",
          paragraphs: [
            "Pedidos de produtos são juridicamente distintos da assinatura. Compras pela internet observam o direito de arrependimento quando aplicável e as regras legais sobre vício, garantia e devolução, inclusive as alternativas de substituição, restituição ou abatimento previstas no CDC.",
            "Os prazos legais de reclamação e as demais garantias aplicáveis não são reduzidos por esta política.",
          ],
        },
        {
          title: "10. Prazo do estorno",
          paragraphs: [
            "Nos casos de direito de arrependimento, a devolução é providenciada sem retenção indevida e comunicada ao meio de pagamento.",
            "Nos demais reembolsos aprovados, buscamos iniciar o processamento em até 10 (dez) dias úteis após a conclusão da análise e a confirmação dos dados necessários. O prazo de crédito na fatura ou conta depende da instituição financeira, bandeira, adquirente ou meio de pagamento.",
          ],
        },
        {
          title: "11. Fraude, abuso e revenda não autorizada",
          paragraphs: [
            "Suspeitas de fraude, manipulação de benefícios, compartilhamento de conta, revenda de credenciais ou outros abusos podem motivar análise e suspensão preventiva proporcional. A apuração de fraude não elimina direitos legais indisponíveis.",
            "O plano Revendedor permite apenas a revenda regular de produtos, quando admitida pelas regras comerciais; não permite revender a assinatura nem o acesso a benefícios.",
          ],
        },
        {
          title: "12. Canal para cancelamento e reembolso",
          paragraphs: [
            `Solicitações podem ser feitas pela área do usuário ou pelo e-mail ${company.supportEmail}, e também pelo WhatsApp ${company.whatsapp}.`,
            "Confirmamos o recebimento da solicitação por meio eletrônico e apresentamos a memória de cálculo sempre que houver reembolso com Ajuste Proporcional de Benefícios.",
          ],
        },
        {
          title: "13. Identificação do fornecedor",
          paragraphs: [
            `${company.legalName}, CNPJ ${company.cnpj}, com endereço em ${company.address}.`,
          ],
        },
      ]}
    />
  );
}
