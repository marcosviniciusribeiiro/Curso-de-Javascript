var hora = new Date();
var horarioAtual = hora.getHours();
if ((horarioAtual >= 3) & (horarioAtual <= 12)) {
  alert("Bom Dia!");
} else if ((horarioAtual > 12) & (horarioAtual <= 18)) {
  alert("Boa Tarde!");
} else {
  alert("Boa Noite!");
}
