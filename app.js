let listaDeAmigos = [];
let tituloH2 = document.querySelector('h2')

function adicionarAmigo() {
    tituloH2.innerHTML = 'Digite o nome dos seus amigos';
    let nome = document.getElementById('amigo').value;
    let tabelaDeAmigos = document.getElementById('listaAmigos');
    tabelaDeAmigos.innerHTML = '';

    if (nome !== '' && !listaDeAmigos.includes(nome)) {

        listaDeAmigos.push(nome);
        console.log(listaDeAmigos);
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

}

function limparCampo() {
    let campo = document.getElementById('amigo')
    campo.value = '';
}