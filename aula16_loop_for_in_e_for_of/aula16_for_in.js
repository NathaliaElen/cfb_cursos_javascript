let num=[10,20,30,40,50];

/*
for (let i=0;i<num.length;i++) {
  console.log(num[i]);
}
*/

for(n in num) {
  console.log(num[n]);
}

const person = { name: "Alice", age: 25, city: "New York" };

for (const key in person) {
  //console.log(key); // name, age, city
  //console.log(person[key]); // Alice, 25, New York
  console.log(`Chave: ${key}, Valor: ${person[key]}`);
}

const numbers = [10, 20, 30];

for (const index in numbers) {
  console.log(`Índice: ${index}, Valor: ${numbers[index]}`);
}

objs= document.getElementsByTagName("div");
for (o in objs) {
    console.log(objs[o].innerHTML);
}