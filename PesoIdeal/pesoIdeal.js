// Calculadora de peso
// Calcula o peso ideal de uma pessoa obedecendo fatores de peso pré-determinados
btnCalcular.addEventListener('click', function () { // Clicar no botão "Calcular" irá mostrar o peso ideal do usuário
     var formNome = nome.value
     var formAltura = altura.value
     var sexoM = sexoMasculino.checked
     var sexoF = sexoFeminino.checked
     var fatorPeso
     var pesoFinal
     // Verificação
     if (formNome === "") {
        alert('Favor, preencha o campo nome!')
        formNome.focus()
        return
     }
     if (sexoM === false && sexoF === false) {
        alert('Favor, selecione seu sexo!')
        return
     }
     if (formAltura <= 0 || isNaN(formAltura)) {
        alert('Favor, preencha corretamente o campo altura!')
        altura.focus()
        return
     }
     // Condições
     // Condição que predefine o índice do cálculo de peso
     if (sexoMasculino === true){
      fatorPeso = 22
     } else {
      fatorPeso = 21
     }
     // If ternário
     fatorPeso = (sexoM === true) ? 22 : 21
     // Efetua o cálculo
     pesoFinal = fatorPeso * Math.pow(formAltura, 2).toFixed(2)
     // Capturar o elemento onde será mostrado o resultado do cálculo
     mostrarPeso = document.getElementById('pesoIdeal')
     // Mostra do resultado do cálculo na div
     mostrarPeso.innerHTML = `
        <p>Olá, ${formNome}, seu peso ideal é ${pesoFinal}KG.</p>`
})
// Função "reload page" no botão limpar
// Seleciona o id do botão
var btn = document.querySelector("#btnLimpar")
// Evento "click", que faz a orientação de quando o usuário clicar no botão "Limpar"
btn.addEventListener('click', function(){
    alert("A página foi recarregada com sucesso!") // Alert informando o reload
    document.location.reload() // Parâmetro do reload
})