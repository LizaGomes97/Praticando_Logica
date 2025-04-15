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
    if (!lista.includes(capitalizar(nomeAmigo))) {
      lista.push(capitalizar(nomeAmigo));
    } else {
      alert("Esse nome ja esta na lista de sorteio");
    }
  } else {
    alert("Por favor, digite um nome");
  }

  elementos.nomeAmigo.value = "";

  atualizarListaNomes(elementos.listaAmigos);
}

function atualizarListaNomes(elementoLista) {
  // Limpar a lista visual
  elementoLista.innerHTML = "";

  // Para cada nome, criar um elemento span clicável
  for (let i = 0; i < lista.length; i++) {
    // Criar elemento span para o nome
    let spanNome = document.createElement("span");
    spanNome.textContent = lista[i];
    spanNome.classList.add("nome-amigo"); // Adiciona uma classe para estilização

    // Tornar o elemento clicável
    spanNome.addEventListener("click", function () {
      removerNome(i); // Passa o índice do nome a ser removido
    });

    // Adicionar o span à lista
    elementoLista.appendChild(spanNome);

    // Adicionar vírgula se não for o último elemento
    if (i < lista.length - 1) {
      elementoLista.appendChild(document.createTextNode(", "));
    }
  }
}

function removerNome(indice) {
  // Confirmar a remoção
  if (confirm(`Deseja remover "${lista[indice]}" da lista?`)) {
    // Remover o nome do array
    lista.splice(indice, 1);

    // Atualizar a exibição
    let elementos = capturandoElementos();
    atualizarListaNomes(elementos.listaAmigos);
  }
}

function sortear() {
  let elementos = capturandoElementos();
  elementos.listaSorteio.innerHTML = [];

  let listaSorteio = elementos.listaSorteio;
  embaralha(lista);

  if (lista.length < 3) {
    alert("Informe ao menos 3 nomes para sorteio");
  } else {
    for (let i = 0; i < lista.length; i++) {
      if (i == lista.length - 1) {
        listaSorteio.innerHTML =
          listaSorteio.innerHTML + lista[i] + "→" + lista[0] + "</br>";
      } else {
        listaSorteio.innerHTML =
          listaSorteio.innerHTML + lista[i] + "→" + lista[i + 1] + "</br>";
      }
    }
  }
}

function reiniciar() {
  let elementos = capturandoElementos();

  elementos.listaAmigos.innerHTML = "";
  elementos.listaSorteio.innerHTML = "";
  elementos.nomeAmigo.value = "";

  lista = [];
  nomesSorteadosLista = [];
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

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
