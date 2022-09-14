/*
const h1 = document.querySelector('h1')

const data = new Date()

const diaSemana = getDiaSemana(data.getDay())
const dia = data.getDate()
const mes = getMes(data.getMonth())
const ano = data.getFullYear()
const hora = formataHoras(data.getHours())
const minutos = formataHoras(data.getMinutes())



function getDiaSemana(diaSemana){
    
    switch(diaSemana){
        case 0:
            return 'domingo'
        case 1:
            return 'segunda-feira'
        case 2:
            return 'terça-feira'
        case 3:
            return 'quarta-feira'
        case 4:
            return 'quinta-feira'
        case 5:
            return 'sexta-feira'
        case 6:
            return 'sabado'
    }

}
function getMes (mes){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[mes]
}
function formataHoras(hora){
    return hora <= 10 ? `0${hora}` : hora
}

h1.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`
*/

const h1 = document.querySelector('.container h1')
const data = new Date()

h1.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle:'full'})