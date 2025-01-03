function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    //Colocar um limite de quantidade
    if(quantidade > 25 || quantidade < 0) {
        alert('A quantidade escolhida não pode ser maior que 25.');
        reiniciar();
        alterarStatusBotao();
    } else {
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if ((ate - de) < (quantidade -1)) {
        alert('A quantidade escolhida é inválida.');
        reiniciar();
        alterarStatusBotao();
    } else {
        let sorteados = [];
        let numero;

    for(let i = 0; i < quantidade; i++) {
        numero = gerarNumero(de, ate);
        while(sorteados.includes(numero)) {
            numero = gerarNumero(de,ate);
        }
        sorteados.push(numero);
    }

    //Utilizar o .value no final se quiser pegar alguma informação do HTML
    let resultado = document.getElementById('resultado');
    //innerHTML envia informações ao HTML
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
    }      
    }
    
}

function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}