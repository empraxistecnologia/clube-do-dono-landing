import heroChair from "@/assets/hero-chair.jpg";
import heroShop from "@/assets/hero-shop.jpg";
import heroTools from "@/assets/hero-tools.jpg";
import productClipper from "@/assets/product-clipper.jpg";
import productPomade from "@/assets/product-pomade.jpg";
import productScissors from "@/assets/product-scissors.jpg";
import educationBw from "@/assets/education-bw.jpg";

/**
 * Conteúdo central da landing page do Clube do Dono.
 * Edite tudo aqui: textos, vídeos, produtos, planos e links.
 * `null` = pendente de conteúdo real (a UI trata a ausência com honestidade).
 */

export type PlanId = "silver" | "gold" | "diamond";

export const brand = {
  name: "Clube do Dono",
  /** Substitua por um asset real do logo quando disponível. */
  logoSrc: null as string | null,
};

export const nav = [
  { label: "O clube", href: "#o-clube" },
  { label: "Benefícios", href: "#produtos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Planos", href: "#planos" },
];

/** Link para a área de login existente. */
export const loginUrl: string | null = null;

export const hero = {
  eyebrow: "Clube de benefícios para barbeiros e donos de barbearia",
  titleLines: ["Talento na cadeira.", "Visão de"],
  titleAccent: "Dono.",
  text: "Seu talento faz a diferença em cada atendimento. No Clube do Dono, você encontra descontos em produtos, oportunidades para aprender e vantagens para cuidar também do seu negócio.",
  primaryCta: { label: "Conhecer os planos", href: "#planos" },
  secondaryCta: { label: "Ver como o clube funciona", href: "#videos" },
  support: "Benefícios para o profissional. Vantagens para o negócio.",
  image: heroChair,
  /** Carrossel de fundo do hero — adicione ou troque imagens aqui. */
  images: [
    { src: heroChair, alt: "Cadeira de barbeiro clássica em ambiente escuro", position: "68% center" },
    { src: heroShop, alt: "Interior de barbearia premium com detalhes em dourado", position: "60% center" },
    { src: heroTools, alt: "Ferramentas de barbeiro sobre couro escuro", position: "55% center" },
  ],
  caption: ["Barbeiros", "Donos de barbearia", "Juntos mais fortes"],
};
};

export const clubIntro = {
  title: ["Você domina o corte.", "Amplie suas possibilidades."],
  text: "Quem vive da barbearia faz escolhas todos os dias: o que comprar, onde investir e como evoluir. O Clube do Dono reúne benefícios para apoiar essas escolhas e valorizar quem está à frente do próprio trabalho.",
  pillars: [
    {
      number: "01",
      title: "Compre com vantagem",
      text: "Acesse produtos com descontos e condições disponíveis no seu plano.",
    },
    {
      number: "02",
      title: "Invista no seu talento",
      text: "Explore cursos e conheça mentorias com condições especiais para membros.",
    },
    {
      number: "03",
      title: "Faça parte do clube",
      text: "Uma comunidade para barbeiros e donos de barbearia que levam a profissão e o negócio a sério.",
    },
  ],
};

export type VideoSource = "file" | "youtube" | "vimeo";

export type ClubVideo = {
  id: string;
  title: string;
  /** URL de MP4 ou de plataforma (YouTube/Vimeo). */
  url: string | null;
  /** Imagem de capa. */
  poster: string | null;
  source: VideoSource | null;
};

export const videos = {
  title: ["Conheça o clube.", "Dê o play."],
  text: "Veja os vídeos e entenda como aproveitar os benefícios do Clube do Dono.",
  /** Seis posições configuráveis. Preencha url/poster/source quando os arquivos existirem. */
  items: [
    { id: "v1", title: "Conheça o clube", url: null, poster: null, source: null },
    { id: "v2", title: "Benefícios na prática", url: null, poster: null, source: null },
    { id: "v3", title: "Como fazer parte", url: null, poster: null, source: null },
    { id: "v4", title: "Produtos com desconto", url: null, poster: null, source: null },
    { id: "v5", title: "Cursos e mentorias", url: null, poster: null, source: null },
    { id: "v6", title: "Visão de dono", url: null, poster: null, source: null },
  ] as ClubVideo[],
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  /** Preço de referência real, se confirmado. */
  listPrice: number | null;
  /** Preço para membro real, se confirmado. */
  memberPrice: number | null;
  href: string | null;
  featured?: boolean;
};

const catalog: Product[] = [
  {
    id: "maquinas",
    name: "Máquinas de corte",
    category: "Equipamentos",
    image: productClipper,
    listPrice: null,
    memberPrice: null,
    href: null,
    featured: true,
  },
  {
    id: "pomadas",
    name: "Pomadas e finalizadores",
    category: "Cuidados",
    image: productPomade,
    listPrice: null,
    memberPrice: null,
    href: null,
  },
  {
    id: "tesouras",
    name: "Tesouras profissionais",
    category: "Ferramentas",
    image: productScissors,
    listPrice: null,
    memberPrice: null,
    href: null,
  },
];

const withPlan = (plan: PlanId): Product[] => catalog.map((p) => ({ ...p, id: `${plan}-${p.id}` }));

