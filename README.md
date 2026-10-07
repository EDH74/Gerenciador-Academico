# 🎓 Gerenciador de Tarefas Acadêmicas

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://edh74.github.io/Gerenciador-Academico/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Semântico-orange?style=for-the-badge&logo=html5)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Grid%20%26%20Flexbox-blue?style=for-the-badge&logo=css3)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

> Um sistema web no formato **Kanban** desenvolvido para simplificar o acompanhamento e a gestão de entregas e tarefas no ambiente acadêmico e de projetos.

👉 **[Clique aqui para acessar o projeto online no GitHub Pages](https://edh74.github.io/Gerenciador-Academico/)**

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura e Gestão de Estado](#-arquitetura-e-gestão-de-estado)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar Localmente](#-como-executar-localmente)
- [Autor](#-autor)

---

## 💻 Visão Geral

O **Gerenciador de Tarefas Acadêmicas** organiza ativides em colunas visuais de acordo com o estágio de progresso. A aplicação consome dados assíncronos a partir de uma API simulada (`dados.json`), gerenciando todo o ciclo de vida da interface com base em estados centralizados (carregamento, sucesso, resultados vazios e tratamento de erros).

![Layout Kanban](https://via.placeholder.com/800x400.png?text=Preview+do+Gerenciador+de+Tarefas+Academicas) <!-- Substitua pela imagem real do seu projeto -->

---

## ✨ Funcionalidades Principais

- 📋 **Quadro Kanban Dinâmico:** Organização automática das tarefas em quatro fases:
  - **A Fazer**
  - **Em Andamento**
  - **Em Revisão**
  - **Concluída**
- 🔍 **Filtros Combinados:**
  - **Busca por Título:** Filtragem em tempo real com leitura case-insensitive.
  - **Filtro por Status:** Visualização por etapas específicas ou todas juntas.
  - **Filtro por Prioridade:** Classificação por nível de urgência (*Baixa*, *Média*, *Alta*).
- 🧹 **Reset de Filtros:** Botão dedicado para limpar as seleções e restaurar o quadro completo.
- ♿ **Acessibilidade (a11y):** Utilização de `role="status"` e `aria-live="polite"` para notificar leitores de tela sobre alterações no estado da aplicação.
- 📱 **Design Responsivo:** Layout adaptável construído com **CSS Grid** e **Flexbox**, otimizado para dispositivos mobile, tablets e desktops (break-points em 320px, 640px e 1024px).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica utilizando `<main>`, `<section>`, `<article>`, `<fieldset>` e acessibilidade WAI-ARIA.
- **CSS3:**
  - Variáveis customizadas (`:root`) para consistência de cores e temas.
  - CSS Grid e Flexbox para posicionamento dos cartões e formulários.
  - Media queries para design responsivo.
- **JavaScript (ES6+):**
  - Arquitetura baseada em **ES Modules** (`import` / `export`).
  - Requisições assíncronas via `fetch` API e `async/await`.
  - Manipulação otimizada da DOM e criação programática de elementos.

---

## 📐 Arquitetura e Gestão de Estado

A aplicação segue o padrão de **Fluxo Unidirecional** e estado global centralizado no objeto `estadoApp`:

```javascript
const estadoApp = {
    tarefas: [],          // Banco de dados imutável no front-end
    busca: "",            // Termo de busca ativo
    status: "todos",      // Filtro de status ativo
    prioridade: "todos",   // Filtro de prioridade ativo
    estadoAtual: "",      // "carregando" | "sucesso" | "vazio" | "erro"
    erro: null            // Detalhes de exceções caso ocorram
};
```

### Fluxo de Funcionamento:
1. **Módulo API (`js/api.js`):** Efetua o `fetch` no arquivo `dados.json` com tratamento de erros HTTP.
2. **Módulo de Estado (`js/estado.js`):** Gerencia a criação dinâmica dos cartões na DOM (`criarCartao`), limpa as colunas do quadro e atualiza a mensagem de aviso na tela.
3. **Controlador Principal (`renderizar.js`):** Centraliza os ouvintes de eventos dos botões e coordena as chamadas de filtro e renderização.

---

## 📁 Estrutura do Projeto

```text
Gerenciador-Academico/
├── js/
│   ├── api.js         # Módulo responsável por buscar e validar os dados JSON
│   └── estado.js      # Módulo responsável pelo gerenciamento de estado e DOM
├── index.html         # Estrutura principal da página
├── style.css          # Estilização global e breakpoints responsivos
├── renderizar.js      # Script controlador e manipulador de eventos
├── dados.json         # Arquivo Mock com a lista inicial de tarefas
└── README.md          # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Como o projeto faz uso de **ES Modules** (`import/export`) e requisições via `fetch`, ele precisa ser executado por meio de um servidor HTTP local.

### Opção 1: Extensão Live Server (VS Code)
1. Instale a extensão **Live Server** no VS Code.
2. Abra o projeto no VS Code.
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.

### Opção 2: Python HTTP Server
Caso tenha o Python instalado, execute no terminal na raiz do projeto:

```bash
python -m http.server 8000
```

Em seguida, abra o navegador em `http://localhost:8000`.

---

## 👤 Autor

Desenvolvido por **Eduardo Araujo**  
*Disciplina de Desenvolvimento Front-end*

[![GitHub](https://img.shields.io/badge/GitHub-edh74-181717?style=flat&logo=github)](https://github.com/edh74)