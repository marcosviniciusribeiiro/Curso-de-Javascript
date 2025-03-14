let amigo = {
  nome: "Caio",
  idade: 19,
  peso: 76.2,
  sexo: "M",
  engordar(p = 0) {
    console.log(`Ele Engordou!`);
    this.peso += p;
  },
};
amigo.engordar(5);
console.log(`O ${amigo.nome} está pesando ${amigo.peso}`);
/*
  console.log(amigo.nome);  | qual o nome do amigo?
  console.log(amigo.idade); | qual a idade do amigo?
*/
