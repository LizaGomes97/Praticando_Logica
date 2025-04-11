function conjuntoDeNumeros() {
  const lista = [];
  while (lista.length < 3) {
    const item = prompt("Adicione um numero a lista: ");
    lista.push(item);
  }
  return lista;
}
const lista = conjuntoDeNumeros();
const listaOrdenada = lista.sort();
console.log(listaOrdenada);
