function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let sorteados = [];

  if (ate - de > quantidade) {
    if (ate > de) {
      for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
        console.log(sorteados);
      }
      let resultado = document.getElementById("resultado");
      if (quantidade == 1) {
        resultado.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${sorteados}</label>`;
      } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
      }
    } else {
      alert("O numero final não pode ser menor que o inicial!");
      reiniciar();
    }
  } else {
    alert(
      `Não foi possivel localizar ${quantidade} numeros entre ${de} e ${ate}`
    );
    reiniciar();
  }

  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}
