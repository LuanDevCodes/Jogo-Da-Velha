let x = document.querySelector(".x");
let o = document.querySelector(".o");
let caixas = document.querySelectorAll(".caixas");
let botoes = document.querySelectorAll("#botoes-container button")
let mensagemContainer = document.querySelector("#mensagem");
let mensagemTexto = document.querySelector("#mensagem p");
let playerDois;
let jogoAtivo = true; //Criei para controlar e evitar "jogadas fantasmas" ao fim do jogo

//Contador de Jogadas
let player1 = 0;
let player2 = 0;

//Adicionando o click nas caixas
for(let y=0; y < caixas.length; y++){

    //Quando alguém clica na caixa
    caixas[y].addEventListener("click", function(){

    if(jogoAtivo == false){
        return; //Vai quebrar o código aqui se ele for falso, não permitindo mais entradas
    }

    let quem = checkQuem(player1, player2);

        if(this.childNodes.length == 0){ //Usamos para resolver o problema de duplicidade, verifica de tem X ou O

            let cloneQuem = quem.cloneNode(true); //Precisamops clonar a variável para utiliza-la depois
                                                  //Ele é clonado e utilizado em uma nova caixa a cada uso

            this.appendChild(cloneQuem); //Vai adicionar o elemento como filho de outro elemento, nesse caso os clicks

            //Computando a jogada e alterando entre X e O
            if(player1 == player2){
                player1++;

                checkVicCond(); //Estamos verificando se houve ganhador antes da IA jogar, estava bugando e ela jogava
                                //mesmo quando o jogador 1 já havia vencido

                if(jogoAtivo && playerDois == 'ai-jogador'){ //Só invoca ela caso o jogo esteja ativo

                    //Função para executar a jogada da IA
                    JogadorAI();
                    player2++;
                }

            }else{
                player2++;
                checkVicCond();
            }
        }
    });
}

//Evento de clicks nos botões, desativa e ativa o jogo
for(let x=0; x < botoes.length; x++){
    botoes[x].addEventListener("click", function(){

        playerDois = this.getAttribute("id"); //Atribuindo valor pro player2

        for(let y=0; y < botoes.length; y++){
            botoes[y].style.display = 'none'; //Estamos adicionando uma propriedade CSS
        }

        setTimeout(function(){

            let container = document.querySelector("#container");
            container.classList.remove("escondido");

            let containerPlacar = document.querySelector("#resultado-container");
            containerPlacar.classList.remove("escondido");
        }, 300);
    });
}

// ************* ÁREA DAS FUNÇÕES ************* //

//Adicionamos numa função para o código ficar mais limpo e de fácil visualização
//Ele vai dizer se é um ou outro
function checkQuem(player1, player2){
    let quem; //Ele vai dizer se é um ou outro

    if(player1 == player2){
        quem = x;
    }else{
        quem = o;
    }

    return quem;
}

