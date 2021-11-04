// Verificador de idade

var idade = parseInt(prompt('Digite sua idade: '))
var idade = 18
var resposta = "";

if (idade >= 18) {
    resposta = 'Olá, sua idade te permite ver este site!'
} else {
    resposta = 'Sua idade não permite você ver este site!'
    // window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" // Redirecionamento de página
}
alert(resposta)


// Hora

var senha = parseInt(prompt('Digite a hora: '))
var respostaHora;

if (hora < 12) { // -999999 a 11
    respostaHora = "Bom dia!"
} else if (hora < 18) { // 12 a 18
    respostaHora = "Boa tarde"
} else { // > 18
    respostaHora = "Boa noite!"
}
alert(respostaHora)



// Senha

var senha = parseInt(prompt('Digite a senha: ')) // Inteiro
var respostaSenha

if (senha === 123456) { // senha: 123456 (int) === "123456" (string)
    respostaSenha = "Bem-vindo ao sistema!"
} else {
    respostaSenha = "Senha incorreta!"
}
alert(respostaSenha)