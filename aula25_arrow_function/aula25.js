//Função anônima padrão
const soma = function (v1, v2) {
  return v1 + v2;
}
console.log(soma(10, 5));

//arrow function 

// com um parâmetro
const dobrar = x => x * 2;
console.log(dobrar(4)); // 8

//com vários parâmetros
const multiplicacao = (v1, v2, v3) => v1 * v2;
console.log(multiplicacao(10, 5, 8));

//Sem parâmetros, mas claro que não precisa de uma função para imprimir uma string
const dizerOla = () => "Olá!";
console.log(dizerOla()); // "Olá!"

//Arrow function em callbacks
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]