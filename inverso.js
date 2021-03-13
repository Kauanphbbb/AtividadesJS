// Escreva uma função que receba um valor booleano ou numérico. Se o
// parâmetro fornecido for booleano, o retorno da função deverá ser o
// inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for
// fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos
// tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

function inverse(param) {
  type = typeof param;
  if (type == "number") {
    return param * -1;
  } else if (type == "boolean") {
    return !param;
  } else {
      return `booleano ou número esperado, mas o paramêtro é do tipo ${type}`
  }
}

console.log(inverse("1"));
console.log(inverse(1));
console.log(inverse(false));