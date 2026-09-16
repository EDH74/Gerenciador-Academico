# 🎓 Gerenciador de Tarefas Acadêmicas

**🔗 [Acessar a Aplicação no GitHub Pages](https://edh74.github.io/Gerenciador-Academico/)**

Um aplicativo web estilo **Kanban** desenvolvido para organizar projetos e tarefas acadêmicas. O sistema baseia-se em uma arquitetura front-end moderna, focada na centralização do estado da aplicação, renderização dinâmica de interface e tratamentos assíncronos.

## 🚀 Funcionalidades

* **Quadro Kanban Interativo:** As tarefas são distribuídas visualmente em quatro colunas dinâmicas: *A fazer*, *Em andamento*, *Em revisão* e *Concluída*.
* **Gerenciamento de Estado Único:** O aplicativo opera com um ciclo de vida baseado em 4 estados principais (`carregando`, `sucesso`, `vazio` e `erro`), garantindo que a interface sempre reflita a situação real dos dados.
* **Filtros e Buscas:** Um painel de controle permite filtrar os cartões por título, status e nível de prioridade (Alta, Média, Baixa) sem mutar o banco de dados original. Contém botões de "Pesquisar" e "Limpar Filtros".
* **Acessibilidade Embutida:** Uso de uma região de status (`#aviso`) com atributos `role="status"` e `aria-live="polite"`, desenhada para anunciar mudanças de estado aos leitores de tela.
* **Design Responsivo & CSS Moderno:** O layout utiliza CSS Grid dinâmico para se adaptar a telas menores (mobile-first a partir de 320px) até monitores grandes (1024px+), aliado a um sistema de variáveis (`:root`) para padronização de cores.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Semântico e estruturado.
* **CSS3:** Flexbox, Grid Layout, Media Queries e Variáveis Customizadas.
* **JavaScript (ES6+):** 
  * Estruturado em módulos (`type="module"`).
  * Funções assíncronas (`async/await`) e `fetch API` para consumo do arquivo `dados.json` local.
  * Renderização de DOM (criação e limpeza de elementos de forma programática).

## 📁 Estrutura de Arquivos

* `index.html`: Marcação estrutural e formulários de controle.
* `style.css`: Estilização e design system.
* `dados.json`: Arquivo de dados (Mock) com 10 tarefas mapeadas contendo id, título, status, prioridade e prazo.
* `renderizar.js`: Módulo principal que centraliza o estado do app e coordena os ouvintes de evento.
* `js/api.js`: Módulo isolado responsável apenas por requisições e validação HTTP.
* `js/estado.js`: Módulo de interface que decide o que renderizar e aplicar os filtros na tela.

---
**Autor:** Eduardo Araujo | Desenvolvimento Front-end
