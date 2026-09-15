export async function carregarTarefas(){
    try{
        const response = await fetch("./../dados.json")
        
        if (!response.ok) return new Error("Erro ao carregar tarefas: " + response.statusText);

        const tarefas = await response.json();

        const tarefasArr = tarefas.tarefas;
        
        const tamArr = tarefas.tarefas.length;

        if (tamArr == 0) return new Error(`Nenhuma tarefa encontrada`);
        
        return tarefas.tarefasArr
    }catch(e){
        return new Error(e.message);
    }
}
