function Contar() {
  let num = Number(document.getElementById("txtnum").value);
  let res = document.getElementById("res");
  if (num <= 0 || isNaN(num)) {
    res.innerHTML = `Digite um número que seja > 0`;
    document.body.style.background = "red";
    return;
  } else {
    document.body.style.background = "rgb(11, 167, 240)";
    res.innerHTML = "";
    for (var c = num; c >= 0; c--) {
      res.innerHTML += `🏃🏽‍➡️ ${c}... `;
    }
    res.innerHTML += " 🏁";
  }
}
