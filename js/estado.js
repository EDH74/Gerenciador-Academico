export function redenrizarEstado(estado, dados=null){
    const alerta = document.querySelector("#aviso"); 
        
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
        alerta.classList.remove("alerta");
        alerta.classList.add("sucesso");
        const qntTarefas = dados ? dados.length : 0;
        alerta.textContent = `Foram carregadas ${qntTarefas} tarefas com sucesso!`;

        limparQuadro();

        const cartoes = dados.map((e) => criarCartao(e));
        return carregarTarefas(cartoes);
    }
}

export function queryFilter(estado, dados=null){
    const filtroTitulo = document.querySelector("#filtroTitulo input").value;
    const filtroStatus = document.querySelector('input[name="status"]:checked').value;
    const filtroPrioridade = document.querySelector("input[name='prioridade']:checked").value;

    
    /*
    console.log("filtroTitulo: ", filtroTitulo.value);
    console.log("filtroStatus: ", filtroStatus.value);
    console.log("filtroPrioridade: ", filtroPrioridade.value);    
    */



    const alerta = document.querySelector("#aviso"); 
        
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
        alerta.classList.remove("alerta");
        alerta.classList.add("sucesso");
        

        limparQuadro();

        const cartoes = [];

        dados.map((e) => {
            cartoes.push(criarCartao(e));
        });
        alerta.textContent = `Foram carregadas ${cartoes.length} tarefas com sucesso!`;
        return carregarTarefas(cartoes);
    }
    
}


function criarCartao(tarefa) {
    const cartao = document.createElement("article");
    cartao.classList.add(tarefa.status);
    cartao.classList.add("Todos");
    
    const titulo = document.createElement("h3");
    //cartao.classList.add(tarefa.titulo);
    titulo.textContent = tarefa.titulo;

    const p = document.createElement("p");
    p.innerHTML = `<strong>Titulo:</strong> ${tarefa.titulo} <br><strong>Descrição:</strong> ${tarefa.descricao}; <br><strong>Prazo: </strong> ${tarefa.prazo};`
    p.classList.add("titulo");


    const status = document.createElement("p");
    let prioridade = tarefa.prioridade;
    cartao.classList.add(prioridade);
    status.innerHTML = `<p><span class="nivelPrioridade ${tarefa.prioridade}">${captalizer(tarefa.prioridade)}</span></p>`;

    
    cartao.append(titulo);
    cartao.append(p);
    cartao.append(status);

    return cartao;
}


function limparQuadro(){
    const quadroAfazer = document.querySelector("#aFazer ul");
    const quadroEmAndamento = document.querySelector("#EmAndamento ul");
    const quadroEmRevisao = document.querySelector("#EmRevisao ul");
    const quadroConcluido = document.querySelector("#Concluido ul");

    quadroAfazer.innerHTML = "";
    quadroEmAndamento.innerHTML = "";
    quadroEmRevisao.innerHTML = "";
    quadroConcluido.innerHTML = "";
}

function carregarTarefas(cards) {
    const quadroAfazer = document.querySelector("#aFazer ul");
    const quadroEmAndamento = document.querySelector("#EmAndamento ul");
    const quadroEmRevisao = document.querySelector("#EmRevisao ul");
    const quadroConcluido = document.querySelector("#Concluido ul");


    for(let card of cards) {
        const li = document.createElement("li");  //criando li e adicionando o article dentro dela
        li.append(card);


        if (card.classList.contains("concluido")) {
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