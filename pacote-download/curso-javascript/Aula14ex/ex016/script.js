function Contar() {
  let inicio = document.getElementById("txtInicio");
  let fim = document.getElementById("txtFim");
  let passos = document.getElementById("txtPassos");
  let res = document.getElementById("res");

  if (inicio.value.length == 0 || fim.value.length == 0) {
    res.innerHTML = `Impossível Contar!`;
    document.body.style.background = "red";
  } else {
    document.body.style.background = "rgb(11, 167, 240)";
    res.innerHTML = "Contando: <br>";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passos.value);

    if (p <= 0) {
      window.alert("Passo Inválido, Considerando Passo = 1");
      p = 1;
    }
    if (i < f) {
      for (var cont = i; cont <= f; cont += p) {
        // Conta Crescente
        res.innerHTML += `\u{1F449} ${cont} `;
      }
    } else {
      for (var cont = i; cont >= f; cont -= p) {
        // Conta Decrescente
        res.innerHTML += `\u{1F449} ${cont} `;
      }
    }
    res.innerHTML += `\u{1F449} \u{1F3C1}`; 
  }
}
