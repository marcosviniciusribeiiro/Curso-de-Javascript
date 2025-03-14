function Somar() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.getElementById("txtn2");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var soma = n1 + n2;
  var res = window.document.getElementById("res");
  res.innerHTML = `O resultado da soma dos números ${n1} é ${n2} é <strong>${soma}</strong>`;
}
function Subtrair() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.getElementById("txtn2");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var subtrai = n1 - n2;
  res.innerHTML = `O Resultado da subtração dos números ${n1} é ${n2} e <strong>${subtrai}</strong>`;
}
function Multiplicar() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.getElementById("txtn2");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var multiplica = n1 * n2;
  res.innerHTML = `O Resultado da multiplicação dos números ${n1} é ${n2} e <strong>${multiplica}</strong>`;
}
function Dividir() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.getElementById("txtn2");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  if (n2 === 0) {
    alert("Não é possível dividir por zero!");
  } else {
    var dividir = n1 / n2;
    res.innerHTML = `O resultado da divisão dos números ${n1} e ${n2} é <strong>${dividir}</strong>.`;
  }
}
