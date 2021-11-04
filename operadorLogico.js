var carro = prompt("Digite o nome do carro")
var preco = parseFloat(prompt("Digite o valor do carro"))

/** && AND E
* Estou procurando um carro GOL
* e o preço deve ser menor que 30000
*/
if (carro === "Gol" && preco < 30000) {
    alert("Encontrou o carro usando o E!")
} else {
    alert("Carro não encontrado usando o E!")
}


/** 
* || OR OU 
* Estou procurando um carro GOL ou ONIX ou UP
* e o preço deve ser menor que 60000
*/
if ((carro == "Gol" || carro == "Onix" || carro == "Up") && preco < 60000) {
    alert("Encontrou o carro usando o OU!")
} else {
    alert("Carro não encontrado usando o OU!")
}

// IF ELSE
var idade = 18
var comprovante = true

if(idade < 16){
    texto = "Não vota!";
} else{
    texto = "Pode votar!"
}

// Operador Ternário
texto = (idade < 18 && comprovante === false) ? "Adolescente" : "Adulto"

// Operador Ternário
var salario = 2000
var percInss
// (condição) ? valor_verdadeiro : valor_falso
percInss = (salario < 1500) ? 0.08 : 0.11