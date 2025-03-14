var agora = new Date();
var diaSem = agora.getDay(); //getDia

/* No JS os resultados do comando .getDay acima serão representados por números:
  0 = Domingo
  1 = Segunda
  2 = Terça 
  3 = Quarta
  4 = Quinta
  5 = Sexta 
  6 = Sábado
*/

switch (diaSem) {
  case 0:
    console.log(`Dia de Hoje: Domingo`);
    break;
  case 1:
    console.log(`Dia de Hoje: Segunda`);
    break;
  case 2:
    console.log(`Dia de Hoje: Terça`);
    break;
  case 3:
    console.log(`Dia de Hoje: Quarta`);
    break;
  case 4:
    console.log(`Dia de Hoje: Quinta`);
    break;
  case 5:
    console.log(`Dia de Hoje: Sexta`);
    break;
  case 6:
    console.log(`Dia de Hoje: Sábado`);
    break;
  default:
    console.log(`Erro! Dia Inválido!`);
    break;
} //No exemplo dos dias da semana, todos são valores fixos de 0-6 e por isto vale apena utilizar o switch como condição

/* Mas é possivel escrever o código utilizando condições aninhadas, vamos ver como ficaria:
if (diaSem == 0) {
  diaSem = "Domingo";
} else if (diaSem == 1) {
  diaSem = "Segunda";
} else if (diaSem == 2) {
  diaSem = "Terça";
} else if (diaSem == 3) {
  diaSem = "Quarta";
} else if (diaSem == 4) {
  diaSem = "Quinta";
} else if (diaSem == 5) {
  diaSem = "Sexta";
} else {
  diaSem = "Sábado";
}
console.log(`Dia de Hoje: ${diaSem}`);  console.log para retornar o resultado neste exemplo
*/
