var agora = new Date();
var diaSem = agora.getDay(); 

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
}
/* No JS os resultados do comando .getDay acima serão representados por números:
  0 = Domingo
  1 = Segunda
  2 = Terça 
  3 = Quarta
  4 = Quinta
  5 = Sexta 
  6 = Sábado
*/