function calcularProbabilidadeAdocao() {
  let peso = 10;
  let idade = 15;

  let nota = 10;

  if (peso > 20) {
    nota - 4;
  }
  if (peso > 10) {
    nota - 2;
  }

  if (idade >= 14) {
    nota - 4;
  }
  if (idade >= 8) {
    nota - 2;
  }

  return nota;
}
calcularProbabilidadeAdocao();
console.log(nota);
