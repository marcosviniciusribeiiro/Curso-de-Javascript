function fatorar() {
  var num = Number(document.getElementById("txtnum").value);
  var res = document.getElementById("res");
  if (isNaN(num) || num < 0) {
    res.innerHTML = `Digite um número >= 0 para iniciar a fatoração!`;
    document.body.style.background = "red";
    return;
  }
  document.body.style.background = "rgb(11, 167, 240)";
  if (num === 0 || num === 1) {
    res.innerHTML = `O <strong>Fatorial</strong> de ${num} é <strong>1</strong>`;
    return;
  }
  var resultado = 1;
  var passos = `${num}! = `;
  cont = num;
  res.innerHTML = passos;

  function calcularPasso() {
    if (cont >= 1) {
      resultado *= cont; 
      res.innerHTML += `<strong>${cont}</strong> `; 

      if (cont > 1) {
        res.innerHTML += "× "; 
      } else {
        res.innerHTML += ` = <strong>${resultado}</strong>`; // Último número: exibe o resultado final
      }
      cont--; 

      setTimeout(calcularPasso, 500); // Aguarda 500ms antes de chamar a função novamente
    }
  }
  calcularPasso(); //repete a function
}
