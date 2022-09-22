function criarCalculadora(){
    return {
        display: document.querySelector('.input-valores'),


        inicia(){
            this.cliqueBotoes()
            this.botaoEnter()
        },
        limpaDisplay(){
            this.display.value = ''
        },
        apagaDigito(){
            this.display.value = this.display.value.slice(0,-1)
        },
        realizaConta(){
            let conta = this.display.value
            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(conta)
            }catch(e){
                if(!conta){
                    alert('Conta inválida')
                    return
                }

            }
        },
        botaoEnter(){
            document.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) =>{
                const el = e.target
                

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                
                }
                if(el.classList.contains('c')){
                    this.limpaDisplay()   
                }
                if(el.classList.contains('apagar-digito')){
                    this.apagaDigito()
                }
                if(el.classList.contains('igual')){
                    this.realizaConta()
                }
                this.display.focus()
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}
const calculadora = criarCalculadora()
calculadora.inicia()