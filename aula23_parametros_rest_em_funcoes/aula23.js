//Função parametrizada, mas se eu colocar 3 ou mais parâmetros essa função já não vai servir
function soma(n1=0, n2=0) {
  return n1 + n2;
}
console.log(soma(10, 5));

//Função com Parâmetros REST, aproveitar a mesma função para um número não definido de valores
function soma2(...valores) {
  for(let v of valores) {
    res += v;
  }
  return res;
}
console.log(soma2(10, 5, 2, 15, 8));

function somaTudo(...numeros) {
  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}
console.log(somaTudo(1, 2, 3, 4)); // Saída: 10
console.log(somaTudo(5, 10));      // Saída: 15


