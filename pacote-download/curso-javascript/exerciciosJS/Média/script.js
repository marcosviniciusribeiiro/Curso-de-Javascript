function Calcular() {
  let nome = document.getElementById("nome");
  let nomeValor = nome.value.trim(); // Remove espaços extras
  let res = document.getElementById("res");
  // Verificação do nome
  if (nomeValor.length === 0) {
    alert("Digite o seu Nome!");
    return;
  }

  // Verificação das notas
  let n1Val = document.getElementById("n1").value.trim();
  let n2Val = document.getElementById("n2").value.trim();
  if (n1Val === "" || n2Val === "") {
    alert("Digite um valor para cada nota!");
    return;
  }
  let n1 = Number(n1Val);
  let n2 = Number(n2Val);
  if (isNaN(n1) || n1 < 0 || isNaN(n2) || n2 < 0) {
    alert("As notas devem ser números válidos e não podem ser negativas!");
    return;
  }
  // Cálculo da média
  let media = (n1 + n2) / 2;
  // Mudança de cor e exibição do resultado
  if (media < 6) {
    document.body.style.background = "rgb(255, 0, 0)";
    res.innerHTML = `Média do Aluno(a): <strong>${media.toFixed(
      2
    )}</strong><br>Infelizmente, o(a) aluno(a) <strong>${nomeValor}</strong> foi <strong>Reprovado</strong> na matéria 😔`;
  } else {
    document.body.style.background = "lightblue";
    res.innerHTML = `Média do Aluno(a): <strong>${media.toFixed(
      2
    )}</strong><br>Parabéns, <strong>${nomeValor}</strong>! Você foi <strong>Aprovado</strong> na matéria! 😊`;
  }
}
