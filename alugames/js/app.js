//.dashboard__item__button--return
// esse é o elemento css que esta deixando o botao preto

//dashboard__item__img--rented
//classe que deixa a imagem cinza

function alterarStatus(id) {
  const gameClicado = document.querySelector(`#game-${id}`);
  const botao = gameClicado.querySelector(`.dashboard__item__button`);
  const img = gameClicado.querySelector(`.dashboard__item__img`);
  const alugado = botao.classList.contains("dashboard__item__button--return");
  const resposta = confirm(
    `Certeza que deseja ${alugado ? "devolver" : "alugar"}?`
  );
  //mudar para alugar
  if (resposta) {
    if (alugado) {
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
      img.classList.remove("dashboard__item__img--rented");
    }
    //mudar para remover
    else {
      botao.classList.add("dashboard__item__button--return");
      botao.textContent = "Devolver";
      img.classList.add("dashboard__item__img--rented");
    }
    verificarQuantidadeJogosAlugados();
  }
}
function verificarQuantidadeJogosAlugados() {
  botaoDevolverAtivos = document.querySelectorAll(
    ".dashboard__item__button--return"
  );
  quantidadeJogosAlugados = botaoDevolverAtivos.length;
  console.log(
    `Temos ${quantidadeJogosAlugados} ${
      quantidadeJogosAlugados === 1 ? "jogo alugado." : "jogos alugados."
    }`
  );
  return quantidadeJogosAlugados;
}
alterarStatus();
