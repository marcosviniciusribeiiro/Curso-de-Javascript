function contar(){
    let numero = Number(document.getElementById("numero").value)
    let res = document.getElementById('res')
    res.innerHTML = ''
    if(numero == 0 || isNaN(numero)){
        res.innerHTML = "Por favor, insira um número válido maior que 0;";
        document.body.style.background = 'rgb(240, 6, 6)' 
    }else{
        let lista = "<ul>"; // Inicia uma lista não ordenada
        for(let i = 1; i<= numero; i++){
            lista += `<li>${i}</li>`; // Adiciona cada número à lista
        }
        lista += "<ul>"; // Fecha a lista não ordenada
        res.innerHTML = lista; // Exibe a lista na página
    }
}