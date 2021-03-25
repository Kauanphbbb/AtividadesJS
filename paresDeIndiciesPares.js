// Elabore uma função que receba um array de números e retorne um array
// que tenha todos os números que são pares e que também tenham índices pares.

function onlyPairs(arr) {
  arr = arr.filter((ele, index) => ele % 2 == 0 && index % 2 == 0);
  return arr;
}

const arrayTest = [1, 2, 3, 4, 6];
console.log(onlyPairs(arrayTest));
