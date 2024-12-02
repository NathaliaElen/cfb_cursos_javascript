let contador = 1;

while (contador <= 5) {
  console.log(contador); // Imprime o valor atual do contador
  contador++; // Incrementa o contador
}

//Fatorial - 5! 5*4*3*2*1 = 120
let n = 5;
let fatorial = 1;

while (n >= 1) {
  fatorial *= n; //fatorial = fatorial * n
  n--; //n = n - 1
}
console.log(fatorial); 

/*
Cuidado com loops infinitos

let x = 1;

while (x > 0) { // Sempre verdadeiro
  console.log(x); // Isso rodará infinitamente
}
*/