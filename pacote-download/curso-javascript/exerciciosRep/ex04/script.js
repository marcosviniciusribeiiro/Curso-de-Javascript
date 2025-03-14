function Contar() {
  var num = Number(document.getElementById("txtnum").value);
  var res = document.getElementById("res");
  if (isNaN(num) || num <= 0) {
    res.innerHTML = `Por Favor, digite um Número!`;
    if (num < 0) {
      res.innerHTML = `Por Favor, digite um Número Positivo!`;
    }
    document.body.style.background = "rgb(204, 16, 16)";
    return;
  } else {
    document.body.style.background = "rgb(11, 167, 240)";
    res.innerHTML = `Números Impares, de 1 a ${num}:<br>`;
    var lista = "<ul>";
    for (var c = 1; c <= num; c++) {
      if (c % 2 != 0) {
        lista += `<li>👉 ${c}</li>`;
      }
    }
    lista += "</ul>";
    res.innerHTML += lista;
  }
}
