// Faça uma função que recebe a base e a altura de um triângulo e
// retorne a área desse triângulo. A precisão deverá ser de duas
// casas decimais, arredondando se necessário.

function areaTri(height, base) {
  const area = (height * base) / 2;
  return area.toFixed(2);
}

console.log(areaTri(9.25, 13.1));
