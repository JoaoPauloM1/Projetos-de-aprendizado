let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

//Função para selecionar e escrever no HTML
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//Função para exibir mensagem inicial
function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto!');
    exibirTexto('p', 'Escolha um número de 1 a 10:');
}
exibirMensagemInicial();

//verificarChute foi criado no HTML linha 27 no botão de chutar
function verificarChute() {
    //Pegar apenas o valor dado no input(linha 25 HTML)
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTexto('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativa;
        exibirTexto('p', mensagemTentativas);
        //Pegar um elemento do HTML por ID  / Remover o atributo que esta desativando o botão
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor!')
        } else {
            exibirTexto('p', 'O número secreto é maior!') 
        }
        tentativas++;
        limparCampo();
    }
}

//Função para gerar um número aleatório
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//Função para limpar o campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}