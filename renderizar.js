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
    if (estadoApp.erro) return queryFilter("erro", estadoApp.erro);
    if (estadoApp.tarefas.length == 0) return queryFilter("vazio");
    

    return redenrizarEstado("sucesso",filtroBusca(estadoApp));
});

botaoLimparFiltros.addEventListener("click", (e) => {
    document.querySelector("#filtroTitulo input").value = "";
    document.querySelector('#statusFiltro input[name="status"]:checked').checked = true;
    document.querySelector('#prioridadeFiltro input[name="prioridade"]:checked').checked = true;

    return redenrizarEstado("sucesso", estadoApp.tarefas)

});


//filtro usado para filtrar as tarefas de acordo com os filtros selecionados pelo usuário


console.log(filtroStatus, filtroPrioridade);


function filtroBusca(estadoApp){
    const filtroTitulo = document.querySelector("#filtroTitulo input").value;
    const filtroStatus = document.querySelector('#statusFiltro input[name="status"]:checked')?.value || "todos";
    const filtroPrioridade = document.querySelector('#prioridadeFiltro input[name="prioridade"]:checked')?.value || "todos";

    console.log(filtroStatus, filtroPrioridade);

    return estadoApp.tarefas
    .filter(tarefa => filtroTitulo === "" || tarefa.titulo.toLowerCase().includes(filtroTitulo.toLowerCase()))
    .filter(tarefa => filtroStatus.toLowerCase().trim() == "todos" || tarefa.status == filtroStatus.trim())
    .filter(tarefa => filtroPrioridade.toLowerCase() == "todos" || tarefa.prioridade == filtroPrioridade.trim());
}

