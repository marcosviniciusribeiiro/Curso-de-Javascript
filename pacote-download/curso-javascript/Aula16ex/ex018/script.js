let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.getElementById("res");
let valores = [];
function isNum(n) {
  if (n >= 1 && n <= 100) {
    return true;
  } else {
    return false;
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function Adicionar() {
  if (isNum(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value)); // o comando push adiciona cada num.value não cadastrado ao vetor
    let item = document.createElement("option"); //para ver os elemento visualmente dentro de um select precisamos de uma var, para criar um elemento <option>
    item.text = `Valor ${num.value} adicionado na lista`; //texto por item/option da lista
    lista.appendChild(item); //para adicionar o let item na lista / visualizar-lo dentro do select
    res.innerHTML = ""; // quando adicionar um valor na lista, limpamos o resultado #res, para ver os resultados somente quando clicar em Finalizar
    num.value = ""; //limpa o campo de digitar num
    num.focus(); //deixa o let num selecionado
  } else {
    alert("Valor Inválido ou já Encontrado na Lista");
  }
}
function Finalizar() {
  if (valores.length == 0) {
    alert("Nenhum Número foi Analizado, Adicione algum Número!");
  } else {
    let total = valores.length; //qual é o valor total do vetor?

    res.innerHTML = ""; 
    if (total === 1) {
      res.innerHTML += `<p> Foi Cadastrado somente ${total} Número</p>`;
    } else {
      res.innerHTML += `<p> Ao todo, Foram Cadastrados ${total} Números</p>`;
    }
    let maior = valores[0]; 
    let menor = valores[0]; 

    let soma = 0; 
    let media = 0; 
    media.toFixed(2);

    for (pos in valores) {
      if (valores[pos] > maior) {
        maior = valores[pos];
      }
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
      soma += valores[pos];

      media += valores[pos] / total;
    }
    res.innerHTML += `<p>o Maior Valor cadastrado foi o ${maior}, e o Menor Valor cadastrado foi o ${menor}.</p>`;
    res.innerHTML += `<p>A média dos ${total} valores cadastrados foi ${media}</p>`;
    res.innerHTML += `<p>A soma de todos os valores cadastrados é igual a ${soma}</p>`;
  }
}
