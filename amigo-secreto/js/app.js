//inserir nomes de amigos no campo inserir amigo
// nome é adicionado a lista amigos incluidos apos clicar no botao adicionar

//botao sortear gera uma relaçao de quem vai dar presente a quem
//cada pessoa so pode ser tirada uma vez

//botao reiniciar recomeça o programa

//lista de amigos
let lista = [];
let nomesSorteadosLista = [];

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
    // console.log(lista);
  } else {
    alert("Por favor, digite um nome");
  }

  elementos.nomeAmigo.value = "";

  for (i = 0; i < lista.length; i++) {
    elementos.listaAmigos.innerHTML = lista.join(", ");
  }
}

function sortear() {
  let elementos = capturandoElementos();
  let listaSorteada = nomesSorteadosLista;

  function sorteandoIndice() {
    for (i = 0; i < lista.length; i++) {
      return (indice = Math.floor(Math.random() * lista.length + i));
    }
  }
  let indiceSorteado = sorteandoIndice();
  console.log(indiceSorteado);

  nomeSorteado = lista[indiceSorteado];

  console.log("lista:", lista);
  console.log("nome sorteado:", nomeSorteado);
  console.log("lista sorteada", listaSorteada);

  if (nomeSorteado != listaSorteada.includes(nomeSorteado)) {
    nomesSorteadosLista.push(nomeSorteado);
    console.log("lista sorteada dentro do if", listaSorteada);

    // for (i = 0; i < lista.length; i++) {
    //   listaSorteada.innerHTML = nomesSorteadosLista.join(" - ");
    // }
  }
}
