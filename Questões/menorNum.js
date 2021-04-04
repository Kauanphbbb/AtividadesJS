// Criar uma função que receba um array de números e retorne
// o menor número desse array.

function smallestNum(arr) {
  const smaller = Math.min(...arr);
  return smaller;
}

const testArr = [-3, 4, 1, 3, 2, -1];

console.log(smallestNum(testArr));
