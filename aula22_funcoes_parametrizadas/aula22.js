function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}
// Chamando a função
saudacao("Maria"); // Saída: Olá, Maria!
saudacao("João");  // Saída: Olá, João!

//Como o javascript tem typeCast ele faz a conversão dos tipos automaticamente, posso usar qualquer valor
function parametro(p1) {
  console.log(p1);
}
parametro("Bruno");
parametro(2024);
parametro(5.2);

//mais de um parâmetro, preciso um valor para cada parâmetro
function soma(n1,n2) {
  let soma=n1+n2;
  console.log(soma);
}
soma(10, 5);

//caso eu não passar nenhum valor, vai assumir valores padrões do parâmetros
function subtracao(n1=0,n2=0) {
  let subtracao=n1-n2;
  console.log(subtracao);
}
subtracao(10, 5);

//Com return
const valorPadrao = 0;
function multiplicacao(n1=valorPadrao,n2=valorPadrao) {
  let resultado=n1*n2;
  return resultado;
}
let resultadoMultiplicacao=multiplicacao(5, 5);
console.log(resultadoMultiplicacao);

//Alterar o valor da variável que está fora da função, mas também posso dentro da função
const valor_padrao = 0;

function add(v=valor_padrao) {
  return valor+=v;
}

let valor = 0;
console.log(valor); //0

add(10);
console.log(valor); //10

add(5);
console.log(valor); //15





