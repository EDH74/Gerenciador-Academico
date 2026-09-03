async function gerarJsonTarefas(){
    try{
        const tarefaJson = await fetch("./../dados.json");
        const tarefaText = await tarefaJson.json();
        return tarefaText;
    }catch(e){
        console.log(e);
    }
}

export const tarefas = await gerarJsonTarefas();