let num = [3, 7, 1, 9]; 
num[3] = 8; //valor do indice [3] foi alterado, de 9 para 8
num.push(6); 
num.sort(); //organiza os números dentro do vetor em ordem crecente

//Quantos valores a variavel possui?
console.log(`Nosso vetor possui os valores ${num}`);

//Qual é o tamanho desse vetor?
console.log(`O vetor possui ${num.length} posições`);
  
//O comando num.length calcula o tamanho do vetor 
console.log(`O primeiro valor desse vetor é igual a ${num[0]}`); 

let pos = num.indexOf(3);

if (pos == -1) {
  console.log(`O valor não foi encontrado dentro desta variável`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
