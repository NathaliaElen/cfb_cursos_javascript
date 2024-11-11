"use strict";

let a = 5;
let b = 3;
let soma = a + b; // soma será 8
console.log(soma);

let c = 5;
let d = 3;
let subtracao = c - d; // subtracao será 2
console.log(subtracao); 

let e = 5;
let f = 3;
let multiplicacao = e * f; // multiplicacao será 15
console.log(multiplicacao); 

let g = 6;
let h = 3;
let divisao = g / h; // divisao será 2
console.log(divisao);

let i = 5;
let j = 2;
let modulo = i % j; // modulo será 1
console.log(modulo);

let k = 2;
let l = 3;
let potencia = k ** l; // potencia será 8 (2 elevado a 3)
console.log(potencia);

let m = 5;
m++; // a agora será 6
console.log(m);

let n = 5;
n--; // a agora será 4
console.log(n);

//ordem de precedência dos operadores
console.log(3 + 5 * 2 - (8/4) **2); //resultado 9

//Operador de Atribuição Combinado com Aritmética
let o = 5
o += 3  // agora o é 8 (5 + 3)
console.log(o);

let p = 5
p -= 2  // agora p é 3 (5 - 2)
console.log(p);

let q = 5
q *= 4  // agora q é 20 (5 * 4)
console.log(q);

let r = 10
r /= 2  // agora r é 5.0 (10 / 2)
console.log(r);

let s = 10
s %= 3  // agora s é 1 (10 % 3)
console.log(s);

let t = 2
t **= 3  // agora t é 8 (2 ** 3)
console.log(t);

//divisão inteira por um valor específico
let u = 20;
console.log("Valor inicial de a: ", u);
// Realizando a divisão inteira de u por 3
u = Math.floor(u / 3); // ou Math.trunc(u / 3) para ambos os sinais
console.log("Valor de a após a divisão inteira por 3: ", u); //6