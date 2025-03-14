function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtAno");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("[Erro!] Verifique os Dados e Tente Novamente! ");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 12) {
        img.setAttribute("src", "bebê-homem.jpg");
      } else if (idade <= 25) {
        img.setAttribute("src", "jovem-adulto.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "homem-adulto.jpg");
      } else {
        img.setAttribute("src", "idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        img.setAttribute("src", "bebê-mulher.jpg");
      } else if (idade <= 25) {
        img.setAttribute("src", "jovem-adulta.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "mulher-adulta.jpg");
      } else {
        img.setAttribute("src", "idosa.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`;
    res.appendChild(img);
  }
}
