# 🎓 Gerenciador de Tarefas Acadêmicas

**🔗 [Acessar a Aplicação no GitHub Pages](https://edh74.github.io/Gerenciador-Academico/)**

Um aplicativo web estilo **Kanban** desenvolvido para organizar projetos e tarefas acadêmicas. O sistema baseia-se em uma arquitetura front-end moderna, focada na centralização do estado da aplicação, renderização dinâmica de interface e tratamentos assíncronos.

## 🚀 Funcionalidades

* **Quadro Kanban Interativo:** As tarefas são distribuídas visualmente em quatro colunas dinâmicas: *A fazer*, *Em andamento*, *Em revisão* e *Concluída*[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span).
* **Gerenciamento de Estado Único:** O aplicativo opera com um ciclo de vida baseado em 4 estados principais (`carregando`, `sucesso`, `vazio` e `erro`), garantindo que a interface sempre reflita a situação real dos dados[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span).
* **Filtros e Buscas:** Um painel de controle permite filtrar os cartões por título, status e nível de prioridade (Alta, Média, Baixa) sem mutar o banco de dados original[span_4](start_span)[span_4](end_span)[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span). Contém botões de "Pesquisar" e "Limpar Filtros[span_7](start_span)"[span_7](end_span).
* **Acessibilidade Embutida:** Uso de uma região de status (`#aviso`) com atributos `role="status"` e `aria-live="polite"`, desenhada para anunciar mudanças de estado aos leitores de tela[span_8](start_span)[span_8](end_span)[span_9](start_span)[span_9](end_span).
* **Design Responsivo & CSS Moderno:** O layout utiliza CSS Grid dinâmico para se adaptar a telas menores (mobile-first a partir de 320px) até monitores grandes (1024px+), aliado a um sistema de variáveis (`:root`) para padronização de cores[span_10](start_span)[span_10](end_span).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Semântico e estruturado.
* **CSS3:** Flexbox, Grid Layout, Media Queries e Variáveis Customizadas[span_11](start_span)[span_11](end_span).
* **JavaScript (ES6+):** 
  * Estruturado em módulos (`type="module"`)[span_12](start_span)[span_12](end_span).
  * Funções assíncronas (`async/await`) e `fetch API` para consumo do arquivo `dados.json` local[span_13](start_span)[span_13](end_span).
  * Renderização de DOM (criação e limpeza de elementos de forma programática)[span_14](start_span)[span_14](end_span).

## 📁 Estrutura de Arquivos

* `index.html`: Marcação estrutural e formulários de controle[span_15](start_span)[span_15](end_span).
* `style.css`: Estilização e design system[span_16](start_span)[span_16](end_span).
* `dados.json`: Arquivo de dados (Mock) com 10 tarefas mapeadas contendo id, título, status, prioridade e prazo[span_17](start_span)[span_17](end_span).
* `renderizar.js`: Módulo principal que centraliza o estado do app e coordena os ouvintes de evento[span_18](start_span)[span_18](end_span).
* `js/api.js`: Módulo isolado responsável apenas por requisições e validação HTTP[span_19](start_span)[span_19](end_span).
* `js/estado.js`: Módulo de interface que decide o que renderizar e aplicar os filtros na tela[span_20](start_span)[span_20](end_span).

---
**Autor:** Eduardo Araujo | Desenvolvimento Front-end[span_21](start_span)[span_21](end_span)
