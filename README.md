# 🎓 Gerenciador de Tarefas Acadêmicas

Um aplicativo web estilo **Kanban** projetado para acompanhamento e organização de projetos e tarefas acadêmicas. O projeto foi desenvolvido com foco em arquitetura CSS moderna, boas práticas de front-end, acessibilidade e responsividade nativa (Mobile-First).

---

## 🚀 Funcionalidades & Requisitos Atendidos

* **Design System Mínimo (`:root`):** Configuração centralizada de variáveis CSS para cores de superfície, bordas, raio de canto, escalas de espaçamento e cores de cada status.
* **Layout Kanban em CSS Grid:** Colunas de status organizadas lado a lado em telas grandes e empilhadas em telas menores.
* **Cartões com Flexbox:** Estrutura interna flexível para cartões de tarefa com títulos, prioridades e prazos devidamente ancorados.
* **Truncamento de Títulos Longos:** Uso de `text-overflow: ellipsis` e `min-width: 0` para impedir estouro do layout nos cartões.
* **Responsividade Real (320px a 1920px):** Layout fluido sem rolagem horizontal, utilizando unidades relativas (`rem`), `clamp()` e pontos de quebra comentados.
* **Filtros e Busca:** Painel de controle para pesquisa por título, filtro por status (A Fazer, Em Andamento, Em Revisão, Concluída) e prioridades (Baixa, Média, Alta).
* **Acessibilidade:**
  * Foco visível otimizado para navegação via teclado (`:focus-visible`).
  * Contraste mínimo de cor garantido (4.5:1).
  * Alvos de clique dimensionados para toque.
  * Respeito às configurações de fonte do usuário (`rem`).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e limpa, livre de tags `<style>` ou atributos `style` inline.
* **CSS3:** Arquivo externo com `box-sizing: border-box` universal, CSS Grid, Flexbox, variáveis nativas e Media Queries mobile-first.

---

## 📁 Estrutura do Projeto

```text
Gerenciador-Academico/
├── index.html      # Estrutura semântica da aplicação
├── style.css       # Regras de estilo, layout e design system
└── README.md       # Documentação do projeto