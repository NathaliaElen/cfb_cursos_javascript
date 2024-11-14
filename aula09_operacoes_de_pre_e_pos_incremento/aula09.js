"use strict";

let x = 5;
let y = ++x; // x é incrementado para 6, e y recebe o valor de x (6)
console.log(x); // 6
console.log(y); // 6

let m = 5;
let n = m++; // n recebe o valor de m (5), depois m é incrementado para 6
console.log(m); // 6
console.log(n); // 5

let t = 5;
let u = --t; // t é decrementado para 4, e u recebe o valor de t (4)
console.log(t); // 4
console.log(u); // 4

let r = 5;
let s = r--; // s recebe o valor de r (5), depois r é decrementado para 4
console.log(r); // 4
console.log(s); // 5

let a = 10;
a += 5; // Equivalente a a = a + 5; a agora é 15
console.log(a);

let b = 10;
b -= 3; // Equivalente a b = b - 3; b agora é 7
console.log(b);

let c = 5;
c *= 2; // Equivalente a c = c * 2; c agora é 10
console.log(c);

let d = 10;
d /= 2; // Equivalente a d = d / 2; d agora é 5
console.log(d);

let e = 10;
e %= 3; // Equivalente a e = e % 3; e agora é 1 (resto da divisão de 10 por 3)
console.log(e);

let f = 10;
let g = -f;
console.log(g); //o operador de inversão (-), resultado -10

let h = 10, i = 20;
console.log("Número h é igual a: " + h + " e o número i é igual a: " + i);

