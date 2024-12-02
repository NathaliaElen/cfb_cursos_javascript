//BREAK 1
console.log("Início do Programa BREAK!");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Usando o break para sair do loop!");
    break; // Sai do loop quando i for 3
  }
  console.log(i);
}
console.log("Fim do Programa BREAK!");

//BREAK 2
console.log("Início do Programa BREAK 2!");
let numero = 0;
let numMax = 1000;

while (numero < numMax) {
  console.log("Número: " + numero + " é menor do que número máximo: " + numMax);
  if (numero >= 10) {
    console.log("Usando o break para sair do loop!");
    break;
  }
  numero++;
}
console.log("Fim do Programa BREAK 2!");