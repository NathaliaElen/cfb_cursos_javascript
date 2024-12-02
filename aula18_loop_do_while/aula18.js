let n = 10;

while (n < 5) {
  console.log(n); // Não será executado, pois a condição é falsa no início.
  n++;
}
console.log("Fim do programa!");


let x = 10;

do {
  console.log(x); // Executa uma vez, mesmo com a condição falsa.
  n++;
} while (x < 5);
console.log("Fim do programa!");