//inserir nomes de amigos no campo inserir amigo
// nome é adicionado a lista amigos incluidos apos clicar no botao adicionar

//botao sortear gera uma relaçao de quem vai dar presente a quem
//cada pessoa so pode ser tirada uma vez

//botao reiniciar recomeça o programa

//lista de amigos
let lista = [];

function capturandoElementos() {
  //campo input nome do amigo
  let nomeAmigo = document.querySelector("#nome-amigo");
  let listaAmigos = document.querySelector("#lista-amigos");

  let listaSorteio = document.querySelector("#lista-sorteio");

  return {
    nomeAmigo: nomeAmigo,
    listaAmigos: listaAmigos,
    listaSorteio: listaSorteio,
  };
}

function adicionar() {
  let elementos = capturandoElementos();
  const nomeAmigo = elementos.nomeAmigo.value;

  elementos.listaAmigos.innerHTML = "";

  if (nomeAmigo != "") {
    lista.push(nomeAmigo);
    console.log(lista);
  } else {
    alert("Por favor, digite um nome");
  }

  elementos.nomeAmigo.value = "";

  for (i = 0; i < lista.length; i++) {
    elementos.listaAmigos.innerHTML = lista.join(", ");
  }
}
