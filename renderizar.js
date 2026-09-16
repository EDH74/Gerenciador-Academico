import {redenrizarEstado, queryFilter} from "./js/estado.js"
import {carregarTarefas} from "./js/api.js"
const botaoPesquisar = document.querySelector("#pesquisar");
const botaoLimparFiltros = document.querySelector("#limparFiltros");

console.log("botaoPesquisar: ", botaoPesquisar);


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
        }
    }catch(e){
        console.log(e)
        estadoApp.estadoAtual = "erro";
        renderizarEstado("erro", e)
    }
}

iniciarQuadro();



botaoPesquisar.addEventListener("click", (e) => {
    queryFilter();
});

botaoLimparFiltros.addEventListener("click", (e) => {
    console.log("clicou no botao limpar filtros");
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
