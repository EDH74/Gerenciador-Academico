export function redenrizarEstado(estado, dados=null){
    const alerta = document.querySelector("#alerta"); 
        
    if (alerta) alerta.style.display = "block";

    if (estado == "carregando"){
        alerta.textContent = `Estamos carregando as tarefas...`;
    } else if(estado == "vazio"){
        alerta.textContent = `Nenhuma tarefa encontrada`;
    } else if(estado == "erro"){
        if (dados instanceof TypeError) {
            alerta.textContent = `Erro ao conectar no servidor. Tente novamente mais tarde!`;
        } else if (dados instanceof SyntaxError) {
            alerta.textContent = "Erro de tipo: O arquivo JSON contem erro sintatico.";
        } else if (dados instanceof Error){
            alerta.textContent = `Erro: ${dados.message}`;
        }
    }else if(estado == "sucesso"){
        alerta.classList.add("sucesso");
        const qntTarefas = dados ? dados.tarefas.length : 0;
        alerta.textContent = `Foram carregadas ${qntTarefas} tarefas com sucesso!`;

        limparQuadro();

        cartoes = dados.tarefas.map((e) => criarCartao(e));
        return carregarTarefas(cartoes);
    }
}


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


function limparQuadro(){
    const quadroAfazer = quadro.querySelector("#aFazer ul");
    const quadroEmAndamento = quadro.querySelector("#EmAndamento ul");
    const quadroEmRevisao = quadro.querySelector("#EmRevisao ul");
    const quadroConcluido = quadro.querySelector("#Concluido ul");

    quadroAfazer.innerHTML = "";
    quadroEmAndamento.innerHTML = "";
    quadroEmRevisao.innerHTML = "";
    quadroConcluido.innerHTML = "";
}

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

function captalizer(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}