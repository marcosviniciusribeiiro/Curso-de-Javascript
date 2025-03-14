function somar() {
  let num1 = Number(document.getElementById("n1").value);
  let num2 = Number(document.getElementById("n2").value);
  let res = document.getElementById("res");
  if (num1 > 0 && num2 > 0) {
    res.innerHTML = "";
    var s = num1 + num2;
    document.body.style.backgroundColor = "aqua";
    res.innerHTML = `Resultado da soma de ${num1} + ${num2} é igual a ${s}`;
  } else {
    document.body.style.backgroundColor = "red";
    res.innerHTML = "Digite dois Números acima!";
  }
}
