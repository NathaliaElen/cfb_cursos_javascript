"use strict";

console.log(typeof 42);            // "number"
console.log(typeof "Olá");         // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (isto é uma peculiaridade do JavaScript)
console.log(typeof {});            // "object"
console.log(typeof []);            // "object" (arrays também são objetos)
console.log(typeof function(){});  // "function"

let idade = 30;
console.log((typeof idade)); // "number"