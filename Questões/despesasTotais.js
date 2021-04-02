// Você está trabalhando numa aplicação pessoal de controle de despesas. Na
// tela principal dessa aplicação, é possível adicionar produtos ou serviços,
// informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

//Criado para facilitar no momento de criar os objetos para o array
class Expenses {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }
}

function calculateExpenses(arr) {
  return arr.reduce((total, item) => total + item.price, 0);
}

const netflix = new Expenses("Netflix", "Service", 40.0);
const newCar = new Expenses("Audi A5", "Transport", 1000.0);

const arrTest = [netflix, newCar];

console.log(calculateExpenses(arrTest));
