function parImpar(n) /*n = parametro formal*/ {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  } /*a condição é a ação*/
}
/*variavel resultado + chamada de (n), com 8 sendo o parametro real*/
let res = parImpar(13);

console.log(res);
/*resposta, se é par o impar*/
