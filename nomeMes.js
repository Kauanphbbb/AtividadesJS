// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como
// uma string. Por exemplo, se a entrada for 2, a função deverá
// retornar "fevereiro", pois este é o 2° mês.

function nameMonth(num) {
  if (num == 1) {
    return "janeiro";
  } else if (num == 2) {
    return "fevereiro";
  } else if (num == 3) {
    return "março";
  } else if (num == 4) {
    return "abril";
  } else if (num == 5) {
    return "maio";
  } else if (num == 6) {
    return "junho";
  } else if (num == 7) {
    return "julho";
  } else if (num == 8) {
    return "agosto";
  } else if (num == 9) {
    return "setembro";
  } else if (num == 10) {
    return "outubro";
  } else if (num == 11) {
    return "novembro";
  } else if (num == 12) {
    return "dezembro";
  } else {
    return "mês inválido";
  }
}

const janeiro = nameMonth(1);

console.log(janeiro);
