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
      soma += cont; //alterei o soma+=num por soma+=cont
    }
    res.innerHTML = `A <strong>soma do números</strong> 1 a ${num} é <strong>igual</strong> a <strong>${soma}</strong>`;
  }
}

/*
Lista de Exercícios - JavaScript
2. Multiplicação ao invés de soma
Modifique o código para calcular o fatorial do número digitado. O fatorial de n (representado como n!) é o produto de 1 × 2 × 3 × ... × n.

3. Contagem regressiva
Em vez de somar, faça com que o código exiba uma contagem regressiva de num até 1, mostrando os números na tela.

4. Validação de entrada
Atualmente, o código apenas verifica se num == 0. Adicione verificações para impedir a entrada de números negativos e valores não numéricos.

5. Par ou ímpar
Modifique o código para verificar se o número digitado é par ou ímpar e exiba a mensagem correspondente na div res.

6. Tabuada do número digitado
Ao invés de somar, faça o programa gerar e exibir a tabuada do número digitado (de 1 a 10).

7. Exibição dinâmica dos cálculos
Em vez de exibir apenas o resultado final da soma, faça com que o código mostre cada passo da soma (exemplo: 1 + 2 + 3 + ... = resultado).

8. Contador com tempo real
Adapte o código para usar setInterval e exibir a soma progressivamente na tela, como se estivesse calculando em tempo real.

9. Uso de switch-case
Modifique o código para que o usuário possa escolher diferentes operações matemáticas (soma, subtração, multiplicação, etc.) usando um switch-case.

10. Efeito visual ao alterar cor de fundo
Em vez de mudar instantaneamente a cor de fundo, utilize transições CSS ou animações JavaScript (setTimeout) para fazer uma mudança suave.

Esses exercícios vão te ajudar a aprender mais sobre laços (for), manipulação do DOM, eventos, e boas práticas de programação em JavaScript. Quer que eu te ajude com a solução de algum deles?
*/
