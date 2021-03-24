// Elabore uma função que recebe um número como parâmetro e retorne uma
// string com o símbolo "+" na quantidade especificada no parâmetro.

function plus(num) {
  let string = "+";
  string = string.repeat(num);

  return string;
}

console.log(plus(4));
