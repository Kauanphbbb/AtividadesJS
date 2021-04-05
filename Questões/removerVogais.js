// Desenvolva uma função que receba uma string como parâmetro e retorne
// essa string somente com as consoantes, ou seja, sem as vogais.
function removeVowel(word) {
  const regexToVowel = /[aeiouà-ú]/gi;
  return word.replace(regexToVowel, "");
}

console.log(removeVowel("Sem Vogais"));
