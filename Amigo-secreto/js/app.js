let amigos = [];
let sorteioRealizado = false;

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.trim();
    let lista = document.getElementById('lista-amigos');
    if (amigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (amigos.includes(amigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return;
    }
    amigos.push(amigo);
    if (lista.textContent == '') {
        lista.textContent = amigo; 
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    amigo = '';
}

function sortear() {
    if(sorteioRealizado == true) {
        alert('O sorteio já foi realizado, reinicie para fazer outro.')
    } else {
    if (amigos.length < 4) {
        alert("É necessário ter pelo menos quatro pessoas para realizar o sorteio.");
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' +  amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' +  amigos[i + 1] + '<br>';
        }
    }
    sorteioRealizado = true;
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    sorteioRealizado = false;
}