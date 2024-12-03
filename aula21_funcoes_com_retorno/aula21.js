//Função com retorno
function soma(a, b) {
  return a + b;
}
let resultado = soma(3, 5);
console.log(resultado); // Saída: 8

function multiplicacao(a, b) {
  let n1=10;
  let n2=5;
  let resultado=n1*n2;
  return resultado;
}
console.log(multiplicacao());

function numeroParOuImpar() {
  let num1=7;
  let num2=9;
  let resultado=num1-num2;
  if (resultado%2==0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let retorno = numeroParOuImpar();
console.log(retorno);


function canalYoutube() {
  return "CFB Cursos";
}
console.log(canalYoutube());