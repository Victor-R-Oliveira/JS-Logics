setInterval(()=> {
    animateCSS('#apostar', 'flipInX'); //botao
    animateCSS('.fa-heartbeat', 'swing'); //icone dos erros
    animateCSS('.fa-exclamation-circle', 'bounce'); //icone das chances
    animateCSS('.fa-concierge-bell', 'wobble'); //icone das tentativas
},5000)

/**
 * 1 - Declarar um array de escopo global de erros var erros = []
 * 2 - Gerar um numero aleatório entre 1 e 60 (criar uma constante com o nome de VALOR_SORTEADO) parseInt(Math.random()*60+1)
 * 3 - Declarar o limite de chances (uma constante CHANCES = 6)
 *
 * 4 - Criar uma função chamada apostarNumero()
 * 4.1 - Verificar se o numero é menor ou igual a zero ou numero > que 60, caso for mostrar "Informe um número válido"
 
 * 4.2 - Verificar se o número digitado pelo usuário (a aposta) é igual ao VALOR_SORTEADO, se for mostrar
 * "Parabéns! Você acertou!"
 * 4.2.1 - Ocultar o botão apostar e mostrar um botão chamado Jogar Novamente (criar esse botão)
 * 4.2.2 - Mostrar no saidaDica "Parabéns! O número sorteado é: VALOR_SORTEADO"
 * 4.2.3 - Se o usuário apertar o botão jogar novamente a ação será window.location.reload()
 *
 * 4.3 - Caso o valor digitado for diferente do VALOR_SORTEADO
 * 4.3.1 -  Verificar Se o valor digitado ja existe no array de erros, se ja existir mostrar
 * "Você já apostou o número X. Tente outro!!!"
 *
 * 4.4 - Caso o valor não exista no array de erros, adicionar o valor ao array erros (usar o push)
 * 4.4.1 - criar uma variável let numErros para guardar a quantidade de erros erros.length
 * 4.4.2 - criar uma variável let numChances para guardar o CHANCES - numErros
 * 4.4.3 - mostrar na tela no id=saidaErro o numero de erros e todo o conteúdo do array erros.join()
 * 4.4.4 - mostrar na tela no id=saidaChance o numero de chances que restam
 *
 * 4.5 -  Verificar se o numero de chances (numChances) for igual a zero
 * 4.5.1 - mostrar na tela "Suas chances acabaram!"
 * 4.5.2 - Ocultar o botão apostar e mostrar um botão chamado Jogar Novamente (criar esse botão)
 * 4.5.3 - Mostrar no saidaDica "GAME OVER! O número sorteado é ${VALOR_SORTEADO}"
 *
 * 4.6 - Caso o o numero de chances (numChances) for diferente de zero (MONTAR AS DICAS)
 * 4.6.1 - Verificar se o numero digitado é menor que o sorteado, caso sim armazenar um texto
 * em uma variável chamado let dica="menor", caso contrario armazenar o dica="maior"
 * let dica = numero.value < VALOR_SORTEADO ? "maior" : "menor"
 * 4.6.2 - Mostrar na tela no campo saidaDica o Texto " Tente um número ${dica} que o ${numero.value}"
 *
 * 4.7 -  Sempre que o usuário apostar limpar o campo e apontar o foco para ele
 */

// -----------------------------------------------------------------------------------------------------

// Propriedades do jogo
var erros = []
const valorSorteado = Math.trunc(Math.random()*60+1)
const chances = 6


document.getElementById("apostar").addEventListener('click', function(){
    var aposta = document.getElementById("numero").value;
    if(aposta <= 0 && aposta > 60){
        alert('Informe um número válido!')
        return
    }else{
        if(aposta == valorSorteado){
            alert("Você acertou!");

        }else{
            alert("Você perdeu!");
        }
    }
})
