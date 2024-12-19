//já que não tem um nome, preciso associar essa função a uma variável ou constante
//para quando eu chamar essa variável ou constante a função ser executada em tempo real
let funcaoAnonima = function(v1, v2){
  return v1 + v2;
}
console.log(funcaoAnonima(10, 5));

let multiplicacao = function(...valores){
  let res = 1; // Inicializa como 1, pois 1 é o elemento neutro da multiplicação
  for(v of valores) {
    res *= v;
  }
  return res;
}
console.log(multiplicacao(10, 5));

// utilizar um construtor dentro de uma função anônima
// toda vez que falamos em construtor ou classes, usamos o operador new
// com isso, podemos mudar a construção da nossa função
// serve para funções mais simples
let f = new Function("v1", "v2", "return v1 + v2"); //função construtor Anônima

console.log(f(10, 5));