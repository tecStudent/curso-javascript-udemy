// Escreva uma função que recebe 2 valores e retorna o maior deles

//const qualMaior = (a,b) =>  a > b ? a : b
//console.log(qualMaior(10,78))


//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de 
//uma imagem(number).
//Retorne true se a imagem estiver no modo paisagem.

//const ePaisagem = (l,a) => l > a
//console.log(ePaisagem(200,150))


//Escreva uma função que recebe um número e retorna o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//Chear se o número realmente um número = Retorna o próprio número
//Use a função com números de 0 a 100

//const FizzBuzz = (x) => {
//    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'
//    if (x % 3 === 0) return 'Fizz'
//    if (x % 5 === 0) return 'Buzz'
//
//    return x
//}

//console.log(FizzBuzz('nada'))



function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    })
}

console.log(mostraHora())

