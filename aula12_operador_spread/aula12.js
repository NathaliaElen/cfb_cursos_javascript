"use strict";

//Copiar Arrays
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros]; // Copia o array
console.log('Copia dos números: ' + copiaNumeros + ' - Tipo de Copia dos números: ' + typeof(copiaNumeros)); // [1, 2, 3] e object

//Combinar Arrays
let n1=[10,20,30];
let n2=[11,22,33,44,55];
let n3=[...n1,...n2]; //concatenação de arrays
console.log('N1: ' + n1 + ' - Tipo de N1: ' + typeof(n1));
console.log('N2: ' + n2 + ' - Tipo de N2: ' + typeof(n2));
console.log('N3: ' + n3 + ' - Tipo de N3: ' + typeof(n3)); //[10,20,30,11,22,33,44,55] e object

//Copiar e Combinar Objetos
const pessoa1 = {nome:"João", idade:30, sexo:"Masculino"};
const pessoa2 = {nome:"Maria", idade:55, sexo:"Feminino"};
const pessoa3 = { ...pessoa1,...pessoa2}; // Cópia do objeto
console.log(pessoa3); // {nome:"Maria", idade:55, sexo:"Feminino"}, só mostra a última pessoa, porque eu tenho exatamente o que eu tenho em pessoa1 em pessoa2

//adicionar ou sobrescrever propriedades, concatenação de objetos
let jogador1={nome:"Bruno",energia:100,vidas:3,magia:150};
let jogador2={nome:"Bruce",energia:100,vidas:5,velocidade:80};
let jogador3={...jogador1,...jogador2};
console.log(jogador3); //{ nome: 'Bruce', energia: 100, vidas: 5, magia: 150, velocidade: 80 }
//aqui ele pegou a ultima pessoa, mas também imprimir a propriedade incomum entre os dois objetos magia e velocidade

//Passar Argumentos para Funções
const numero = [1, 2, 3];
console.log(Math.max(...numero)); // 3
console.log(Math.min(...numero)); // 1

const soma = (v1,v2,v3) => {
    return v1+v2+v3;
}
let valores = [1, 5, 4];
console.log(soma(...valores)); // 10

//Dividir Strings em Arrays
const texto = "Olá";
const caracteres = [...texto];
console.log(caracteres); // ['O', 'l', 'á']

//Não tem como rodar pelo Code Runner, somente pelo navegador
const objs1 = document.getElementsByTagName("div");
console.log(objs1); //HTMLCollection(3) [div, div, div] - só recebe elementos HTML

const objs2 = [...document.getElementsByTagName("div")];
console.log(objs2); //(3) [div, div, div] - isso é um array de elementos HTML, pode adicionar outros tipos de elementos que não sejam somente HTML, exemplo valores, string e etc.

objs2.forEach(element => {
    console.log(element); //retorna as divs
});

objs1.forEach(element => {
    console.log(element); //dar erro
});