import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";
import { company } from "@/content/company";

const title = "Termos de Uso — Clube do Dono";
const description =
  "Regras do Clube do Dono: objeto, planos e descontos máximos, conta, pagamento, renovação, cancelamento, condutas proibidas e foro.";

export const Route = createFileRoute("/termos-de-uso")({
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
      title="Termos de Uso e Regras do Clube"
      intro={`Ao criar uma conta, contratar um plano ou utilizar benefícios do Clube do Dono, operado por ${company.legalName} (CNPJ ${company.cnpj}), você declara que leu e concorda com estes Termos, com a Política de Privacidade, a Política de Cookies e a Política de Reembolso, sem prejuízo dos direitos previstos em lei.`}
      updatedAt={company.updatedAt}
      sections={[
        {
          title: "1. Objeto do Clube",
          paragraphs: [
            "O Clube do Dono é um programa de assinatura que concede acesso a preços, descontos, condições comerciais, campanhas e benefícios exclusivos em produtos e serviços participantes, conforme o plano ativo, o estoque, as regras de campanha e as condições exibidas no momento da compra.",
          ],
        },
        {
          title: "2. Regras dos planos",
          paragraphs: [
            "Silver: até 15% de desconto. Percentual máximo; o desconto real varia por produto.",
            "Gold: até 40% de desconto. Percentual máximo; o desconto real varia por produto.",
            "Revendedor: até 90% de desconto, e itens selecionados podem chegar a preço de custo. Pode exigir validação cadastral, CNPJ e regras comerciais específicas. Não garante preço de custo em todos os itens.",
            "Os percentuais indicados como “até” representam teto promocional ou comercial e não constituem promessa de desconto uniforme. O preço sem benefício, o preço do membro e o desconto aplicável são exibidos de forma clara antes da confirmação de cada pedido.",
          ],
        },
        {
          title: "3. Periodicidade e preço da assinatura",
          paragraphs: [
            "Os planos podem ser oferecidos nas modalidades mensal, semestral e anual, com preços distintos. Planos de maior duração podem ter preço de assinatura reduzido em razão do compromisso de permanência e da antecipação do pagamento.",
            "O valor, a periodicidade, a eventual renovação automática e as condições do plano escolhido são informados antes da contratação.",
          ],
        },
        {
          title: "4. Conta e credenciais",
          paragraphs: [
            "A conta é pessoal ou vinculada à empresa cadastrada e não pode ser cedida, vendida, alugada ou compartilhada fora das permissões expressamente oferecidas pelo Clube. O titular é responsável por manter suas credenciais seguras e por comunicar uso não autorizado.",
          ],
        },
        {
          title: "5. Uso dos benefícios",
          paragraphs: [
            "Os benefícios são válidos enquanto o plano estiver ativo e observadas as condições de cada produto, campanha e estoque. Salvo indicação expressa, benefícios não são cumulativos com outras promoções. Descontos não retroagem a compras anteriores e não podem ser convertidos em dinheiro.",
          ],
        },
        {
          title: "6. Plano Revendedor",
          paragraphs: [
            "O plano Revendedor pode conter critérios específicos de elegibilidade, quantidade, preço, margem, produto, forma de pagamento e uso comercial.",
            "A autorização de revenda de produtos adquiridos de forma regular não autoriza a revenda da assinatura, de credenciais, cupons, benefícios de acesso ou qualquer mecanismo destinado a contornar as regras do Clube. Quando contratado por pessoa jurídica para atividade empresarial, podem ser aplicáveis condições comerciais complementares em instrumento próprio.",
          ],
        },
        {
          title: "7. Pagamento, renovação e inadimplência",
          paragraphs: [
            "O pagamento segue as condições exibidas no checkout. Quando houver renovação automática, a recorrência e a periodicidade são informadas de forma destacada, e o usuário pode desativar a renovação futura pelos canais disponibilizados.",
            "A falta de pagamento pode suspender benefícios e acesso até a regularização, respeitados os direitos legais do consumidor.",
          ],
        },
        {
          title: "8. Cancelamento e rescisão",
          paragraphs: [
            "No plano mensal, após o prazo legal de arrependimento, o cancelamento impede a próxima renovação e o acesso permanece até o fim do período já pago, sem reembolso proporcional, salvo hipótese prevista em lei ou falha imputável ao Clube.",
            "Nos planos semestral e anual, o membro pode cancelar apenas a renovação e manter o acesso e os benefícios até o fim do período contratado, sem multa. Se solicitar o encerramento antecipado com devolução de saldo, aplica-se a Política de Reembolso e o Ajuste Proporcional de Benefícios nela previsto.",
          ],
        },
        {
          title: "9. Condutas proibidas e prevenção a fraude",
          paragraphs: [
            "É vedado criar contas falsas, utilizar dados de terceiros sem autorização ou burlar critérios de elegibilidade.",
            "É vedado compartilhar, vender, alugar ou transferir conta, assinatura, credenciais ou benefícios.",
            "É vedado explorar falhas técnicas, automatizar compras de forma abusiva e manipular preços, descontos ou limites.",
            "É vedado praticar chargeback fraudulento, simular cancelamentos ou devoluções e agir com finalidade de obter vantagem indevida.",
            "É vedado revender acesso ao Clube, cupons, credenciais ou benefícios, ainda que o plano Revendedor permita a revenda regular de produtos.",
            "Diante de indícios razoáveis de fraude ou abuso, o Clube pode adotar medidas preventivas proporcionais, inclusive bloquear temporariamente benefícios enquanto apura os fatos. Medidas definitivas são tomadas com base em evidências e sem afastar direitos legais indisponíveis.",
          ],
        },
        {
          title: "10. Ofertas, estoque e alterações de catálogo",
          paragraphs: [
            "Produtos, estoques, preços, percentuais de desconto e campanhas podem variar. O Clube não garante a permanência de determinado item ou percentual futuro, mas respeita pedidos já confirmados nas condições contratadas, salvo impossibilidade legalmente justificável.",
          ],
        },
        {
          title: "11. Propriedade intelectual",
          paragraphs: [
            "Marca, identidade visual, textos, software, banco de dados, layout e demais conteúdos do Clube são protegidos pela legislação aplicável. O acesso ao site não concede licença para reprodução ou exploração comercial não autorizada.",
          ],
        },
        {
          title: "12. Atendimento e comunicações",
          paragraphs: [
            `O atendimento é prestado por ${company.supportEmail} e pelo WhatsApp ${company.whatsapp}, conforme a disponibilidade informada no site.`,
            "Comunicações transacionais necessárias para pedidos, pagamentos, segurança e conta podem ser enviadas independentemente da opção por receber marketing, quando houver base legal para isso.",
          ],
        },
        {
          title: "13. Alterações dos Termos",
          paragraphs: [
            "Estes Termos podem ser atualizados. Alterações que afetem materialmente contratos vigentes são tratadas com transparência e sem redução indevida de direitos já adquiridos. A versão aplicável à contratação permanece registrável e reproduzível.",
          ],
        },
        {
          title: "14. Lei aplicável e solução de conflitos",
          paragraphs: [
            "Aplicam-se as leis da República Federativa do Brasil. Em relações de consumo, é preservado o foro legalmente competente e o direito de acesso aos órgãos de defesa do consumidor e ao Poder Judiciário.",
            "Contratações empresariais específicas do plano Revendedor podem conter cláusula própria de resolução de conflitos, desde que válida e expressamente pactuada.",
          ],
        },
      ]}
    />
  );
}
