import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";
import { company } from "@/content/company";

const title = "Política de Privacidade — Clube do Dono";
const description =
  "Como o Clube do Dono trata dados pessoais: finalidades, bases legais da LGPD, compartilhamento, retenção em até 60 dias e direitos do titular.";

export const Route = createFileRoute("/politica-de-privacidade")({
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
      title="Política de Privacidade e Proteção de Dados"
      intro="Esta política explica como o Clube do Dono trata dados pessoais de visitantes e membros, com quais finalidades e bases legais, com quem compartilha, por quanto tempo guarda e quais direitos você pode exercer, conforme a Lei nº 13.709/2018 (LGPD)."
      updatedAt={company.updatedAt}
      sections={[
        {
          title: "1. Quem somos",
          paragraphs: [
            `O Clube do Dono é operado por ${company.legalName}, inscrita no CNPJ sob nº ${company.cnpj}, com endereço em ${company.address}.`,
            `Para assuntos de privacidade e proteção de dados, o contato é ${company.privacyEmail}. Atendimento também pelo WhatsApp ${company.whatsapp}.`,
          ],
        },
        {
          title: "2. Compromisso com a privacidade",
          paragraphs: [
            "Tratamos dados pessoais de forma transparente, segura e compatível com as finalidades informadas. Não vendemos, alugamos nem comercializamos bases de dados pessoais.",
            "O compartilhamento com terceiros ocorre apenas quando necessário para operar o Clube, cumprir obrigações legais, prevenir fraudes, processar pagamentos, entregar pedidos, prestar suporte ou mediante outra base legal aplicável.",
          ],
        },
        {
          title: "3. Dados que podemos tratar",
          paragraphs: [
            "Dados cadastrais: nome, CPF ou CNPJ quando necessário, data de nascimento quando aplicável, telefone, e-mail e endereço.",
            "Dados de conta: identificadores de usuário, plano contratado, histórico de assinatura, preferências e registros de autenticação.",
            "Dados de compra e pagamento: pedidos, produtos, valores, descontos aplicados, situação do pagamento e identificadores do meio de pagamento. Dados completos de cartão podem ser tratados diretamente pelos provedores de pagamento.",
            "Dados de atendimento: mensagens, solicitações, reclamações, registros de suporte e preferências de comunicação.",
            "Dados técnicos e de navegação: endereço IP, data e hora de acesso, identificadores de dispositivo, navegador, páginas acessadas, eventos de segurança e cookies, conforme a Política de Cookies.",
            "Dados de benefícios: preço de referência do produto, preço pago pelo membro e economia efetivamente utilizada, quando necessário para demonstrar os benefícios do plano e calcular eventual rescisão antecipada nos termos da Política de Reembolso.",
          ],
        },
        {
          title: "4. Finalidades e bases legais",
          paragraphs: [
            "Criar e manter a conta e a assinatura (cadastro, plano, autenticação) — execução de contrato e procedimentos preliminares.",
            "Processar compras, pagamentos, entregas e reembolsos (pedido, pagamento, endereço) — execução de contrato e obrigação legal quando aplicável.",
            "Prestar suporte e registrar solicitações (contato e histórico de atendimento) — execução de contrato e legítimo interesse, conforme o caso.",
            "Prevenir fraude e abuso e proteger a plataforma (IP, dispositivo, eventos de segurança, transações) — legítimo interesse, exercício regular de direitos e obrigação legal quando aplicável.",
            "Cumprir obrigações fiscais, contábeis e regulatórias (documentos e histórico transacional) — cumprimento de obrigação legal ou regulatória.",
            "Enviar marketing e ofertas (contato e preferências) — consentimento ou outra base legal válida, sempre com direito de oposição e descadastro.",
            "Mensurar uso do site e melhorar a experiência (cookies e eventos de navegação) — consentimento para cookies não necessários.",
          ],
        },
        {
          title: "5. Compartilhamento de dados",
          paragraphs: [
            "Podemos compartilhar dados, no limite necessário, com prestadores de hospedagem e infraestrutura, processadores e instituições de pagamento, serviços de prevenção a fraude, logística e entrega, atendimento, comunicação, analytics, contabilidade, assessoria jurídica e autoridades públicas quando houver obrigação legal ou ordem válida.",
            "Esses terceiros devem atuar conforme contratos, instruções, deveres de confidencialidade e a legislação aplicável.",
          ],
        },
        {
          title: "6. Transferências internacionais",
          paragraphs: [
            "Alguns fornecedores de tecnologia podem armazenar ou processar dados fora do Brasil. Quando isso ocorrer, adotamos mecanismos compatíveis com a LGPD e a regulamentação aplicável, inclusive medidas contratuais e de segurança adequadas.",
          ],
        },
        {
          title: "7. Retenção e exclusão em até 60 dias",
          paragraphs: [
            "Após o encerramento definitivo da conta ou o término da finalidade de tratamento, e inexistindo outra base legal que autorize a conservação, os dados pessoais vinculados à conta e ao relacionamento comercial são eliminados ou anonimizados em até 60 (sessenta) dias, observados os limites técnicos razoáveis.",
            "Esse prazo não se aplica a dados que precisem ser mantidos para cumprimento de obrigação legal ou regulatória, exercício regular de direitos em processo judicial, administrativo ou arbitral, prevenção e apuração de fraude ou atendimento de ordem de autoridade competente. Registros de acesso sujeitos ao art. 15 do Marco Civil da Internet são mantidos, sob sigilo e segurança, pelo prazo legal aplicável, atualmente de 6 (seis) meses.",
            "Quando o titular pedir para não receber mais mensagens promocionais, interrompemos o envio de novas campanhas assim que a solicitação for processada. Pode ser mantido um registro mínimo de supressão, inclusive pseudonimizado, exclusivamente para evitar novo envio indevido.",
          ],
        },
        {
          title: "8. Direitos do titular",
          paragraphs: [
            "Nos termos da LGPD, você pode solicitar: confirmação da existência de tratamento; acesso; correção; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade; portabilidade; informação sobre compartilhamentos; informação sobre a possibilidade de não fornecer consentimento e suas consequências; revogação do consentimento; eliminação dos dados tratados com base em consentimento, ressalvadas as hipóteses legais de conservação; oposição e revisão de decisões automatizadas quando cabível.",
            `Solicitações devem ser encaminhadas para ${company.privacyEmail}. Podemos pedir informações suficientes para confirmar a identidade do requerente e prevenir fraude.`,
          ],
        },
        {
          title: "9. Segurança",
          paragraphs: [
            "Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou tratamento inadequado.",
            "Nenhum ambiente é absolutamente imune a riscos; incidentes relevantes são tratados e comunicados às autoridades e aos titulares quando a legislação exigir.",
          ],
        },
        {
          title: "10. Crianças e adolescentes",
          paragraphs: [
            "O Clube do Dono é destinado a pessoas com capacidade para contratar. Caso seja identificado tratamento de dados de criança ou adolescente em contexto que exija consentimento específico ou salvaguardas adicionais, serão observadas as regras da LGPD e demais normas aplicáveis.",
          ],
        },
        {
          title: "11. Alterações desta política",
          paragraphs: [
            "Esta política pode ser atualizada para refletir mudanças legais, operacionais ou tecnológicas. A versão vigente e a data de atualização permanecem disponíveis no site, e alterações materialmente relevantes são comunicadas por meio adequado.",
          ],
        },
      ]}
    />
  );
}
