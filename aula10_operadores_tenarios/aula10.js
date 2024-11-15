"use strict";

/*
0 = False
1 = True

Operador Tenário
condição ? valor_se_verdadeiro : valor_se_falso;
*/

//Permissão para dirigir
let idade = 18;
let podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(podeDirigir); // "Pode dirigir"

//Verificando a paridade de um número
let numero = 4;
let resultado = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado); // "Par"

//Verificando se a pessoa é de menor, adulto ou idoso
//Operador Ternário aninhado (Nested Ternary)
//condição1 ? valor_se_verdadeiro_1 : (condição2 ? valor_se_verdadeiro_2 : valor_se_falso_2);
let idadePessoa = 65;
let statusPessoa = idadePessoa < 18 ? "Menor de Idade" : (idadePessoa < 60 ? "Adulto" : "Idoso");
console.log(statusPessoa); // "Adulto"