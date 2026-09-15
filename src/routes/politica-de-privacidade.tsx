import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Política de Privacidade — Clube do Dono";
const description =
  "Como o Clube do Dono coleta, usa, armazena e protege os dados pessoais de membros e visitantes, conforme a LGPD.";

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
      intro="Esta política explica quais dados pessoais o Clube do Dono coleta, para que os utiliza, com quem os compartilha, por quanto tempo os guarda e quais são os seus direitos como titular, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. Quem trata os seus dados",
          paragraphs: [
            "O responsável pelo tratamento dos dados (controlador) é o Clube do Dono, que opera este site e a área de membros.",
            "Dúvidas, pedidos e reclamações sobre privacidade podem ser enviados pelos canais oficiais de atendimento do clube, incluindo o WhatsApp disponível neste site.",
          ],
        },
        {
          title: "2. Dados que coletamos",
          paragraphs: [
            "Dados de cadastro: nome, e-mail, telefone, senha e, quando necessário para emissão fiscal, CPF/CNPJ e endereço.",
            "Dados de assinatura e pagamento: plano contratado, histórico de cobranças, status da assinatura e confirmações enviadas pelo meio de pagamento. Não armazenamos o número completo do cartão — essa informação fica com o processador de pagamentos.",
            "Dados de uso dos benefícios: compras com desconto de membro, inscrições em eventos, cursos, mentorias e participação na comunidade.",
            "Dados de navegação: endereço IP, tipo de dispositivo e navegador, páginas acessadas e data/hora de acesso, coletados por cookies e tecnologias semelhantes.",
            "Dados de atendimento: mensagens trocadas conosco por WhatsApp, e-mail ou formulários.",
          ],
        },
        {
          title: "3. Para que usamos os dados e com que base legal",
          paragraphs: [
            "Execução do contrato: criar e manter sua conta, processar a assinatura, liberar os benefícios do plano, dar suporte e resolver problemas.",
            "Cumprimento de obrigação legal: emissão de documentos fiscais e guarda de registros exigidos pela legislação, inclusive registros de acesso previstos no Marco Civil da Internet.",
            "Legítimo interesse: segurança do site e das contas, prevenção a fraudes, melhoria dos produtos e do conteúdo e análise agregada de uso.",
            "Consentimento: envio de comunicações de marketing e uso de cookies não essenciais. Você pode retirar o consentimento a qualquer momento, sem prejuízo do acesso ao clube.",
          ],
        },
        {
          title: "4. Compartilhamento",
          paragraphs: [
            "Não vendemos dados pessoais e não os cedemos para terceiros usarem em campanhas próprias.",
            "Compartilhamos apenas o necessário com prestadores que viabilizam a operação: meio de pagamento e antifraude, hospedagem e infraestrutura do site, e-mail e mensageria, ferramentas de atendimento e de análise de audiência, além de parceiros responsáveis pela entrega de eventos, cursos e mentorias contratados por você.",
            "Também podemos compartilhar dados para cumprir obrigação legal, ordem judicial ou requisição de autoridade competente, e para defender nossos direitos.",
          ],
        },
        {
          title: "5. Transferência internacional",
          paragraphs: [
            "Alguns dos serviços que utilizamos, como hospedagem e ferramentas de e-mail e análise, podem armazenar dados em servidores fora do Brasil. Nesses casos, exigimos que o fornecedor adote garantias de proteção compatíveis com a LGPD.",
          ],
        },
        {
          title: "6. Cookies",
          paragraphs: [
            "Usamos cookies essenciais, que mantêm a sessão e a segurança do site, e cookies opcionais de desempenho e marketing. O detalhamento está na Política de Cookies, e você pode gerenciar as preferências pelo seu navegador.",
          ],
        },
        {
          title: "7. Por quanto tempo guardamos",
          paragraphs: [
            "Dados de conta: enquanto a assinatura estiver ativa e por até 5 anos após o encerramento, para fins de defesa em eventual discussão sobre a relação de consumo.",
            "Dados fiscais e de pagamento: pelo prazo exigido pela legislação tributária.",
            "Registros de acesso ao site: pelo prazo previsto no Marco Civil da Internet.",
            "Dados de marketing: até a retirada do consentimento ou o pedido de descadastramento.",
            "Encerrados esses prazos, os dados são excluídos ou anonimizados.",
          ],
        },
        {
          title: "8. Segurança",
          paragraphs: [
            "Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda, alteração ou uso indevido, como conexão criptografada, controle de acesso restrito e uso de fornecedores reconhecidos de infraestrutura.",
            "Se ocorrer um incidente de segurança com risco relevante aos titulares, comunicaremos os afetados e a Autoridade Nacional de Proteção de Dados (ANPD), conforme a lei.",
          ],
        },
        {
          title: "9. Seus direitos",
          paragraphs: [
            "Você pode solicitar a qualquer momento: confirmação da existência de tratamento; acesso aos seus dados; correção de dados incompletos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade; portabilidade; informação sobre compartilhamentos; e revogação do consentimento.",
            "Atendemos os pedidos nos prazos legais, após confirmar a identidade do solicitante. Alguns dados podem ser mantidos mesmo após o pedido de exclusão quando houver obrigação legal ou necessidade de defesa em processo.",
          ],
        },
        {
          title: "10. Dados de crianças e adolescentes",
          paragraphs: [
            "O Clube do Dono é destinado a maiores de 18 anos. Não coletamos intencionalmente dados de menores; identificado esse caso, a conta é encerrada e os dados excluídos.",
          ],
        },
        {
          title: "11. Alterações desta política",
          paragraphs: [
            "Esta política pode ser atualizada para refletir mudanças legais ou operacionais. Mudanças relevantes serão avisadas pelo site ou por e-mail, e a data da última atualização fica indicada no topo desta página.",
          ],
        },
      ]}
    />
  );
}
