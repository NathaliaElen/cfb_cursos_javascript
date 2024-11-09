"use strict";

//Mesmo a variável nome tendo sido criada no escopo do acima, eu tenho acesso fora do escopo
if (true) {
    var nome = "Nathália";
}
console.log(nome);

//Em Javascript, consigo alterar o valor de uma variável com  o tipo de valor diferente, faz a conversão de tipos de forma automática
let nome3 = "Maria";
nome3 = 10;
console.log(nome3);

//Sempre vai elevar de onde ele foi declarado para cima, nunca escopo anteriores
function teste(){
    let nome2 = "Bruno";
    if (true) {
        console.log("Dentro do ID do teste:" + nome2);
    }
    console.log("Dentro de teste:" + nome2);
}
teste();
console.log("Fora de teste:" + nome2);