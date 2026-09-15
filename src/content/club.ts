import heroChair from "@/assets/hero-chair.jpg";
import heroShop from "@/assets/hero-shop.jpg";
import heroTools from "@/assets/hero-tools.jpg";
import educationBw from "@/assets/education-bw.jpg";
import logoOficial from "@/assets/logo-clube-do-dono.png";

/**
 * Conteúdo central da landing page do Clube do Dono.
 * Edite tudo aqui: textos, vídeos, produtos, planos e links.
 * `null` = pendente de conteúdo real (a UI trata a ausência com honestidade).
 */

export type PlanId = "silver" | "gold" | "diamond";

export const brand = {
  name: "Clube do Dono",
  logoSrc: logoOficial as string | null,
};

export const nav = [
  { label: "O clube", href: "#o-clube" },
  { label: "Vídeos", href: "#videos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#duvidas" },
];

/** Link para a área de login existente. */
export const loginUrl: string | null = "https://clubedodono.com/auth";

export const hero = {
  primaryCta: { label: "Conhecer os planos", href: "#planos" },
  secondaryCta: { label: "Ver como o clube funciona", href: "#videos" },
  image: heroChair,
  /** Slider do topo: cada imagem carrega uma mensagem só. */
  slides: [
    {
      src: heroChair,
      alt: "Cadeira de barbeiro clássica em ambiente escuro",
      position: "68% center",
      eyebrow: "Clube de benefícios para barbeiros",
      titleLines: ["Talento na cadeira.", "Visão de"],
      titleAccent: "Dono.",
      text: "Um clube feito para quem vive da barbearia.",
    },
    {
      src: heroShop,
      alt: "Interior de barbearia premium com detalhes em dourado",
      position: "60% center",
      eyebrow: "Produtos",
      titleLines: ["Compre melhor.", "Lucre mais."],
      titleAccent: null,
      text: "Descontos em todo o catálogo do Clube, conforme o seu plano.",
    },
    {
      src: heroTools,
      alt: "Ferramentas de barbeiro sobre couro escuro",
      position: "55% center",
      eyebrow: "Educação e comunidade",
      titleLines: ["Evolua com", "quem faz."],
      titleAccent: null,
      text: "Cursos e mentorias com condições exclusivas para membros.",
    },
  ],
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
    { id: "v1", title: "Conheça o Clube do Dono", url: "https://gessomt.app.br/videos/IMG_0263.mp4", poster: null, source: "file" },
    { id: "v2", title: "O clube na prática", url: "https://gessomt.app.br/videos/video01.mp4", poster: null, source: "file" },
    { id: "v3", title: "Vantagens para o seu negócio", url: "https://gessomt.app.br/videos/video02.mp4", poster: null, source: "file" },
    { id: "v4", title: "Jhonatan: funciona de verdade", url: "https://gessomt.app.br/videos/video-jhonatan-funciona1.mp4", poster: null, source: "file" },
    { id: "v5", title: "Landim: funciona de verdade", url: "https://gessomt.app.br/videos/video-landim-funciona2.mp4", poster: null, source: "file" },
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

const silverCatalog: Product[] = [
  { id: "silver-suporte-de-metal-para-lamina-wahl", name: "Suporte De Metal Para Lamina Wahl", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/689a48098f969/s3s3dikenaxlwhzyg4qgcodqks43_thumb_280_o2kx6hm-wbdamankgxyxwq-689a483fddd72.jpg", listPrice: 45, memberPrice: 15, href: null },
  { id: "silver-balm-para-barba-fox-120ml", name: "Balm Para Barba Fox 120ml", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688788558168a/balm-1-600x600-688788ab5063a.png", listPrice: 45, memberPrice: 15.25, href: null },
  { id: "silver-tapete-emborrachado", name: "Tapete Emborrachado", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688a6c9d36bf6/img-20230803-182404-1000-x-1000-pixel-688a6ceb85855.webp", listPrice: 65, memberPrice: 27, href: null },
  { id: "silver-pente-dimil-blindado", name: "Pente Dimil Blindado", category: "Pentes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688bc289cf9d1/imagem-do-whatsapp-de-2025-07-31-a-s-15-19-27_4905e5e9-688bc2ab49a9a.jpg", listPrice: 45, memberPrice: 20, href: null },
  { id: "silver-tesoura-fio-misto-6-tondeo", name: "Tesoura Fio Misto 6 Tondeo", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e633cebbe82/primotesoura-66e633cef2a00.webp", listPrice: 400, memberPrice: 190, href: null },
  { id: "silver-tesoura-fio-misto-6-5-tondeo", name: "Tesoura Fio Misto 6.5 Tondeo", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e6340a6176a/primo55-66e6340a950df.webp", listPrice: 350, memberPrice: 171, href: null },
  { id: "silver-kit-pente-disfarce-metal-1-16-e-3-16", name: "Kit Pente Disfarce Metal  1/16 E 3/16", category: "Pentes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68b7566db3875/kit-pentes-disfarce-a-b-6a201be86d7d5.jpg", listPrice: 50, memberPrice: 25, href: null },
  { id: "silver-po-descolorante-fox-500g", name: "Pó Descolorante Fox 500g", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68890ccea2cdc/po-1-600x600-68890d392e75f.png", listPrice: 85, memberPrice: 43, href: null },
  { id: "silver-capa-de-corte-de-cetim-com-ziper", name: "Capa De Corte De Cetim Com Ziper", category: "Capas", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688d06b52f347/capa-de-cetim-6a22b5c9d00f6.jpg", listPrice: 55, memberPrice: 30, href: null },
  { id: "silver-navalhete-de-aco-inox-lm-elite-preto", name: "Navalhete De Aço Inox Lm Elite (Preto)", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69b00e95b6d55/whatsapp-image-2026-03-10-at-08-28-13-1-69b00ebc7ec86.jpeg", listPrice: 75, memberPrice: 45, href: null },
  { id: "silver-navalhete-de-aco-cabo-de-madeira-fox-met", name: "Navalhete De Aço Cabo De Madeira Fox Metals", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69ab273d87736/whatsapp-image-2026-03-06-at-10-37-13-69ab2748aad16.jpeg", listPrice: 75, memberPrice: 45, href: null },
  { id: "silver-maquina-shaver-andis-profoil-lithium", name: "Maquina Shaver Andis Profoil Lithium", category: "Máquinas", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e62e5aeaffa/maquinaprofissionaldeacabamentoebarbearprofoilshaver-66e62e5b55888.jpg", listPrice: 830, memberPrice: 530, href: null },
];

const goldCatalog: Product[] = [
  { id: "gold-dermaroller-system-0-50mm-540-microagulh", name: "Dermaroller System 0.50mm 540 Microagulhas", category: "Dermaroller", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e630297328d/dermarollerskintherapy540micro-agulhas0_5mm_10f157db-f9dd-4948-8486-dd9dee6f3ef6-66e63029aa111.jpg", listPrice: 45, memberPrice: 11.5, href: null },
  { id: "gold-balm-para-barba-fox-120ml", name: "Balm Para Barba Fox 120ml", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688788558168a/balm-1-600x600-688788ab5063a.png", listPrice: 45, memberPrice: 12.5, href: null },
  { id: "gold-tapete-emborrachado", name: "Tapete Emborrachado", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688a6c9d36bf6/img-20230803-182404-1000-x-1000-pixel-688a6ceb85855.webp", listPrice: 65, memberPrice: 23, href: null },
  { id: "gold-tesoura-fio-navalha-umi-7", name: "Tesoura Fio Navalha Umi 7´´", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68925151ba91a/d_nq_np_991559-mla83151685630_032025-o-689252116d7b4.webp", listPrice: 170, memberPrice: 65, href: null },
  { id: "gold-gel-clinico-incolor-bag-5kg", name: "Gel Clinico Incolor Bag 5kg", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/687ea393a6cad/d_nq_np_893305-mlb51055872935_082022-o-gel-clinico-contato-condutor-ultrassom-incolor-bag-5kg-687ea40f56df1.webp", listPrice: 74.9, memberPrice: 29, href: null },
  { id: "gold-tesoura-fio-misto-6-tondeo", name: "Tesoura Fio Misto 6 Tondeo", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e633cebbe82/primotesoura-66e633cef2a00.webp", listPrice: 400, memberPrice: 160, href: null },
  { id: "gold-gola-higienica", name: "Gola Higiênica", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688905550eecb/whatsapp-image-2026-03-18-at-08-54-09-69baa07e200b0.jpeg", listPrice: 45, memberPrice: 19, href: null },
  { id: "gold-kit-pente-disfarce-metal-1-16-e-3-16", name: "Kit Pente Disfarce Metal  1/16 E 3/16", category: "Pentes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68b7566db3875/kit-pentes-disfarce-a-b-6a201be86d7d5.jpg", listPrice: 50, memberPrice: 22, href: null },
  { id: "gold-capa-de-corte-de-cetim-com-ziper", name: "Capa De Corte De Cetim Com Ziper", category: "Capas", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688d06b52f347/capa-de-cetim-6a22b5c9d00f6.jpg", listPrice: 55, memberPrice: 25, href: null },
  { id: "gold-maquina-shaver-andis-profoil-lithium", name: "Maquina Shaver Andis Profoil Lithium", category: "Máquinas", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e62e5aeaffa/maquinaprofissionaldeacabamentoebarbearprofoilshaver-66e62e5b55888.jpg", listPrice: 830, memberPrice: 390, href: null },
  { id: "gold-navalhete-de-aco-inox-lm-elite-preto", name: "Navalhete De Aço Inox Lm Elite (Preto)", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69b00e95b6d55/whatsapp-image-2026-03-10-at-08-28-13-1-69b00ebc7ec86.jpeg", listPrice: 75, memberPrice: 40, href: null },
  { id: "gold-navalhete-de-aco-cabo-de-madeira-fox-met", name: "Navalhete De Aço Cabo De Madeira Fox Metals", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69ab273d87736/whatsapp-image-2026-03-06-at-10-37-13-69ab2748aad16.jpeg", listPrice: 75, memberPrice: 40, href: null },
];

const diamondCatalog: Product[] = [
  { id: "diamond-alavanca-de-regular-lamina-wahl", name: "Alavanca De Regular Lamina Wahl", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/689a48ac03ce4/s3s3dikenaxlwhzyg4qgcodqks43_thumb_280_w7yahbh18hx5lqjpe7-2ng-689a490f4be48.jpg", listPrice: 60, memberPrice: 10, href: null },
  { id: "diamond-dermaroller-system-0-50mm-540-microagulh", name: "Dermaroller System 0.50mm 540 Microagulhas", category: "Dermaroller", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/66e630297328d/dermarollerskintherapy540micro-agulhas0_5mm_10f157db-f9dd-4948-8486-dd9dee6f3ef6-66e63029aa111.jpg", listPrice: 45, memberPrice: 10.5, href: null },
  { id: "diamond-balm-para-barba-fox-120ml", name: "Balm Para Barba Fox 120ml", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688788558168a/balm-1-600x600-688788ab5063a.png", listPrice: 45, memberPrice: 11.3, href: null },
  { id: "diamond-agua-oxigenada-40-volumes-classe-a-900ml", name: "Agua Oxigenada 40 Volumes Classe A 900ml", category: "Cuidados Pessoais", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/693961d2c5d11/ox-1-693962c26c563.webp", listPrice: 45, memberPrice: 13, href: null },
  { id: "diamond-pente-dimil-blindado", name: "Pente Dimil Blindado", category: "Pentes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/688bc289cf9d1/imagem-do-whatsapp-de-2025-07-31-a-s-15-19-27_4905e5e9-688bc2ab49a9a.jpg", listPrice: 45, memberPrice: 15, href: null },
  { id: "diamond-tesoura-fio-navalha-umi-7", name: "Tesoura Fio Navalha Umi 7´´", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68925151ba91a/d_nq_np_991559-mla83151685630_032025-o-689252116d7b4.webp", listPrice: 170, memberPrice: 60, href: null },
  { id: "diamond-kit-pente-disfarce-metal-1-16-e-3-16", name: "Kit Pente Disfarce Metal  1/16 E 3/16", category: "Pentes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68b7566db3875/kit-pentes-disfarce-a-b-6a201be86d7d5.jpg", listPrice: 50, memberPrice: 18, href: null },
  { id: "diamond-oil-wahl", name: "Oil Wahl", category: "Acessórios", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/68890b814381e/oleo-68890c141f289.png", listPrice: 55, memberPrice: 20, href: null },
  { id: "diamond-tesoura-invertida-fio-desbaste-umi-7", name: "Tesoura Invertida Fio Desbaste Umi 7´´", category: "Tesouras", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/689252cdb15a6/13-6a230d7e6dbbb.jpg", listPrice: 150, memberPrice: 55, href: null },
  { id: "diamond-navalhete-de-aco-cabo-de-madeira-fox-met", name: "Navalhete De Aço Cabo De Madeira Fox Metals", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69ab273d87736/whatsapp-image-2026-03-06-at-10-37-13-69ab2748aad16.jpeg", listPrice: 75, memberPrice: 35, href: null },
  { id: "diamond-navalhete-de-aco-inox-lm-elite-preto", name: "Navalhete De Aço Inox Lm Elite (Preto)", category: "Navalhetes", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/69b00e95b6d55/whatsapp-image-2026-03-10-at-08-28-13-1-69b00ebc7ec86.jpeg", listPrice: 75, memberPrice: 35, href: null },
  { id: "diamond-maquina-wahl-shaver-travel", name: "Maquina Wahl Shaver Travel", category: "Máquinas", image: "https://assets.sistemawbuy.com.br/arquivos/4a029bac346ff7c78f3aa5810ddd63fa/produtos/697261de86260/captura-de-tela_22-1-2026_135734_www-mercadolivre-com-br-6972663b18c1e.jpeg", listPrice: 250, memberPrice: 120, href: null },
];

export const products = {
  title: ["Quem é do clube", "compra com vantagem."],
  text: "Da reposição do dia a dia às ferramentas de trabalho: veja alguns dos produtos disponíveis em cada plano e o preço para membros.",
  cta: { label: "Explorar produtos e descontos", href: null as string | null },
  planNote: {
    silver: "Plano Silver: até 15% de desconto em todo o catálogo do Clube.",
    gold: "Plano Gold: até 40% de desconto em produtos selecionados.",
    diamond: "Plano Diamond: produtos a preço de custo, indicado para quem quer revender.",
  } satisfies Record<PlanId, string>,
  byPlan: {
    silver: silverCatalog,
    gold: goldCatalog,
    diamond: diamondCatalog,
  } satisfies Record<PlanId, Product[]>,
};

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  limit: string;
  limitNote: string;
  highlight: string;
  price: string;
  period: string;
  benefits: string[];
  featured?: boolean;
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
      tagline: "Perfeito para começar",
      limit: "até 15%",
      limitNote: "de desconto em todos os produtos",
      highlight: "25% de desconto em eventos",
      price: "R$ 49,99",
      period: "/mês",
      benefits: [
        "Até 15% off em todo o catálogo do Clube",
        "Suporte prioritário",
        "Acesso à comunidade exclusiva",
      ],
      checkoutUrl: "https://clubedodono.com/plan-checkout?plan=silver",
      cta: "Assinar Silver",
    },
    {
      id: "gold",
      name: "Gold",
      tagline: "O mais popular",
      limit: "até 40%",
      limitNote: "de desconto em produtos",
      highlight: "50% de desconto em eventos",
      price: "R$ 90,00",
      period: "/mês",
      featured: true,
      benefits: [
        "Até 40% off em produtos selecionados",
        "Suporte VIP 24/7",
        "Acesso antecipado a lançamentos",
        "Consultoria mensal gratuita",
        "Descontos em mentorias 11 Legados",
      ],
      checkoutUrl: "https://clubedodono.com/plan-checkout?plan=gold",
      cta: "Assinar Gold",
    },
    {
      id: "diamond",
      name: "Diamond",
      tagline: "Máximo benefício",
      limit: "Preço de custo",
      limitNote: "produtos para revendedores",
      highlight: "Entrada GRATUITA em eventos",
      price: "R$ 190,00",
      period: "/mês",
      benefits: [
        "Até 90% de desconto: produto a preço de custo",
        "Plano indicado para quem quer revender",
        "50% de desconto em cursos práticos",
        "Gerente de conta dedicado",
        "Workshops VIP trimestrais",
        "Network com top barbeiros",
      ],
      checkoutUrl: "https://clubedodono.com/plan-checkout?plan=diamond",
      cta: "Assinar Diamond",
    },
  ] as Plan[],
};

export const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5566999177770&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+Clube+do+Dono.&type=phone_number&app_absent=0";

export const education = {
  title: ["Seu próximo avanço", "também passa pelo conhecimento."],
  text: "Cursos e mentorias com descontos exclusivos para membros do Clube do Dono.",
  stamp: ["Aprender.", "Aplicar.", "Evoluir."],
  image: educationBw,
  links: [
    { label: "Explorar cursos", href: null as string | null },
    { label: "Conhecer mentorias", href: null as string | null },
  ],
  whatsappLabel: "Falar no WhatsApp",
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
  about:
    "O Clube do Dono é um clube de benefícios para barbeiros e donos de barbearia: produtos com condições especiais, cursos, mentorias e uma comunidade que leva a profissão a sério.",
  /** Informe as URLs oficiais das redes sociais. */
  social: [
    { label: "Instagram", href: null as string | null },
    { label: "Facebook", href: null as string | null },
  ],
  clubLinks: [
    { label: "O clube", href: "/#o-clube" },
    { label: "Benefícios", href: "/#produtos" },
    { label: "Vídeos", href: "/#videos" },
    { label: "Planos", href: "/#planos" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos-de-uso" },
    { label: "Política de Cookies", href: "/politica-de-cookies" },
    { label: "Política de Reembolso", href: "/politica-de-reembolso" },
  ],
};
