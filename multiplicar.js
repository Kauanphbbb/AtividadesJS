// Desenvolva uma função que recebe dois números inteiros não negativos
// (maiores ou iguais a zero) e realize a multiplicação deles.
// Porém, não utilize o operador de mutiplicação.

function mult(numA, numB) {
  let result = 0;
  const numMax = Math.max(numA, numB);
  const numMin = Math.min(numA, numB);
  for (let i = 0; i < numMin; i++) {
    result += numMax;
  }

  return result;
}

console.log(mult(5, 0));