export const products = {
  title: ["Quem é do clube", "compra com vantagem."],
  text: "Da reposição do dia a dia às ferramentas de trabalho: explore os produtos e confira as condições disponíveis em cada plano.",
  cta: { label: "Explorar produtos e descontos", href: null as string | null },
  planNote: {
    silver: "Condições do plano Silver.",
    gold: "Condições do plano Gold.",
    diamond: "Condições do plano Diamond.",
  } satisfies Record<PlanId, string>,
  byPlan: {
    silver: withPlan("silver"),
    gold: withPlan("gold"),
    diamond: withPlan("diamond"),
  } satisfies Record<PlanId, Product[]>,
};

export type Plan = {
  id: PlanId;
  name: string;
  limit: string;
  limitNote: string;
  price: string;
  period: string;
  benefits: string[];
  /** Link de assinatura existente. */
  checkoutUrl: string | null;
  cta: string;
};

export const plans = {
  title: ["Seu talento.", "Seu negócio.", "Seu plano."],
  text: "Compare as opções e escolha como fazer parte do Clube do Dono.",
  note: "Consulte as regras, os benefícios e a disponibilidade de cada plano antes de contratar.",
  aside: ["Mesma paixão", "Mais possibilidades"],
  asideRight: ["Barbeiros", "Donos de barbearia", "Uma comunidade real"],
  items: [
    {
      id: "silver",
      name: "Silver",
      limit: "50",
      limitNote: "produtos/mês com condições do clube",
      price: "R$ 49,99",
      period: "/mês",
      benefits: ["Acesso ao catálogo com desconto", "Comunidade do clube"],
      checkoutUrl: null,
      cta: "Escolher Silver",
    },
    {
      id: "gold",
      name: "Gold",
      limit: "100",
      limitNote: "produtos/mês com condições do clube",
      price: "R$ 90,00",
      period: "/mês",
      benefits: [
        "Acesso ao catálogo com desconto",
        "Comunidade do clube",
        "Condições especiais em mentorias",
      ],
      checkoutUrl: null,
      cta: "Escolher Gold",
    },
    {
      id: "diamond",
      name: "Diamond",
      limit: "Produtos",
      limitNote: "ilimitados com condições do clube",
      price: "R$ 190,00",
      period: "/mês",
      benefits: [
        "Acesso ao catálogo com desconto",
        "Comunidade do clube",
        "Condições especiais em mentorias",
        "Acesso aos cursos disponíveis",
      ],
      checkoutUrl: null,
      cta: "Escolher Diamond",
    },
  ] as Plan[],
};

export const education = {
  title: ["Seu próximo avanço", "também passa pelo conhecimento."],
  text: "Aprimore sua prática com os cursos disponíveis e conheça as mentorias com condições especiais para membros.",
  stamp: ["Aprender.", "Aplicar.", "Evoluir."],
  image: educationBw,
  links: [
    { label: "Explorar cursos", href: null as string | null },
    { label: "Conhecer mentorias", href: null as string | null },
  ],
};

export const faq = {
  title: ["Bom", "saber."],
  subtitle: "Tire suas dúvidas antes de entrar no clube.",
  items: [
    {
      q: "O Clube do Dono é para barbeiros ou donos de barbearia?",
      a: "O clube é voltado tanto para barbeiros quanto para donos de barbearia que buscam vantagens na compra de produtos e oportunidades de desenvolvimento profissional. A proposta é reunir benefícios para quem trabalha na cadeira e para quem também cuida da gestão do negócio.",
    },
    {
      q: "Quais benefícios encontro no clube?",
      a: "O Clube do Dono reúne produtos com descontos para membros, cursos disponíveis e condições especiais em mentorias. Os benefícios e as condições de acesso variam conforme o plano escolhido. Consulte a comparação dos planos para entender o que está disponível em cada opção.",
    },
    {
      q: "Como funcionam os descontos nos produtos?",
      a: "Os produtos têm condições de compra vinculadas aos planos do clube. Na seção de produtos, selecione Silver, Gold ou Diamond para consultar as opções e as condições correspondentes. Confira o preço e a disponibilidade de cada item antes de concluir a compra.",
    },
    {
      q: "Qual a diferença entre Silver, Gold e Diamond?",
      a: "Os planos possuem diferentes limites e condições de acesso aos produtos e benefícios. Compare as informações apresentadas em cada plano e escolha a opção mais adequada à sua rotina de compras e aos benefícios que pretende utilizar.",
    },
    {
      q: "Cursos e mentorias estão incluídos em todos os planos?",
      a: "A disponibilidade de cursos e as condições das mentorias devem ser consultadas nos benefícios de cada plano. Uma condição especial ou desconto em mentoria não significa que ela esteja incluída na mensalidade. Confira as informações do conteúdo ou serviço antes de contratar.",
    },
  ] as { q: string; a: string }[],
};

export const finalCta = {
  titleLines: ["Dono do seu talento."],
  titlePlain: "Parte",
  titleAccent: "de algo maior.",
  text: "Conheça os planos e encontre as vantagens que fazem sentido para você e sua barbearia.",
  cta: { label: "Escolher meu plano", href: "#planos" },
  left: ["Mais barbeiros", "Mais barbearias", "Mais histórias"],
  right: ["Pessoas", "Produtos", "Conhecimento", "Barbearias", "Mais fortes"],
};

export const footer = {
  tagline: ["Barbeiros", "Donos de barbearia", "Juntos mais fortes"],
  social: [] as { label: string; href: string }[],
  legal: [] as { label: string; href: string }[],
};
