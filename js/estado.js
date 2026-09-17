export function redenrizarEstado(estado, dados=null){
    const alerta = document.querySelector("#aviso"); 
    alerta.style.backgroundColor = "#f9b6bc";

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
        const qntTarefas = dados ? dados.length : 0;
        alerta.textContent = `Foram carregadas ${qntTarefas} tarefas com sucesso!`;

        limparQuadro();

        const cartoes = dados.map((e) => criarCartao(e));
        alerta.style.backgroundColor = "#8cd495c8";
        return carregarTarefas(cartoes);
    }
}

export function queryFilter(estado, dados=null){
    const filtroTitulo = document.querySelector("#filtroTitulo input").value;
    const filtroStatus = document.querySelector('input[name="status"]:checked').value;
    const filtroPrioridade = document.querySelector("input[name='prioridade']:checked").value;

    alerta.style.backgroundColor = "#f9b6bc";
    
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


            if (filtroTitulo.toUpperCase() == e.titulo.toUpperCase()){
                cartoes.push(criarCartao(e));
            }else if (filtroStatus == e.status){
                if (!(cartoes.includes(e))) cartoes.push(criarCartao(e));
            }else if (filtroPrioridade == e.prioridade){
                if (!(cartoes.includes(e))) cartoes.push(criarCartao(e));
            }

        });
        alerta.style.backgroundColor = "#8cd495c8";
        alerta.textContent = `Foram carregadas ${cartoes.length} tarefas com sucesso!`;
        return carregarTarefas(cartoes);
    }
    
}


function criarCartao(tarefa) {
    const cartao = document.createElement("article");
    cartao.classList.add(tarefa.status);
    cartao.classList.add("card");
    cartao.id = tarefa.id
    cartao.setAttribute("draggable", true);
    
    const titulo = document.createElement("h3");
    titulo.textContent = tarefa.titulo;


    const divInfo = document.createElement("div");

    const pTitulo = document.createElement("p");
    pTitulo.classList.add("tituloCard");
    pTitulo.innerHTML= `<strong>Titulo:</strong> ${tarefa.titulo}`;

    const pDescricao = document.createElement("p");
    pDescricao.classList.add("descricaoCard");
    pDescricao.innerHTML = `<strong>Descrição:</strong> ${tarefa.descricao}`;

    divInfo.append(pTitulo);
    divInfo.append(pDescricao);

    const divFooterCard = document.createElement("div");
    divFooterCard.classList.add("footerCard");

    const pPrazo = document.createElement("p");
    pPrazo.classList.add("prazoCard");
    pPrazo.innerHTML = tarefa.prazo;


    const status = document.createElement("p");
    status.classList.add("nivelPrioridade");
    status.classList.add(tarefa.prioridade);
    status.innerHTML = captalizer(tarefa.prioridade)

    divFooterCard.append(status);
    divFooterCard.append(pPrazo)
    
    cartao.append(titulo);
    cartao.append(divInfo);
    cartao.append(divFooterCard);

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