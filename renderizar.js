import {tarefas} from "./js/api.js"; 

const quadro = document.querySelector("#projetos");


function criarCartao(tarefa) {
    const cartao = document.createElement("article");
    cartao.id = tarefa.status;
    
    const titulo = document.createElement("h3");
    titulo.textContent = tarefa.titulo;

    const button = document.createElement("button");
    button.class = "cardButton";
    button.innerText = "X";

    const p = document.createElement("p");
    p.innerHTML = `<strong>Titulo:</strong> ${tarefa.titulo} <br><strong>Descrição:</strong> ${tarefa.descricao}; <br><strong>Prazo: </strong> ${tarefa.prazo};`


    const status = document.createElement("p");
    let prioridade = tarefa.prioridade;
    status.innerHTML = `<p><span class="nivelPrioridade ${tarefa}">${tarefa.charAt(0).toUpperCase() + tarefa.slice(1)}</span></p>`;

    
    cartao.append(titulo);
    cartao.append(p);
    cartao.append(status);

    return cartao;
}



quadro.addEventListener("click", (evento) => {
    if (!(evento.target instanceof Element)) return;
    const botao = evento.target.closest('button[data-acao="ver-detalhes"]');
    if (!botao | !quadro.contains(botao)) return;
    const cartao = botao.closest("[data-tarefa-id]");
    const tarefa = tarefas.find((item) => item.id = cartao .dataset.tarefaId);
    if (!tarefa) return;
    console.log("Detalhes da tarefa:", tarefa);
});



const cartoes = tarefas.map((e) => criarCartao(e));




console.log(lista.children.length, cartoes.length);
