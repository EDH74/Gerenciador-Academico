import {redenrizarEstado, filtroBusca} from "./js/estado.js"
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
    estadoApp.prioridade = document.querySelector('#prioridadeFiltro input[name="prioridade"]:checked')?.value || "todos";
    estadoApp.busca = document.querySelector("#filtroTitulo input").value;


    if (estadoApp.erro) return queryFilter("erro", estadoApp.erro);
    if (estadoApp.tarefas.length == 0) return queryFilter("vazio");
    

    let arryFiltrado = filtroBusca(estadoApp);

    return redenrizarEstado("sucesso", arryFiltrado);
});

botaoLimparFiltros.addEventListener("click", (e) => {
    document.querySelector("#filtroTitulo input").value = "";
    document.querySelector('#statusFiltro input[name="status"]:checked').checked = true;
    document.querySelector('#prioridadeFiltro input[name="prioridade"]:checked').checked = true;

    return redenrizarEstado("sucesso", estadoApp.tarefas)

});

document.querySelector("#statusFiltro").addEventListener("change", (e) => {
    estadoApp.status = !e.target.value ? "todos" : e.target.value;

    
    let arrayFiltrado = filtroBusca(estadoApp);

    if(!arrayFiltrado || arrayFiltrado.length == 0) estadoApp.erro = "vazio";

    return redenrizarEstado("sucesso", arrayFiltrado);
});





document.querySelector("#prioridadeFiltro").addEventListener("change", (e) => {
    estadoApp.prioridade = !e.target.value ? "todas" : e.target.value;


    let arryFiltrado = filtroBusca(estadoApp);
    if(!arryFiltrado || arryFiltrado.length == 0) redenrizarEstado("vazio");


    return redenrizarEstado("sucesso", arryFiltrado);
});