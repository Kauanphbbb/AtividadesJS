// Elabore uma função que recebe dois parâmetros: o primeiro é um array
// de números e o segundo é um número que especifica uma quantidade de
// dígitos. Essa função deverá retornar somente aqueles números do array
// que têm a quantidade de dígitos indicada pelo segundo parâmetro.
function digitCount(arr, quantDig) {
  return arr.filter((dig) => dig.toString().length == quantDig);
}

const testArr = [1, 2, 3, 44, 11, 231, 223556, 1246];

console.log(digitCount(testArr, 1));
