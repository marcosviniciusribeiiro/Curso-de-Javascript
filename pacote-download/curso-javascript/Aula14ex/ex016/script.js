function Contar() {
  let inicio = document.getElementById("txtInicio");
  let fim = document.getElementById("txtFim");
  let passos = document.getElementById("txtPassos");
  let res = document.getElementById("res");

  if (inicio.value.length == 0 || fim.value.length == 0) {
    res.innerHTML = `Impossível Contar!`;
    //window.alert("Insira os dados novamente!");
    document.body.style.background = "red";
  } else {
    document.body.style.background = "rgb(11, 167, 240)";
    res.innerHTML = "Contando: <br>";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passos.value);

    /*Caso inicio != 0, fim != 0 & passos <= 0*/
    if (p <= 0) {
      window.alert("Passo Inválido, Considerando Passo = 1");
      p = 1;
    }
    if (i < f) {
      for (var cont = i; cont <= f; cont += p) {
        // Conta Crescente
        res.innerHTML += `\u{1F449} ${cont} `;
      }
    } else {
      for (var cont = i; cont >= f; cont -= p) {
        // Conta Decrescente
        res.innerHTML += `\u{1F449} ${cont} `;
      }
    }
    res.innerHTML += `\u{1F449} \u{1F3C1}`; //Para deixar um emoji que indica fim da contagem, foi preciso utilizar o .innerHTML após o laço de repetição
  }
}

//tranformando a var txt em number dentro da condição faz com que o res seja auterado em cada execução

//Para Incluir emoticons no script é possivel acessar o site da Unicode: selecionar o emote e a seu respectivo codigo

//o \u{codigo} é a forma de inserimos o emote do unicode

/* Como testar as 3 variáveis com uma só condição?
  if (
    inicio.value.length == 0 ||
    fim.value.lenght == 0 ||
    passos.value.lenght == 0
  ) {
    alert("Erro, insira os dados novamente!");
  } else {
    alert("Dados aceitos!");
  } /* A condição acima testará que dados foram insiridos*/
