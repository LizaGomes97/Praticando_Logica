function obterElementos() {
  let valorUnitario = document.querySelector("#produto").value.split("$")[1];
  let valorUnitarioInt = parseInt(valorUnitario);
  let quantidadeProduto = document.querySelector("#quantidade").value;

  if (quantidadeProduto === "") {
    quantidadeProduto = 1;
  } else {
    quantidadeProduto = parseInt(quantidadeProduto);
  }

  return {
    produtoSelecionado: document.querySelector("#produto").value,
    nomeProduto: document.querySelector("#produto").value.split("-")[0],
    quantidadeProduto,
    subtotalCarrinho: valorUnitarioInt * quantidadeProduto,
    produtosCarrinho: document.querySelector("#lista-produtos"),
    valorTotalElemento: document.querySelector("#valor-total"),
    valorTotalCarrinho: document.querySelector("#valor-total").textContent,
  };
}

function adicionar() {
  const elementos = obterElementos();

  elementos.quantidadeProduto = parseInt(elementos.quantidadeProduto);
  console.log(
    "Quantidade de produto apos o a variavel:",
    elementos.quantidadeProduto
  );

  criarItemNovoNoCarrinho(
    elementos.produtosCarrinho,
    elementos.quantidadeProduto,
    elementos.nomeProduto,
    elementos.subtotalCarrinho
  );

  let novoValorTotal = aumentarTotal(
    elementos.valorTotalCarrinho,
    elementos.subtotalCarrinho,
    elementos.quantidadeProduto
  );

  elementos.valorTotalElemento.textContent = `R$${novoValorTotal}`;
}

function aumentarTotal(valorTotalTexto, subtotal, quantidade) {
  // console.log("Valor do carrinho no inicio da funçao:", valorDoCarrinho);
  let valorDoItem = subtotal;

  let valorDoCarrinho;
  if (valorTotalTexto.includes("R$")) {
    valorDoCarrinho = parseInt(valorTotalTexto.split("R$")[1]);
  } else {
    valorDoCarrinho = parseInt(valorTotalTexto);
  }

  console.log("Valor do item:", valorDoItem);
  console.log("Quantidade:", quantidade);
  console.log("Valor atual do carrinho:", valorDoCarrinho);

  let novoValorTotal = valorDoItem + valorDoCarrinho;
  console.log("novoValorTotal:", novoValorTotal);

  return novoValorTotal;
}

function criarItemNovoNoCarrinho(carrinho, quantidadeProduto, produto, preco) {
  //criando um novo item no carrinho
  let novoItem = document.createElement("section");
  novoItem.className = "carrinho__produtos__produto";
  novoItem.innerHTML = `
    <span class="texto-azul">${quantidadeProduto}X</span> ${produto} <span class="texto-azul">R$${preco}</span>
    `;

  carrinho.appendChild(novoItem);
}

function limpar() {
  let carrinho = document.querySelector("#lista-produtos");
  let valorTotalCarrinho = document.querySelector("#valor-total");

  carrinho.innerHTML = "";
  valorTotalCarrinho.textContent = "R$0";
}
