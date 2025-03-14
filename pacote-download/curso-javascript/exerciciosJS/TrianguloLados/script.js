function Calcular() {
  var L1 = Number(document.getElementById("L1").value);
  var L2 = Number(document.getElementById("L2").value);
  var L3 = Number(document.getElementById("L3").value);
  var res = document.getElementById("res");
  if (L1 <= 0 || L2 <= 0 || L3 <= 0) {
    res.innerHTML = `Insira 3 Números Positivos!`;
    document.body.style.backgroundColor = "red";
    return;
  }
  if (L1 === L2 && L2 === L3) {
    res.innerHTML = `Os <strong>Valores</strong> do <strong>Lado 1</strong>, <strong>Lado 2</strong> e do <strong>Lado 3</strong>:<br> Formam um <strong>Triângulo Equilátero</strong>`;
    document.body.style.backgroundColor = "rgb(0, 205, 79)";
  } else if (
    (L1 === L2 && L1 !== L3) ||
    (L1 === L3 && L1 !== L2) ||
    (L2 === L3 && L2 !== L1)
  ) {
    res.innerHTML = `Os <strong>Valores</strong> do <strong>Lado 1</strong>, <strong>Lado 2</strong> e do <strong>Lado 3</strong>:<br> Formam um <strong>Triângulo Isósceles</strong>`;
    document.body.style.backgroundColor = "rgb(42, 131, 255)";
  } else {
    res.innerHTML = `Os <strong>Valores</strong> do <strong>Lado 1</strong>, <strong>Lado 2</strong> e do <strong>Lado 3</strong>:<br> Formam um <strong>Triângulo Escaleno</strong>`;
    document.body.style.backgroundColor = "rgb(255, 42, 77)";
  }
}

/*

            if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
                } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                    resultado.textContent = "Forma um triângulo isósceles.";
                } else {
                    resultado.textContent = "Forma um triângulo escaleno.";
                }
            } else {
            }
        }
*/
