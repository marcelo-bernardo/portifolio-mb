# Portfólio — Marcelo Bernardo (React + Vite)

Redesign completo do portfólio, em React (Vite), com uma identidade visual autoral do zero.

## Conceito visual — "Estúdio Editorial"

- **Paleta**: grafite quente quase preto (`#0e0e10`) com **um único acento**, cobre (`#c98a4b`)
  — usado com moderação, nunca em excesso.
- **Tipografia com hierarquia de voz**: serifada **Fraunces** para nome, títulos e citação
  (dá peso editorial/autoral); **Manrope** para texto corrido (legibilidade); **IBM Plex Mono**
  só para metadados — numeração de seções, tags de projeto, labels.
- **Numeração editorial**: cada seção é identificada como `01 — Sobre`, `02 — Projetos` etc.,
  como um sumário de revista.
- **Retrato com moldura offset**: a foto de perfil tem um contorno cobre deslocado atrás dela
  (efeito de camadas), com leve dessaturação que desaparece no hover.
- **Projetos como lista/índice**, não cards genéricos — cada linha tem número, título grande,
  descrição e tags, com a linha inteira reagindo ao hover.
- **Contato dividido**: informações e redes sociais à esquerda, formulário minimalista
  (inputs com apenas linha inferior, sem caixas) à direita.

## Estrutura

```
index.html                   # fontes (Fraunces, Manrope, IBM Plex Mono) + raiz do React
src/main.jsx                  # ponto de entrada
src/App.jsx                   # orquestra seções, scroll-spy e navegação
src/index.css                  # design tokens: cores, fontes, espaçamentos, botões
src/data.js                    # todo o conteúdo (perfil, projetos, skills, contato, redes)
src/components/
  Header.jsx + .css              # topo fixo, nav em links de texto + menu mobile
  Hero.jsx + .css                  # abertura: nome grande + retrato com moldura
  About.jsx + .css                  # bio + citação + lista de fatos (01)
  Projects.jsx + ProjectCard.jsx + .css   # lista/índice de projetos (02)
  Skills.jsx + .css                  # habilidades em formato de tabela (03)
  ContactForm.jsx + .css              # contato dividido: info + formulário (04)
  Footer.jsx + .css
  Icons.jsx                            # ícones SVG inline, sem dependências
src/assets/perfil.png
`
