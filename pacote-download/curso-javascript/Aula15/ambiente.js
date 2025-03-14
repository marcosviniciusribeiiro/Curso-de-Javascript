let num = [3, 7, 1, 9]; // NUM DENTRO DE COLCHETES
num[3] = 8; //valor do indice [3] foi alterado, de 9 para 10
num.push(6); //foi adicionado um novo elemento dentro desse vetor
num.sort(); //organiza os números em ordem crecente
console.log(`Nosso vetor possui os valores ${num}`); //Quantos valores a variavel possui?
console.log(`O vetor possui ${num.length} posições`); //Qual é o tamanho desse vetor? num.length calculou o tamanho
console.log(`O primeiro valor desse vetor é igual a ${num[0]}`); //calcula o valor do num que está na posição [0]
let pos = num.indexOf(8);
if (pos == -1) {
  console.log(`O valor não foi encontrado dentro desta variável`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
