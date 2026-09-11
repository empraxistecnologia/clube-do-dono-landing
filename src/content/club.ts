import heroChair from "@/assets/hero-chair.jpg";
import productClipper from "@/assets/product-clipper.jpg";
import productPomade from "@/assets/product-pomade.jpg";
import productScissors from "@/assets/product-scissors.jpg";
import educationBw from "@/assets/education-bw.jpg";

/**
 * Conteúdo central da landing page do Clube do Dono.
 * Edite tudo aqui: textos, vídeos, produtos, planos e links.
 * `null` = pendente de conteúdo real (a UI trata a ausência com elegância).
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
  eyebrow: "Clube de benefícios para barbeiros",
  titleLines: ["Talento na", "cadeira.", "Visão de"],
  titleAccent: "Dono.",
  text: "Você é dono do seu talento. Faça parte de uma comunidade com descontos em produtos e vantagens para o seu negócio.",
  primaryCta: { label: "Quero conhecer os planos", href: "#planos" },
  secondaryCta: { label: "Veja como funciona", href: "#videos" },
  image: heroChair,
  sideNote: ["Mais barbearias", "Mais histórias"],
  caption: ["Barbeiros", "Donos de barbearia", "Juntos mais fortes"],
};

export const clubIntro = {
  title: ["Você cuida do talento.", "O clube amplia suas possibilidades."],
  text: "Para barbeiros e donos de barbearia que querem comprar com desconto, desenvolver sua prática e fazer parte de uma comunidade profissional.",
  pillars: [
    {
      number: "01",
      title: "Vantagens para comprar",
      text: "Descontos em produtos conforme o plano escolhido.",
    },
    {
      number: "02",
      title: "Conhecimento para evoluir",
      text: "Cursos disponíveis e condições especiais em mentorias.",
    },
    {
      number: "03",
      title: "Uma comunidade com visão",
      text: "Um clube para quem leva a profissão e o negócio a sério.",
    },
  ],
};

export type ClubVideo = {
  id: string;
  caption: string;
  /** URL de MP4 ou de plataforma (YouTube/Vimeo). */
  url: string | null;
  /** Imagem de capa. */
  poster: string | null;
};

export const videos = {
  title: ["Conheça o clube.", "Dê o play."],
  text: "Entenda os benefícios e veja como fazer parte.",
  items: [
    { id: "v1", caption: "Conheça o clube", url: null, poster: null },
    { id: "v2", caption: "Benefícios na prática", url: null, poster: null },
    { id: "v3", caption: "Como fazer parte", url: null, poster: null },
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

export const products = {
  title: ["Quem é do clube", "compra com vantagem."],
  text: "Explore os produtos e os descontos disponíveis em cada plano.",
  cta: { label: "Ver produtos e descontos", href: null as string | null },
  byPlan: {
    silver: [
      {
        id: "s1",
        name: "Máquinas de corte",
        category: "Equipamentos",
        image: productClipper,
        listPrice: null,
        memberPrice: null,
        href: null,
        featured: true,
      },
      {
        id: "s2",
        name: "Pomadas e finalizadores",
        category: "Cuidados",
        image: productPomade,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
      {
        id: "s3",
        name: "Tesouras profissionais",
        category: "Ferramentas",
        image: productScissors,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
    ],
    gold: [
      {
        id: "g1",
        name: "Máquinas de corte",
        category: "Equipamentos",
        image: productClipper,
        listPrice: null,
        memberPrice: null,
        href: null,
        featured: true,
      },
      {
        id: "g2",
        name: "Pomadas e finalizadores",
        category: "Cuidados",
        image: productPomade,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
      {
        id: "g3",
        name: "Tesouras profissionais",
        category: "Ferramentas",
        image: productScissors,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
    ],
    diamond: [
      {
        id: "d1",
        name: "Máquinas de corte",
        category: "Equipamentos",
        image: productClipper,
        listPrice: null,
        memberPrice: null,
        href: null,
        featured: true,
      },
      {
        id: "d2",
        name: "Tesouras profissionais",
        category: "Ferramentas",
        image: productScissors,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
      {
        id: "d3",
        name: "Pomadas e finalizadores",
        category: "Cuidados",
        image: productPomade,
        listPrice: null,
        memberPrice: null,
        href: null,
      },
    ],
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
  title: ["Escolha como", "fazer parte."],
  text: "Compare o acesso aos produtos e os benefícios de cada plano.",
  note: "Consulte as regras, os benefícios e a disponibilidade de cada plano.",
  aside: ["Mesma paixão", "Mais possibilidades"],
  asideRight: ["Barbeiros", "Donos de barbearia", "Uma comunidade real"],
  items: [
    {
      id: "silver",
      name: "Silver",
      limit: "50",
      limitNote: "produtos/mês",
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
      limitNote: "produtos/mês",
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
      limitNote: "ilimitados",
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
  title: ["Seu talento também", "merece investimento."],
  text: "Explore os cursos disponíveis e as mentorias com condições exclusivas para membros.",
  stamp: ["Aprender.", "Aplicar.", "Evoluir."],
  image: educationBw,
  links: [
    { label: "Conhecer cursos", href: null as string | null },
    { label: "Explorar mentorias", href: null as string | null },
  ],
};

/** Respostas ficam ocultas até que o conteúdo real seja confirmado. */
export const faq = {
  title: ["Bom", "saber."],
  subtitle: "Tire suas dúvidas antes de entrar no clube.",
  items: [
    { q: "O clube é para barbeiros ou donos de barbearia?", a: null as string | null },
    { q: "Como funcionam os descontos?", a: null as string | null },
    { q: "Qual a diferença entre os três planos?", a: null as string | null },
    { q: "Como comprar depois de assinar?", a: null as string | null },
    { q: "Como acessar cursos e mentorias?", a: null as string | null },
  ],
};

export const finalCta = {
  titleLines: ["Dono do seu talento."],
  titlePlain: "Parte",
  titleAccent: "de algo maior.",
  text: "Benefícios para o profissional. Vantagens para o negócio.",
  cta: { label: "Quero fazer parte do clube", href: "#planos" },
  left: ["Mais barbeiros", "Mais barbearias", "Mais histórias"],
  right: ["Pessoas", "Produtos", "Conhecimento", "Barbearias", "Mais fortes"],
};

export const footer = {
  tagline: ["Barbeiros", "Donos de barbearia", "Juntos mais fortes"],
  social: [] as { label: string; href: string }[],
  legal: [] as { label: string; href: string }[],
};
