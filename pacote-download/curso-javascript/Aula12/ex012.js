//Como pegar a hora atual do relógio?
var horarioAgora = new Date(); 
var hora = horarioAgora.getHours();
var minutos = horarioAgora.getMinutes();
var segundos = horarioAgora.get();

console.log(
  `O horário atual de Brasília são ${hora} Horas, ${minutos} Minutos e ${segundos} Segundos!`
); //horario atual do sistema

if (hora >= 0 && hora <= 6) {
  console.log("Boa Madrugada!");
} else if (hora <= 12) {
  console.log("Tenha um Bom Dia!");
} else if (hora <= 18) {
  console.log("Tenha uma Boa Tarde!");
} else {
  console.log("Tenha um Boa Noite!");
}
