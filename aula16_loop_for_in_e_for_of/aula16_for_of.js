//Exemplo com array
const numbers = [10, 20, 30];
for (const value of numbers) {
  console.log(`Valor: ${value}`);
}
// Saída:
// Valor: 10
// Valor: 20
// Valor: 30

//Exemplo com string
const text = "JavaScript";
for (const char of text) {
  console.log(`Caractere: ${char}`);
}
// Saída:
// Caractere: J
// Caractere: a
// Caractere: v
// ...

//Exemplo com Map
const map = new Map();
map.set("name", "Alice");
map.set("age", 25);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Saída:
// name: Alice
// age: 25

objs= document.getElementsByTagName("div");
for (o of objs) {
    console.log(o.innerHTML="Trocando o texto");
}