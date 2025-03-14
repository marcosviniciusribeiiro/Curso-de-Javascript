function carregarPagina() {
  var msg = document.getElementById("msg");
  var imagem = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();
  if (hora >= 0 && hora < 12) {
    //Bom Dia
    msg.innerHTML = `<strong>Bom Dia!</strong> Agora são <strong>${hora}</strong> horas, <strong>${minuto}</strong> minutos e <strong>${segundo}</strong> segundos`;
    imagem.src = "fotomanha.jpg";
    document.body.style.background = "#F2D4AE";
    document.body.style.color = "black";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `<strong>Boa Tarde!</strong> Agora são <strong>${hora}</strong> horas, <strong>${minuto}</strong> minutos e <strong>${segundo}</strong> segundos`;
    imagem.src = "fototarde.jpg";
    document.body.style.background = "#C08669";
  } else {
    msg.innerHTML = `<strong>Boa Noite!</strong> Agora são <strong>${hora}</strong> horas, <strong>${minuto}</strong> minutos e <strong>${segundo}</strong> segundos`;
    imagem.src = "fotonoite.jpg";
    document.body.style.background = "#150F40";
  }
}