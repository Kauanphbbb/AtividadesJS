// Desenvolva uma função que recebe como parâmetro um objeto e retorne
// um array de arrays, em que cada elemento é um array formado pelos
// pares chave/valor que corresponde a um atributo do objeto.

function objectToArray(object) {
  return Object.entries(object);
}

const car = {
  name: "Car",
  model: "Sedan",
  year: 2019,
};

console.log(objectToArray(car));
