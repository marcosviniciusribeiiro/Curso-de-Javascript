function parImpar(n) /*n = parametro formal*/ {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  } 
}

let res = parImpar(13);

console.log(res); /*resposta, se é par ou impar*/
