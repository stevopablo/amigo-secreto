//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// pegar valores do html 
const nomeAmigo = document.getElementById('amigo')
const adicionar = document.getElementById('button-add')
const listaAmigos = document.getElementById('listaAmigos')
const resultado = document.getElementById('resultado')
const sortear = document.getElementsByClassName('button-draw')
let amigos = []
// criar função adicionar

function adicionarAmigo(){
    if(nomeAmigo.value.trim() == ' '){
        alert("Insira um nome, Por favor")
    }else{
        amigos.push(nomeAmigo.value)
        console.log('adicionado: ', nomeAmigo.value)
        
        listaAmigos.innerHTML = ''
        for (let index = 0; index < amigos.length; index++) {
            const element = amigos[index];
            const lista = document.createElement('li')
            lista.textContent = element
            listaAmigos.appendChild(lista)
        }
    }
    nomeAmigo.value = ''
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Adicione algums amigos')
    }else{
        const amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)]
        resultado.innerText = amigoSorteado
    }
}

function limparCampo(){
    console.log(amigos) 
    // const limpar = document.getElementById('button-clear')
    amigos = [];
    listaAmigos.innerHTML = ''
    console.log(amigos)
    // leva pra imprimir
    // print(amigos)
}



// #############################################

// const listaAmigos = document.getElementById('listaAmigos');
// const resultado = document.getElementById('resultado');
// const adicionarButao = document.getElementsByClassName('button-add');

// const amigoNome = document.getElementById('amigo');
// let amigos = [];

// function adicionarAmigo() {
//     // Verifica se o campo de entrada está vazio
//     if (amigoNome.value.trim() === '') {
//         alert('Insira um nome, por favor');
//     } else {
//         // Adiciona o nome à lista de amigos
//         amigos.push(amigoNome.value.trim());

//         // Limpa a lista de amigos exibida
//         listaAmigos.innerHTML = '';

//         // Adiciona cada amigo à lista exibida
//         amigos.forEach(function(element) {
//             const lista = document.createElement('li');
//             lista.textContent = element;
//             listaAmigos.appendChild(lista);
//         });

//         // Limpa o campo de entrada
//         amigoNome.value = '';
//     }
// }

// function sortearAmigo() {
//     if (amigos.length === 0) {
//         alert('Adicione alguns amigos primeiro!');
//         return;
//     }

//     // Sorteia um amigo aleatoriamente
//     const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
//     resultado.textContent = 'Amigo sorteado: ' + amigoSorteado;
// }
