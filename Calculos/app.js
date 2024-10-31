//Verificar se o valor dado é igual 0
function verificarValor(variavel) {
    if (variavel === 0 ) {
        alert('O valor não pode ser 0.');
        return true;
    } else if (variavel === null || isNaN(variavel)) {
       return true;
    } else {
        return false; 
    }
}

function calculoIMC() {
    let altura = parseFloat(prompt('Coloque sua altura em metros: '));
    if (verificarValor(altura)) return;
    let peso = parseFloat(prompt('Coloque seu peso em kilogramas: '));
    if (verificarValor(peso)) return;
    let imc = peso / (altura * altura);
    alert('Seu IMC é igual a: '+imc.toFixed(2));
}

function valorFatorial() {
    let valor = parseInt(prompt('Coloque um valor: '));
    if (verificarValor(valor)) return;
    let fatorial = 1;
    let i = valor;
    while(i > 1) {
        fatorial *= i;
        i--;
    }
    alert(fatorial);
}

function converterDolar() {
    let dolar = parseFloat(prompt('Coloque o valor em dolar: '));
    if (verificarValor(dolar)) return;
    let cotacao = parseFloat(prompt('Coloque a cotação atual do dólar: '));
    if (verificarValor(cotacao)) return;
    let reais = dolar * cotacao;
    alert(reais.toFixed(2));
}

function areaRetangular() {
    let alturaR = parseFloat(prompt('Coloque a altura da área: '));
    if (verificarValor(alturaR)) return;
    let larguraR = parseFloat(prompt('Coloque a largura da área: '));
    if (verificarValor(larguraR)) return;
    let areaR = alturaR * larguraR;
    alert('A área é: ' + areaR.toFixed(2) + 'm²');
    let perimetroR = 2 * (larguraR + alturaR);
    alert('O perímetro é: ' + perimetroR.toFixed(2) + 'm');
}

function areaCircular() {
    let raio = parseFloat(prompt('Coloque o raio do circulo: '));
    if (verificarValor(raio)) return;
    let areaC = 3.14 * (raio ** 2);
    let perimetroC = 2 * (3.14 * raio);
    alert('A área do circulo é: ' + areaC.toFixed(2) + 'm²');
    alert('O perímetro é: ' + perimetroC.toFixed(2) + 'm');
}

function tabuada() {
    let valorTabuada = parseInt(prompt('Coloque o valor: '));
    if (verificarValor(valorTabuada)) return;
    for(let i = 1; i <= 10; i++) {
        alert(valorTabuada * i);
    }
}