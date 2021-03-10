// Crie uma função que retorna a string "Olá, " concatenada com um argumento text
// (a ser passado para a função) e com ponto de exclamação "!" no final.

function compliment(nome) {
  return `Olá, ${nome}!`;
}

const maria = compliment("Maria");
const leonardo = compliment("Leonardo");

console.log(maria);
console.log(leonardo);
