//CONTINUE 1
console.log("Início do Programa CONTINUE!");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Usando o continue apenas para pular a interação atual!");
    continue; // Pula o resto do bloco e vai para o próximo valor de i
  }
  console.log(i);
}
console.log("Fim do Programa CONTINUE!");

//CONTINUE 2
console.log("Início do Programa CONTINUE 2!");
let numero=0;
let numMax=1000;
let pares=0;

for(let i=numero;i<numMax;i++){
    if(i%2!=0){
        continue;
    }
    pares++;
}

console.log("Quantidade de pares: " + pares);
console.log("Fim do Programa CONTINUE 2!");