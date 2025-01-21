let listaDeAmigos = [];
let tituloH2 = document.querySelector('h2')

function adicionarAmigo() {
    tituloH2.innerHTML = 'Digite o nome dos seus amigos';
    if (document.getElementById('amigo').value != '') {
        let nome = document.getElementById('amigo').value;
        listaDeAmigos.push(nome);
        console.log(listaDeAmigos);
        limparCampo();
    } else {
        tituloH2.innerHTML = 'Digite um nome válido';
    }
}

function limparCampo() {
    let campo = document.getElementById('amigo')
    campo.value = '';
}