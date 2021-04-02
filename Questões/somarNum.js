// Escreva uma função que receba um array de números e retornará a soma
// de todos os números desse array.
function total(arr) {
  arr = arr.reduce((total, item) => total + item, 0);
  return arr;
}

testArr = [1, 2, 3, 4, 5, 6, 7, 8, 4];

console.log(total(testArr));
