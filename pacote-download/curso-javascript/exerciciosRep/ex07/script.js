function exibir() {
  var palavra = prompt("Digite Uma Palavra: ");
  var lista = document.getElementById("lista");
  if (!palavra) {
    alert("Você tem que digitar uma palavra para poder prosseguir!");
    return;
  }
  lista.innerHTML = ""; // Limpa a lista antes de exibir a nova palavra
  lista.innerHTML = `<hr>Caracteres`;
  for (var i = 0; i < palavra.length; i++) {
    lista.innerHTML += `<li>${palavra[i]}</li>`; // Adiciona cada letra à lista
  }
}
/*


        }
*/
