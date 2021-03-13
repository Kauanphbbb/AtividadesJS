// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function numVerify(big, small) {
  if (big === small) {
    if (big >= small) {
      return true;
    }
  } else {
    return false;
  }
}

big = numVerify(10, "10");

console.log(big);
