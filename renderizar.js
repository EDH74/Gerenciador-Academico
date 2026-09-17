import {redenrizarEstado, queryFilter} from "./js/estado.js"
import {carregarTarefas} from "./js/api.js"
const botaoPesquisar = document.querySelector("#pesquisar");
const botaoLimparFiltros = document.querySelector("#limparFiltros");



const estadoApp = {
    tarefas: [], // Originais intocadas
    busca: "",
    status: "todos", // Requer ajuste no HTML
    prioridade: "todas",
    ordenacao: "prazo_crescente",
    estadoAtual: "carregando", 
    erro: null
};


async function iniciarQuadro(){

    redenrizarEstado("carregando");
    estadoApp.estadoAtual = "carregando";
    try{
        const tarefas = await carregarTarefas();
        estadoApp.tarefas = [...tarefas];

        if (tarefas.length == 0){
            redenrizarEstado("vazio");
            estadoApp.estadoAtual = "vazio";
        } else{
            redenrizarEstado("sucesso", tarefas);
            estadoApp.estadoAtual = "sucesso"
        }
    }catch(e){
        console.log(e)
        estadoApp.estadoAtual = "erro";
        estadoApp.erro = e;
        renderizarEstado("erro", e)
    }
}

iniciarQuadro();



botaoPesquisar.addEventListener("click", (e) => {
    if (estadoApp.erro) return queryFilter("erro", estadoApp.erro)
    if (estadoApp.tarefas.length == 0) return queryFilter("vazio")
    
    return queryFilter("sucesso", estadoApp.tarefas);
});

botaoLimparFiltros.addEventListener("click", (e) => {
    document.querySelector("#filtroTitulo input").value = "";
    document.querySelector('#fazerFiltro').checked = true;
    document.querySelector('#prioridadeFiltro').checked = true;

    return queryFilter(redenrizarEstado("sucesso", estadoApp.tarefas))

});
/*
function criarCartao(tarefa) {
    const cartao = document.createElement("article");
    cartao.classList.add(tarefa.status);
    
    const titulo = document.createElement("h3");
    titulo.textContent = tarefa.titulo;

    const button = document.createElement("button");
    button.classList.add("cardButton");
    button.innerText = "X";

    const p = document.createElement("p");
    p.innerHTML = `<strong>Titulo:</strong> ${tarefa.titulo} <br><strong>Descrição:</strong> ${tarefa.descricao}; <br><strong>Prazo: </strong> ${tarefa.prazo};`


    const status = document.createElement("p");
    let prioridade = tarefa.prioridade;
    status.innerHTML = `<p><span class="nivelPrioridade ${tarefa.prioridade}">${captalizer(tarefa.prioridade)}</span></p>`;

    
    cartao.append(titulo);
    cartao.append(button);
    cartao.append(p);
    cartao.append(status);

    return cartao;
}
*/

/*
function carregarTarefas(cards) {
    const quadro = document.querySelector("#projetos");
    const quadroAfazer = quadro.querySelector("#aFazer");
    const quadroEmAndamento = quadro.querySelector("#EmAndamento");
    const quadroEmRevisao = quadro.querySelector("#EmRevisao");
    const quadroConcluido = quadro.querySelector("#Concluido");


    for(let card of cards) {
        const li = document.createElement("li");  //criando li e adicionando o article dentro dela
        li.append(card);

        console.log(card.class);
        

        if (card.classList.contains("concluido")) {
            console.log("entrou no if concluido");
            quadroConcluido.appendChild(li);

        } else if(card.classList.contains("em_progresso")) {
            quadroEmAndamento.appendChild(li);

        } else if(card.classList.contains("em_revisao")) {
            quadroEmRevisao.append(li);

        } else if(card.classList.contains("a_fazer")) {
            quadroAfazer.appendChild(li);
        }
    }
        
}
*/
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const containers = document.querySelectorAll('.cards-container');

  // 1. Adicionando eventos em cada CARD
  cards.forEach(card => {
    // Quando começa a arrastar
    card.addEventListener('dragstart', (e) => {
      // Guarda o ID do card que está sendo arrastado
      e.dataTransfer.setData('text/plain', e.target.id);
      
      // Adiciona uma classe para dar um efeito visual (opcional)
      setTimeout(() => {
        e.target.classList.add('dragging');
      }, 0);
    });

    // Quando termina de arrastar
    card.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });
  });

  // 2. Adicionando eventos em cada COLUNA (Dropzones)
  containers.forEach(container => {
    // Quando um card passa por cima da coluna
    container.addEventListener('dragover', (e) => {
      e.preventDefault(); // Obrigatório para permitir que o elemento seja solto
      container.classList.add('drag-over'); // Efeito visual de hover
    });

    // Quando o card sai de cima da coluna sem ser solto
    container.addEventListener('dragleave', (e) => {
      container.classList.remove('drag-over');
    });

    // Quando o card é finalmente solto na coluna
    container.addEventListener('drop', (e) => {
      e.preventDefault();
      container.classList.remove('drag-over');
      
      // Recupera o ID do card que guardamos no 'dragstart'
      const cardId = e.dataTransfer.getData('text/plain');
      const draggedCard = document.getElementById(cardId);
      
      // Move o card fisicamente no DOM para a nova coluna
      if (draggedCard) {
        container.appendChild(draggedCard);
      }
    });
  });
});