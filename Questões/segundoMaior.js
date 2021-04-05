// Crie uma função que recebe um array de números e retorna o segundo maior
// número presente nesse array.
function secondBigger(arr) {
  const biggestNum = Math.max(...arr);
  arr = arr.filter((num) => num != biggestNum);
  return Math.max(...arr);
}

const testArr = [1, 2, 3, 4, 5, 6, 16, 78, 10, 9, 7];

console.log(secondBigger(testArr));
