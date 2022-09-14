const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer


document.addEventListener('click',(e)=>{
    const elemento = e.target
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }
    if(elemento.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }
    if(elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0

    }



})

function criadorDeHoras(segundos) {
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'GMT'
    })
}

function iniciaRelogio (){
    timer = setInterval(()=>{
        segundos ++
        relogio.innerHTML = criadorDeHoras(segundos)
    }, 1000)
}