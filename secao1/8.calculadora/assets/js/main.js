const inputCalculo = document.querySelector('.input-valores')


document.addEventListener('click', (e)=>{
    const evento = e.target
    insereValoresNoInput(evento.innerText)
    if(evento.innerText === 'C'){
        limpaTudoNoInput()
    }
    if(evento.classList.contains('apagar-digito')){
        limpaUltimoDigitoInput(3)
    }
    if(evento.classList.contains('igual')){
        limpaUltimoDigitoInput(1)
        const conta = Number(inputCalculo.value) * 0
        console.log(conta)
    }

})


function insereValoresNoInput(texto){
    inputCalculo.value += texto
}

function limpaTudoNoInput(){
    inputCalculo.value = ''
}
function limpaUltimoDigitoInput(numero){
    const total = inputCalculo.value
    inputCalculo.value = total.substring(0,total.length-numero)
    
}