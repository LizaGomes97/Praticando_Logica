let lista = [];
let nomesSorteadosLista = [];

function capturandoElementos() {
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
  } else {
    alert("Por favor, digite um nome");
  }

  elementos.nomeAmigo.value = "";

  for (i = 0; i < lista.length; i++) {
    elementos.listaAmigos.innerHTML = lista.join(", ");
  }
}

function sortear() {
  console.log(lista);

  embaralha(lista);
  console.log("lista embaralhada", lista);

  let elementos = capturandoElementos();
  let elementoListaSorteio = elementos.listaSorteio;

  elementoListaSorteio.innerHTML = "";
  nomesSorteadosLista = [];

  if (lista.length < 3) {
    alert("Insira ao menos 3 nomes para o sorteio");
    return;
  }

  for (let i = 0; i < lista.length; i++) {
    let quemTira = lista[i];
    let quemRecebe;

    if (i < lista.length - 1) {
      let indiceValido = false;
      let indiceSorteado;

      while (!indiceValido) {
        indiceSorteado = Math.floor(Math.random() * lista.length);

        if (
          indiceSorteado !== i &&
          !nomesSorteadosLista.includes(lista[indiceSorteado])
        ) {
          indiceValido = true;
        }
      }

      quemRecebe = lista[indiceSorteado];
      nomesSorteadosLista.push(quemRecebe);
    } else {
      for (let j = 0; j < lista.length; j++) {
        if (!nomesSorteadosLista.includes(lista[j]) && lista[j] !== quemTira) {
          quemRecebe = lista[j];
          break;
        }
      }
    }
    elementoListaSorteio.innerHTML += `${quemTira} → ${quemRecebe} </br>`;
  }
}

function reiniciar() {
  let elementos = capturandoElementos();

  elementos.listaAmigos.innerHTML = [];
  elementos.listaSorteio.innerHTML = [];
  elementos.nomeAmigo.innerHTML = "";
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // guarda de um índice aleatório da lista
    const elemento = lista[indice - 1];

    lista[indice - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
}
