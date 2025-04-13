//capturar elementos do hmtl
function capturandoElementos() {
  //[inferior, superior, pista]
  let tipoDeIngresso = document.querySelector("#tipo-ingresso").value;

  //string numero em input comprados
  let quantidadeDeIngressosComprados = document.getElementById("qtd").value;

  //str pista
  let ingressosDisponiveis_Pista =
    document.querySelector("#qtd-pista").textContent;

  //str superior
  let ingressosDisponiveis_Superior =
    document.querySelector("#qtd-superior").textContent;

  //str inferior
  let ingressosDisponiveis_Inferior =
    document.querySelector("#qtd-inferior").textContent;

  return {
    tipoDeIngresso: tipoDeIngresso,
    quantidadeDeIngressosComprados: quantidadeDeIngressosComprados,
    ingressosDisponiveis_Pista: ingressosDisponiveis_Pista,
    ingressosDisponiveis_Superior: ingressosDisponiveis_Superior,
    ingressosDisponiveis_Inferior: ingressosDisponiveis_Inferior,
  };
}

//converter
function converterStringsEmINT(variavel) {
  let convertida = parseInt(variavel) || 0;
  return convertida;
}

//o que converter
function converterMultiplosElementos(elementos) {
  return {
    disponivel_Pista: converterStringsEmINT(
      elementos.ingressosDisponiveis_Pista
    ),
    disponivel_Superior: converterStringsEmINT(
      elementos.ingressosDisponiveis_Superior
    ),
    disponivel_Inferior: converterStringsEmINT(
      elementos.ingressosDisponiveis_Inferior
    ),
    quantidadeComprada: converterStringsEmINT(
      elementos.quantidadeDeIngressosComprados
    ),
  };
}

function preparandoAmbiente() {
  //definindo prefixo elementos para os elementos capturados
  let elementos = capturandoElementos();

  //convertendo em int
  let tipoDeIngresso = elementos.tipoDeIngresso;
  const {
    disponivel_Pista,
    disponivel_Superior,
    disponivel_Inferior,
    quantidadeComprada,
  } = converterMultiplosElementos(elementos);

  return {
    tipoDeIngresso: tipoDeIngresso,
    quantidadeComprada: quantidadeComprada,
    disponivel_Pista: disponivel_Pista,
    disponivel_Superior: disponivel_Superior,
    disponivel_Inferior: disponivel_Inferior,
  };
}

function comprar() {
  // capturandoElementos();
  const dados = preparandoAmbiente();

  function novaQuantidadeFunction() {
    if (dados.tipoDeIngresso == "pista") {
      return (novaQuantidade = diminuirIngressosDisponiveis(
        dados.disponivel_Pista,
        dados.quantidadeComprada
      ));
    } else if (dados.tipoDeIngresso === "superior") {
      return (novaQuantidade = diminuirIngressosDisponiveis(
        dados.disponivel_Superior,
        dados.quantidadeComprada
      ));
    } else {
      // inferior
      return (novaQuantidade = diminuirIngressosDisponiveis(
        dados.disponivel_Inferior,
        dados.quantidadeComprada
      ));
    }
  }
  novaQuantidadeFunction();

  atualizarTextoIngressosDisponiveis(dados.tipoDeIngresso, novaQuantidade);
}

function diminuirIngressosDisponiveis(ingressoDisponivel, ingressoComprado) {
  if (ingressoDisponivel >= ingressoComprado) {
    alert("Compra realizada com sucesso");
    return (novaQuantidadeDeIngresso = ingressoDisponivel - ingressoComprado);
  } else {
    alert("Ingressos disponiveis insuficientes para compra");
  }

  return novaQuantidadeDeIngresso;
}

function atualizarTextoIngressosDisponiveis(tipoDeIngresso, novaQuantidade) {
  if (tipoDeIngresso === "pista") {
    document.querySelector("#qtd-pista").textContent = novaQuantidade;
  } else if (tipoDeIngresso === "superior") {
    document.querySelector("#qtd-superior").textContent = novaQuantidade;
  } else {
    document.querySelector("#qtd-inferior").textContent = novaQuantidade;
  }
}
