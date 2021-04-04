// A fim de criar um mecanismo de busca para sua aplicação, você precisa
// iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e,
// como segundo parâmetro, um array de strings. A função deverá filtrar
// as palavras do array que contêm nelas a string do primeiro parâmetro.

function searchWord(query, arrayWord) {
  const filteredWords = arrayWord.filter(
    (word) => word.toLowerCase().indexOf(query.toLowerCase()) > -1
  );

  return filteredWords;
}

console.log(searchWord("pro", ["programação", "mobile", "profissional"]));
console.log(searchWord("python", ["javascript", "java", "c++"]));
