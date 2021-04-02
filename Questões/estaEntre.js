// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo)
// e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro
// inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se numero é igual a
// minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá
// ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo
// ou a maximo.

function between(num, min, max, inc = false) {
  if (inc) return num >= min && num <= max;

  return num > min && num < max;
}

console.log(between(3, 3, 10, true))
