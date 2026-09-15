# Bloco 02 — "O clube" com mais vida

Mesmas cores de hoje (preto, marfim, dourado). O que muda é o ritmo: menos texto corrido, mais destaque visual e a mesma fonte forte dos slides.

## O que muda

**1. Título na fonte dos slides**
"Você domina o corte. Amplie suas possibilidades." passa a usar a mesma fonte de impacto do topo do site, em caixa alta, com "Amplie suas possibilidades." em dourado itálico para dar contraste. Fica maior e mais bonito que o texto atual.

**2. Menos texto**
O parágrafo longo encurta para duas linhas diretas:
"Quem vive da barbearia decide todo dia: o que comprar, onde investir, como crescer. O clube existe para facilitar essas escolhas."
Nada de dado novo inventado — só corte do que já está escrito.

**3. Foto ao lado do título**
Uma imagem do clube (a da barbearia que já usamos) entra à direita, recortada em formato alto, com leve zoom ao passar o mouse e um detalhe dourado na borda. É o que dá "vida" ao bloco.

**4. Os três pilares viram cartões**
Hoje são três textos soltos. Passam a ser três cartões com fundo levemente destacado, número grande em dourado, ícone discreto, título e uma linha curta. Ao passar o mouse, o cartão sobe um pouco e a borda acende em dourado.
- 01 Compre com vantagem
- 02 Invista no seu talento
- 03 Faça parte do clube

**5. Faixa de destaque antes dos botões**
Uma faixa fina, escura, com três marcas rápidas do clube (descontos em produtos, eventos e cursos, comunidade de donos) para quebrar o branco e preparar os botões.

**6. Botões**
Continuam "Fazer parte do clube" e "Ver como o clube funciona", com o mesmo movimento arredondado do resto do site.

## Detalhes técnicos

- `src/content/club.ts`: `clubIntro` ganha `titleAccent` (linha em dourado), texto encurtado, `image` (`hero-shop.jpg` + alt), `icon` em cada pilar e um array `marquee` com as três marcas da faixa.
- `src/components/club/ClubBenefits.tsx`: grid título+foto (`lg:grid-cols-[1.05fr_0.95fr]`), `h2` com a utility `display` e `clamp(2.4rem,5vw,4rem)`, pilares em cartões (`rounded-2xl`, borda, hover `-translate-y-1`), faixa em `bg-ink/95`, ícones do `lucide-react`.
- Só tokens existentes (`gold`, `ink`, `ivory`, `muted-foreground`); nenhuma cor nova.
- `Reveal` mantido para a animação de entrada; respeita `prefers-reduced-motion`.
- Validação: `bunx tsgo --noEmit` e captura em 1440/834/390 px.