//Vai verificar quem ganhou
function checkVicCond(){

    let verificador = false; //Outra variável de controle, essa me diz se alguém ganhou ou se é velha
    let c1 = document.getElementById("caixa-1");
    let c2 = document.getElementById("caixa-2");
    let c3 = document.getElementById("caixa-3");
    let c4 = document.getElementById("caixa-4");
    let c5 = document.getElementById("caixa-5");
    let c6 = document.getElementById("caixa-6");
    let c7 = document.getElementById("caixa-7");
    let c8 = document.getElementById("caixa-8");
    let c9 = document.getElementById("caixa-9");

    //HORIZONTAIS

    //***********-1-***********

    if(c1.childNodes.length > 0 && c2.childNodes.length > 0 && c3.childNodes.length > 0){

        let c1Child = c1.childNodes[0].className; //Estamos verificando se o que foi inserido foi um X ou O
                                                  //Como o O é um elemento criado e não um texto em si, precisamos
                                                  //encontra-lo por meio da classe que definimos no html

        let c2Child = c2.childNodes[0].className;
        let c3Child = c3.childNodes[0].className;

        if(c1Child == 'x' && c2Child == 'x' && c3Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c1Child == 'o' && c2Child == 'o' && c3Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //***********-2-***********

    if(c4.childNodes.length > 0 && c5.childNodes.length > 0 && c6.childNodes.length > 0){

        let c4Child = c4.childNodes[0].className;
        let c5Child = c5.childNodes[0].className;
        let c6Child = c6.childNodes[0].className;

        if(c4Child == 'x' && c5Child == 'x' && c6Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c4Child == 'o' && c5Child == 'o' && c6Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //***********-3-***********

    if(c7.childNodes.length > 0 && c8.childNodes.length > 0 && c9.childNodes.length > 0){

        let c7Child = c7.childNodes[0].className;
        let c8Child = c8.childNodes[0].className;
        let c9Child = c9.childNodes[0].className;

        if(c7Child == 'x' && c8Child == 'x' && c9Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c7Child == 'o' && c8Child == 'o' && c9Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //VERTICAIS

    //***********-1-***********

    if(c1.childNodes.length > 0 && c4.childNodes.length > 0 && c7.childNodes.length > 0){

        let c1Child = c1.childNodes[0].className;
        let c4Child = c4.childNodes[0].className;
        let c7Child = c7.childNodes[0].className;

        if(c1Child == 'x' && c4Child == 'x' && c7Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c1Child == 'o' && c4Child == 'o' && c7Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //***********-2-***********

    if(c2.childNodes.length > 0 && c5.childNodes.length > 0 && c8.childNodes.length > 0){

        let c2Child = c2.childNodes[0].className;
        let c5Child = c5.childNodes[0].className;
        let c8Child = c8.childNodes[0].className;

        if(c2Child == 'x' && c5Child == 'x' && c8Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c2Child == 'o' && c5Child == 'o' && c8Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //***********-3-***********

    if(c3.childNodes.length > 0 && c6.childNodes.length > 0 && c9.childNodes.length > 0){

        let c3Child = c3.childNodes[0].className;
        let c6Child = c6.childNodes[0].className;
        let c9Child = c9.childNodes[0].className;

        if(c3Child == 'x' && c6Child == 'x' && c9Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c3Child == 'o' && c6Child == 'o' && c9Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //DIAGONAIS

    //***********-1-***********

    if(c1.childNodes.length > 0 && c5.childNodes.length > 0 && c9.childNodes.length > 0 ){

        let c1Child = c1.childNodes[0].className;
        let c5Child = c5.childNodes[0].className;
        let c9Child = c9.childNodes[0].className;

        if(c1Child == 'x' && c5Child == 'x' && c9Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c1Child == 'o' && c5Child == 'o' && c9Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //***********-2-***********

    if(c3.childNodes.length > 0 && c5.childNodes.length > 0 && c7.childNodes.length > 0){

        let c3Child = c3.childNodes[0].className;
        let c5Child = c5.childNodes[0].className;
        let c7Child = c7.childNodes[0].className;

        if(c3Child == 'x' && c5Child == 'x' && c7Child == 'x'){
            declaraGanhador('x');
            verificador = true;
        }else if(c3Child == 'o' && c5Child == 'o' && c7Child == 'o'){
            declaraGanhador('o');
            verificador = true;
        }
    }

    //Quando der empate (Velha)

    if(verificador == false){ //Criei um verificador para me auxiliar no caso de empates

        let todasPreenchidas = true; //Essa variável vai me ajudar a controlar se as casas foram ou não preenchidas
        for(let z=0; z < caixas.length; z++){
            if(caixas[z].childNodes.length == 0){
                todasPreenchidas = false;
                break; //Vai encerrar o código por aqui, evita que a outra condição ocorra
            }
        }

        if(todasPreenchidas == true){
            declaraGanhador(' ');
        }
    }
};

//Limpa o jogo, declara o vencedor e atualiza o placar
function declaraGanhador(ganhador){

    if (jogoAtivo = false){
        return; //Se o jogo está desativado, não faça mais nada, é pra impedir a IA de somar "pontos extras"
    }

    jogoAtivo = false;

        let placarX = document.querySelector("#placar-1");
        let placarO = document.querySelector("#placar-2");

        let msg = ' ';

        if(ganhador == 'x'){
            placarX.textContent = parseInt(placarX.textContent) + 1; //Transformando uma string em um inteiro para as somas
            msg = "O Jogador 1 Venceu!";
        }
        else if (ganhador == 'o'){
            placarO.textContent = parseInt(placarO.textContent) + 1; //Transformando uma string em um inteiro para as somas
            
            if(playerDois == 'ai-jogador'){
                msg = "A IA Venceu!";
            }else{
                msg = "O Jogador 2 Venceu!";}
        }else{
            msg = "Empatou (Velha)!";
        }
    //Exibindo a mensagem na tela
    mensagemTexto.innerHTML = msg; //Mudando o texto da variável com base nas condições
    mensagemContainer.classList.remove("escondido"); //Removendo a classe escondido e permitindo que ela apareça

    //Esconde a mensagem
    setTimeout(function(){
        mensagemContainer.classList.add("escondido"); //Estamos fazendo o oposto do que foi feito acima

        //Zerando as jogadas
        player1 = 0;
        player2 = 0;

        //Removendo o X e O
        let removeCaixas = document.querySelectorAll(".caixas div");

        for(let x=0; x < removeCaixas.length; x++){
            removeCaixas[x].parentNode.removeChild(removeCaixas[x]); //Aqui estamos removendo as "crianças"
        }
        jogoAtivo = true; //Por fim, vai ativar o click novamente quando o tabuleiro for limpo
    }, 2000);
};

//Executando a lógica de jogada
function JogadorAI(){
    if(jogoAtivo == false){
        return;
    }

    let cloneO = o.cloneNode(true);
    contador = 0;
    preenchido = 0;

    for(let x=0; x < caixas.length; x++){
        let casaAleatoria = Math.floor(Math.random() * 5)
        
        //Só preenche se o filho estiver vazio
        if(caixas[x].childNodes[0] == undefined){
            if(casaAleatoria <= 1){
                caixas[x].appendChild(cloneO);
                contador++;
                break;
            }
        //Checando quantas estão preenchidas (para não ser infinito)
        }else{
            preenchido++;
        }
    
    }
    //Garantindo que a função só execute com as condições certas
    if (contador == 0 && preenchido < 9){
        JogadorAI();
    }

    //Checando se a IA venceu e impedindo o "fantasma" pelo jogador
    if(jogoAtivo == true){
    checkVicCond();
    }
};