//Exemplo básico
function externa() {
  let mensagem = "Olá do escopo externo!";

  function interna() {
    console.log(mensagem); // Acessa a variável da função externa
  }

  interna(); // Chama a função interna
}
externa(); // Saída: "Olá do escopo externo!"

//Exemplo com parâmetros
function calcular(a, b) {
  function soma() {
    return a + b; // Acessa os parâmetros da função externa
  }
  return soma(); // Retorna o resultado da função interna
}
console.log(calcular(3, 7)); // 10

//Função aninhada retornada
//Você pode retornar a função interna para usá-la posteriormente.
function externa() {
  let contador = 0;

  return function interna() {
    contador++;
    return contador;
  };
}

const incrementar = externa();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3

//exemplo da aula
const somar = val => {
  let res=0;
  for(v of val)
      res+=v;
  return res;
}
const soma=(...valores)=>{
  return somar(valores);
}

console.log(soma(10,5,15));
valor=[10,5,15];
console.log(soma(...valor));