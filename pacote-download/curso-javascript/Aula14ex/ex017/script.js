function Tabuada() {
  /*função do ex*/
  var num = document.getElementById("txtNum");
  var cont = document.getElementById("txtTab");
  var tab = document.getElementById("selTab");
  tab.innerHTML = ""; //limpa o select antes de calcular a próxima tabuada

  if (num.value.length == 0 || cont.value.length == 0) {
    document.body.style.background = "red";
  } else if (num.value.length != 0 && cont.value.length != 0) {
    document.body.style.background = "rgb(11, 167, 240)";
    var n = Number(num.value);
    var c = Number(cont.value);
    for (var contador = 1; contador <= c; contador++) {
      var item = document.createElement("option");
      var res = n * contador;
      item.text = `${n} x ${contador} = ${res}`;
      item.value = `tab${contador}`;
      tab.appendChild(item);
    }
  }
}
