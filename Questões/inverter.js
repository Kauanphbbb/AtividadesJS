// Desenvolva uma função que recebe um objeto como parâmetro e
// retorne um outro objeto que corresponde ao ao objeto recebido
// como parâmetro, porém com as posições das chaves e valores invertidas
function invert(obj) {
  const invertedObj = Object.entries(obj).map((keyValue) => keyValue.reverse());
  return Object.fromEntries(invertedObj);
}

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(invert(testObj));
