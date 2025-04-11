function adicionar() {
  let produtoSelecionado = document.querySelector("#produto").value;
  let quantidadeProduto = document.querySelector("#quantidade").value;
  let carrinho = document.querySelector("#lista-produtos");
  let valorTotalElemento = document.querySelector("#valor-total");

  //condiçao que adiciona um se a quantidade nao foi definida
  if (quantidadeProduto == "") {
    quantidadeProduto = 1;
  }

  quantidadeProduto = parseInt(quantidadeProduto);

  let detalhes = definirProdutoAndPreco(produtoSelecionado);
  let produto = detalhes.produto;
  let preco = detalhes.preco;

  criarItemNovoNoCarrinho(carrinho, quantidadeProduto, produto, preco);

  let valorAtualTexto = valorTotalElemento.textContent;

  let novoValorTotal = aumentarTotal(valorAtualTexto, preco, quantidadeProduto);

  valorTotalElemento.textContent = `R$${novoValorTotal}`;
}

function separarProdutoDoPreco(string) {
  return string.split(" ");
}

function aumentarTotal(valorTotalTexto, precoStr, quantidade) {
  valorDoItem = parseInt(precoStr.replace(/[^\d]/g, ""));
  valorDoCarrinho = parseInt(valorTotalTexto.replace(/[^\d]/g, ""));

  console.log("Valor do item:", valorDoItem);
  console.log("Valor atual do carrinho:", valorDoCarrinho);

  let novoValorTotal = valorDoItem * quantidade + valorDoCarrinho;

  return novoValorTotal;
}

function criarItemNovoNoCarrinho(carrinho, quantidadeProduto, produto, preco) {
  //criando um novo item no carrinho
  let novoItem = document.createElement("section");
  novoItem.className = "carrinho__produtos__produto";
  novoItem.innerHTML = `
    <span class="texto-azul">${quantidadeProduto}X</span> ${produto} <span class="texto-azul">${preco}</span>
    `;

  carrinho.appendChild(novoItem);
}

function definirProdutoAndPreco(produtoSelecionado) {
  let lista = separarProdutoDoPreco(produtoSelecionado);
  let produto = lista[0];
  let preco = lista[lista.length - 1];

  return {
    produto: produto,
    preco: preco,
  };
}

function limpar() {
  let carrinho = document.querySelector("#lista-produtos");
  let valorTotalCarrinho = document.querySelector("#valor-total");

  carrinho.innerHTML = "";
  valorTotalCarrinho.textContent = "R$0";
}
