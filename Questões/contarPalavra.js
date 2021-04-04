// Criar uma função que receba uma string como parâmetro e
// conte quantas palavras tem nela.

function words(sentence) {
  const words = sentence.split(" ").length;
  return words;
}

console.log(words("Estou apenas testando mais um programa"));
