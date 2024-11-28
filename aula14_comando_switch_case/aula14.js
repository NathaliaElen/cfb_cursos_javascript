const diaDaSemana = 4;

switch (diaDaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido");
}

let colocacao = 1;

switch (colocacao) {
  case 1:
      console.log('Primeiro Lugar!');
      break;
  case 2:
      console.log('Segundo Lugar!');
      break;
  case 3:
      console.log('Terceiro Lugar!');
      break;
  case 4: case 5: case 6:
      console.log('Vai ganhar um prêmio de participação!');
      break;
  default:
      console.log('Não subiu ao pódio!');
      break;
}

