let palavra = prompt("Digite uma palavra: ");
let palavraLowerCase = palavra.toLowerCase();
let palavraInvertida = palavraLowerCase.split("").reverse().join("");
let palindromo =
  palavraLowerCase == palavraInvertida
    ? "Isso é um palindromo"
    : "Isso não é um palindromo";
console.log(palindromo);
