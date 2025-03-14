function Calcular() {
  let peso = document.getElementById("peso");
  let alt = document.getElementById("alt");
  let res = document.getElementById("res");
  //Verificar os dados inseridos
  let pesoVal = peso.value;
  let altVal = alt.value;
  if (pesoVal === "" || altVal === "") {
    document.body.style.backgroundColor = "red";
    res.innerHTML = "Insira a sua Altura e Peso!";
    return;
  } else {
    let IMC = pesoVal / (altVal * altVal);
    document.body.style.backgroundColor = "aqua";
    res.innerHTML = `O seu IMC é ${IMC.toFixed(2)}<br>`;
    if (IMC <= 16) {
      res.innerHTML += `Classificação: Magreza Grave!`;
    } else if (IMC > 16 && IMC <= 17) {
      res.innerHTML += `Classificação: Magreza Moderada`;
    } else if (IMC > 17 && IMC <= 18.5) {
      res.innerHTML += `Classificação: Magreza Leve`;
    } else if (IMC > 18.5 && IMC <= 25) {
      res.innerHTML += `Classificação: Saudável!`;
    } else if (IMC > 25 && IMC <= 30) {
      res.innerHTML += `Classificação: Sobrepeso`;
    } else if (IMC > 30 && IMC <= 35) {
      res.innerHTML += `Classificação: Obesidade de grau I!`;
    } else if (IMC > 35 && IMC <= 40) {
      res.innerHTML += `Classificação: Obesidade de grau II!`;
    } else {
      res.innerHTML += `Classificação: Obesidade de grau III!`;
    }
  }
}
