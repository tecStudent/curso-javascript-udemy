function calculaImc (){
    
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')


    function calculo (evento){
        evento.preventDefault()
        const peso = form.querySelector('#peso').value
        const altura = form.querySelector('#altura').value

        const lista = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']


        if (Number(peso)){
            if(Number(altura)){
                const imc = peso / (altura * altura)
                let indice

                if(imc < 18.5){indice = 0}
                else if(imc <= 24.9){indice = 1}
                else if(imc <= 29.9){indice = 2}
                else if(imc <= 34.9){indice = 3}
                else if(imc <= 39.9){indice = 4}
                else {indice = 5}                

                resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)} (${lista[indice]})`
                
            }else{resultado.innerHTML = `Altura invalida!`}
        }else{resultado.innerHTML = `Peso invalida!`}

    peso.value = ''
    altura.value = ''    
    }


    form.addEventListener('submit', calculo)
    
}
calculaImc()