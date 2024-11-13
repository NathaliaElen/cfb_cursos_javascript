"use strict";

//&& (E/AND lógico)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

//|| (OU/OR lógico)
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

//! (NÃO/NOT lógico)
console.log(!true);   // false
console.log(!false);  // true

let n1=10, n2=5, n3=15, n4=2;

console.log((n1>n2) && (n1>n3)); // false
console.log((n1>n2) || (n1>n3)); // true

console.log(!( (n1>n2) && (n1>n3) )); // false vai inverter para true
console.log(!( (n1>n2) || (n1>n3) )); // true vai inverter para false
