// Você escreverá uma função que recebe um objeto como primeiro parâmetro e,
// como segundo parâmetro, o nome de uma propriedade contida nesse objeto.
// Em seguida, retorne uma cópia desse objeto sem a propriedade especificada
// no segundo parâmetro.

function removeProperty(object, property) {
  delete object[property];
  return object;
}

const objectTest = {
  name: "Kauan",
  lastName: "Portela",
};

console.log(removeProperty(objectTest, "lastName"));
