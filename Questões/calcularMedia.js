// Numa aplicação Web de investimento financeiro da qual você faz parte da
// equipe de desenvolvimento, pretende-se adicionar a funcionalidade de
// calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que
// receba um array com uma quantidade indeterminada de números e
// retorne a média simples desses números.

function average(arr) {
  const average = arr.reduce((total, item) => total + item, 0) / arr.length;
  return average;
}

const list01 = [0, 10];
const list02 = [1, 2, 3, 4, 5];

console.log(average(list01));
console.log(average(list02));
