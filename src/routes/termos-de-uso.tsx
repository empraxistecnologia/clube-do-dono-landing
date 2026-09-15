import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/club/LegalPage";

const title = "Termos de Uso — Clube do Dono";
const description =
  "Regras de uso do site e das assinaturas do Clube do Dono: adesão, planos, benefícios, responsabilidades e cancelamento.";

export const Route = createFileRoute("/termos-de-uso")({
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
      title="Termos de Uso"
      intro="Estes termos regulam o uso do site do Clube do Dono e a contratação dos planos de assinatura. Ao navegar no site ou assinar um plano, você concorda com as condições abaixo."
      updatedAt="setembro de 2026"
      sections={[
        {
          title: "1. Objeto",
          paragraphs: [
            "O Clube do Dono é um clube de benefícios voltado a barbeiros e donos de barbearia, que oferece condições especiais na compra de produtos, acesso a conteúdos e vantagens em cursos e mentorias, conforme o plano contratado.",
          ],
        },
        {
          title: "2. Cadastro e conta",
          paragraphs: [
            "Para acessar os benefícios é necessário criar uma conta com informações verdadeiras e atualizadas. Você é responsável por manter a confidencialidade das suas credenciais e por todas as atividades realizadas na sua conta.",
          ],
        },
        {
          title: "3. Planos, benefícios e limites",
          paragraphs: [
            "Cada plano possui preço, limites e benefícios próprios, informados na página de planos no momento da contratação. Benefícios como descontos em eventos, cursos e mentorias seguem as regras e a disponibilidade divulgadas para cada plano.",
            "Descontos em mentorias ou cursos não significam que esses conteúdos estejam incluídos na mensalidade, salvo indicação expressa.",
          ],
        },
        {
          title: "4. Pagamento e renovação",
          paragraphs: [
            "As assinaturas são cobradas de forma recorrente, conforme a periodicidade escolhida, até que haja cancelamento. A falta de pagamento pode suspender o acesso aos benefícios.",
          ],
        },
        {
          title: "5. Cancelamento",
          paragraphs: [
            "Você pode cancelar a assinatura a qualquer momento pelos canais de atendimento. O cancelamento interrompe as cobranças futuras e o acesso permanece até o fim do período já pago, observadas as regras da Política de Reembolso.",
          ],
        },
        {
          title: "6. Uso adequado",
          paragraphs: [
            "É proibido compartilhar credenciais, revender benefícios, usar o site para fins ilícitos ou tentar acessar áreas restritas sem autorização. O descumprimento pode gerar suspensão ou encerramento da conta.",
          ],
        },
        {
          title: "7. Alterações e contato",
          paragraphs: [
            "Podemos atualizar estes termos e os benefícios oferecidos, comunicando alterações relevantes pelos canais oficiais. Dúvidas podem ser tratadas pelo atendimento do Clube do Dono.",
          ],
        },
      ]}
    />
  );
}
