// Crie uma função que receba uma array e retorne o primeiro e o último elemento
// desse array como um novo array

function firstAndLast(arr) {
  const newArr = [arr[0], arr[arr.length - 1]];
  return newArr;
}

const testArr = ["Kauan", 1, 2, 3, "Portela"];
console.log(firstAndLast(testArr));
