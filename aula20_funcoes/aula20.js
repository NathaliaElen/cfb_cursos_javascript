//Declaração de uma função
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

//Chamando uma função
saudacao("Maria"); // Saída: Olá, Maria!

function mudarTexto() {
  let d1=document.getElementById("d1");
  let d2=document.getElementById("d2");
  let d3=document.getElementById("d3");
  d1.innerHTML = "Nathália Elen";
  d2.innerHTML = "Analista de Sistemas";
  d3.innerHTML = "Estudante de Programação";
}