function soma() {
  var num = Number(document.getElementById("txtnum").value);
  var res = document.getElementById("res");
  if (num == 0 || isNaN(num)) {
    setTimeout(() => {
      document.body.style.background = "red";
    }, 200); //transição 1
    res.innerHTML = "Dados Inválidos!";
    return;
  } else {
    setTimeout(() => {
      document.body.style.background = "rgb(11, 167, 240)";
    }, 200); //transição 2
    var soma = 0;
    for (var cont = 1; cont <= num; cont++) {
      soma += cont; 
    }
    res.innerHTML = `A <strong>soma do números</strong> 1 a ${num} é <strong>igual</strong> a <strong>${soma}</strong>`;
  }
}
