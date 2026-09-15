# Slide inicial: menos texto, mais mensagem

Hoje o topo mostra três fotos que se alternam, mas o texto é sempre o mesmo: uma chamada grande, um parágrafo longo, dois botões e ainda uma frase de apoio embaixo. Resultado: bloco muito alto e leitura pesada.

A proposta é transformar o topo num slider de mensagens: cada imagem passa a carregar uma ideia só.

## O que muda

1. **Altura menor**
   O topo deixa de ocupar a tela inteira e passa a ocupar cerca de 80% dela (com um mínimo no celular). Mesma largura total, imagem full-bleed como está hoje — só mais baixo e mais elegante.

2. **Texto curto e por slide**
   Sai o parágrafo longo e a frase de apoio no rodapé do bloco. Cada slide fica com:
   - uma linha pequena em dourado (contexto),
   - um título curto (até ~4 palavras por linha),
   - uma frase de apoio de uma linha só.

3. **Três mensagens, uma por slide** (texto proposto, ajustável)
   - Slide 1 — foto da cadeira
     Clube de benefícios para barbeiros
     "Talento na cadeira. Visão de Dono."
     Um clube feito para quem vive da barbearia.
   - Slide 2 — foto da barbearia
     Produtos
     "Compre melhor. Lucre mais."
     Descontos em todo o catálogo do Clube, conforme o seu plano.
   - Slide 3 — foto das ferramentas
     Educação e comunidade
     "Evolua com quem faz."
     Cursos e mentorias com condições exclusivas para membros.

4. **Botões fixos**
   "Conhecer os planos" e "Ver como o clube funciona" ficam parados abaixo do texto — não trocam junto com os slides, para não piscar a cada troca.

5. **Transição**
   A imagem e o texto trocam juntos, com um leve fade e subida do texto. Troca automática a cada 6 segundos, pausando quando o mouse está sobre o bloco. Os pontinhos continuam e permitem trocar na mão. Quem usa "reduzir animações" vê o primeiro slide fixo.

Nada de preços, benefícios ou links novos: os textos acima só reorganizam o que o clube já oferece.

## Detalhes técnicos

- `src/content/club.ts`: `hero.images` vira `hero.slides`, cada item com `src`, `alt`, `position`, `eyebrow`, `titleLines`, `titleAccent` (opcional) e `text`. Campos antigos `eyebrow/titleLines/titleAccent/text/support/caption` saem; `primaryCta`/`secondaryCta` permanecem.
- `src/components/club/Hero.tsx`: altura `min-h-[80svh]` (com `min-h-[560px]` de piso), padding vertical reduzido; o bloco de texto é renderizado a partir do slide ativo com `key={index}` e uma animação de fade/translate; `h1` com `clamp` um pouco menor (ex.: `clamp(2.6rem,6.5vw,5.2rem)`); remove a legenda do canto direito e a linha de apoio.
- Autoplay pausa em `mouseenter`/`focus-within`; `prefers-reduced-motion` mantém slide fixo.
- Validação: `bunx tsgo --noEmit` e captura Playwright em 1440 / 834 / 390 px.
