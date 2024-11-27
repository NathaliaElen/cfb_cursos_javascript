let energia=100;
let clima="chovendo";
if (energia > 70 && clima == "sol") {
    console.log("Vou a praia");
} else {
    console.log("Vou ao cinema");
}
console.log("Fim do programa");

let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
console.log("Fim do programa");

//Com else if (múltiplas condições)
//Para verificar várias condições, você pode usar else if:
let nota = 85;
if (nota >= 90) {
  console.log("Aprovado com excelência.");
} else if (nota >= 70) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}
console.log("Fim do programa");