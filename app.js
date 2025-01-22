let listaDeAmigos = [];
let tituloH2 = document.querySelector('h2')
let tamanhoDaLista = 0;

function adicionarAmigo() {
    tituloH2.innerHTML = 'Digite o nome dos seus amigos';
    let nome = document.getElementById('amigo').value;
    let tabelaDeAmigos = document.getElementById('listaAmigos');
    tabelaDeAmigos.innerHTML = '';

    if (nome !== '' && !listaDeAmigos.includes(nome)) {

        listaDeAmigos.push(nome);
        tituloH2.innerHTML = 'Amigo adicionado!';
        limparCampo();

    } else if (nome == '') {
        tituloH2.innerHTML = "Digite um nome válido";
    } else {
        tituloH2.innerHTML = "Nome já adicionado";
    }

    listaDeAmigos.forEach (amigo => {
        let amigoNaLista = document.createElement('li');
        amigoNaLista.textContent = amigo;
        tabelaDeAmigos.appendChild(amigoNaLista);
    }
  )
    tamanhoDaLista = listaDeAmigos.length;
}



function sortearAmigo() {
    let resultado = document.getElementById('resultado')
    if (tamanhoDaLista != 0) {
        let amigoEscolhido = parseInt(Math.random() * tamanhoDaLista);
        console.log(amigoEscolhido);
         resultado.innerHTML = `O amigo secreto sorteado é: ${listaDeAmigos[amigoEscolhido]}`
    } else {
        resultado.innerHTML = 'Você não adicionou nenhum amigo a lista, tente novamente'
    }
    limparCampoLista();
}

function limparCampo() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function limparCampoLista() {
    let campoLista = document.getElementById('listaAmigos');
    while (campoLista.firstChild) {
        campoLista.removeChild(campoLista.firstChild);
    }
    campoLista.innerHTML = '';
}

