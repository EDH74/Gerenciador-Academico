async function carregarTarefas(){
    try{
        const response = await fetch("./../dados.json")
        
        if (!(response.ok)) return new Error(`Error: ${e.status}`);

        const tarefas = await response.json();
        
        return tarefas
    }catch(e){
        console.log(e);
    }
}

export const tarefas = await carregarTarefas();