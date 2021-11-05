// Calculadora de peso
// Calcula o peso ideal de uma pessoa obedecendo fatores de peso pré-determinados


btnCalcular.addEventListener('click', function () { // Clicar no botão "Calcular" irá mostrar o peso ideal do usuário
     formNome = nome.value
     formAltura = altura.value
     sexoMasculino

     // Condições
     if(sexoMasculino.checked){
        fatorPeso = 22
     } else {
        fatorPeso = 21
     }

     pesoFinal = fatorPeso * Math.pow(formAltura, 2).toFixed(2)

     // alert(pesoFinal)

     mostrarPeso = document.getElementById('pesoIdeal')
     mostrarPeso.innerHTML = `
        <p>Olá, ${formNome}, seu peso ideal é ${pesoFinal}.</p>`
})

var btn = document.querySelector("#btnLimpar")
btn.addEventListener('click', function(){
    alert("A página foi recarregada com sucesso!")
    document.location.reload()
})