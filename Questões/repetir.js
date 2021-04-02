// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o
// elemento que repetirá, enquanto que o segundo será o número de vezes que
// haverá repetição. Um array será retornado.

function repeat(element, numRepeat) {
  const array = [];
  for (let i = 0; i < numRepeat; i++) {
    array.push(element);
  }

  return array;
}

console.log(repeat(3, 5));
