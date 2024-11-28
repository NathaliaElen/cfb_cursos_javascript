//Loop For - tipo definido
console.log("Início do Programa!");
for (let i = 0; i < 5; i++) {
  console.log("Valor do i: " + i); // Executa 5 vezes
}
console.log("Fim do Programa!");

//4 CUIDADOS PARA NÃO CAIR EM LOOP INFINITO:

//Verificar a condição de parada
/*
for (let i = 0; i < 10; ) {
  console.log(i); // 'i' nunca é incrementado, o loop continua indefinidamente
}
*/ 
console.log("Início do Programa!");
for (let i = 0; i < 15; i++) {
  console.log("Valor do i: " + i); // Agora o loop terminará após 15 iterações
}
console.log("Fim do Programa!");

//Verificar o incremento ou mudança da variável de controle
/*
for (let i = 0; i < 10; i--) { 
  console.log(i); // 'i' vai diminuir, criando um loop infinito
}
*/ 
console.log("Início do Programa!");
for (let i = 0; i < 10; i++) {
  console.log(i); // 'i' vai aumentar até 9, e o loop termina
}
console.log("Fim do Programa!");

//Evitar condições que nunca se tornam falsas
/*
let x = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (x === 0) {
    continue; // O valor de 'x' nunca muda, loop infinito
  }
}
*/ 
console.log("Início do Programa!");
let x = 0;
for (let i = 0; i < 10; i++) {
  console.log("Valor do i: " + i); // Executa 10 vezes
  if (x === 0) {
    x = 1; // Mudando 'x' para que o loop não continue indefinidamente
  }
}
console.log("Fim do Programa!");

//Definir um número máximo de iterações (opcional)
console.log("Início do Programa!");
let maxIteracoes = 20;
for (let i = 0; i < 25; i++) {
  console.log("Valor do i: " + i);
  if (i >= maxIteracoes) {
    break; // Garante que o loop não vai além do número máximo de iterações
  }
}
console.log("Fim do Programa!");






