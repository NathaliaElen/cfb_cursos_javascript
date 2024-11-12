"use strict";

//igualdade - Verifica se dois valores são iguais após a conversão de tipo.
let a = 5, b='5';
console.log(a == b); //true

//estritamente igual - Verifica se dois valores são iguais e do mesmo tipo (não faz conversão de tipo).
let e=5, f='5', g=5;
console.log(e === f); // false
console.log(e === g); // true

//Mas quando falamos de objeto no js, vai ser falso tanto para o == quanto para o ===, mesmo se tenha o mesmo tipo e valor, porque ele considera também o endereço de memória - cada um é armazenado em uma posição de memoria
let v1={nome: 'Nathália'}
let v2=v1
console.log(v1===v2);

//Diferença do diferente(!=) e not(!)
let c=5, d=1;
console.log(c != d); // true
//mas se eu colocar o not(!) o resultado inverte
let h=5, i=1;
console.log(!(h != i)); // false

/*
Nomenclatura de variáveis e escopo
Não tem problema fazer a identificação por prefixo
g=global
l=local
c=constante
*/
let g_minhaIdade = 22;

{
    let l_siglaCurso='JS';
    console.log(l_siglaCurso);
}

const curso=() => {
    let c_curso='JavaScript';
    console.log(c_curso);
}
curso();

//Entrada de dados
let meuNome=prompt('Digite seu nome: ');




