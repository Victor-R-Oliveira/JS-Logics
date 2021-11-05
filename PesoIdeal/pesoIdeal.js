// Calculadora de peso
// Calcula o peso ideal de uma pessoa obedecendo fatores de peso pré-determinados


btnCalcular.addEventListener('click', function () { // Clicar no botão "Calcular" irá mostrar o peso ideal do usuário
     formNome = nome.value
     formAltura = altura.value
     sexoMasculino

     // Condições
     radio = document.getElementsByClassName('form-check-input') // Captura do form-check do sexo
     if(radio.checked){
        fatorPeso = 22
     } else {
        fatorPeso = 21
     }
     
     // Condição para caso o usuário não selecionar seu sexo
     /* if(typeof(radio.value) === undefined) {
        alert("Selecione o sexo!")
     }
     */

     // Efetua o cálculo
     pesoFinal = fatorPeso * Math.pow(formAltura, 2).toFixed(2)

     // Este alert comentado serve pra fazer o debug
     // alert(pesoFinal)

     // Capturar o elemento onde será mostrado o resultado do cálculo
     mostrarPeso = document.getElementById('pesoIdeal')

     // Mostra do resultado do cálculo
     mostrarPeso.innerHTML = `
        <p>Olá, ${formNome}, seu peso ideal é ${pesoFinal}KG.</p>`
        
    console.log(radio.value)
})

// Função "reload page" no botão limpar

// Seleciona o id do botão
var btn = document.querySelector("#btnLimpar")

// Evento "click", que faz a orientação de quando o usuário clicar no botão "Limpar"
btn.addEventListener('click', function(){
    alert("A página foi recarregada com sucesso!") // Alert informando o reload
    document.location.reload() // Parâmetro do reload
})