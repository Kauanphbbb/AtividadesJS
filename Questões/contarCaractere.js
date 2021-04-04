// Desenvolva uma função que recebe um caractere e uma string como
// parâmetros e retorne a quantidade devezes que o caractere se repete
// na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

function searchChar(char, sentence) {
  sentence = sentence.split("");
  charNum = sentence.filter((ele) => ele == char).length;
  return charNum;
}

console.log(searchChar("r", "A sorte favorece os audazes"));
