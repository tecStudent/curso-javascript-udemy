const inpuTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function fazAsAcoes(){
    criaItem(inpuTarefa.value)
    limpaInput()
    salvarTarefas() 
}

document.addEventListener('click',(e)=>{
    const tarefa = e.target
    if(tarefa.classList.contains('btn-tarefa')){
        if(inpuTarefa.value){
            fazAsAcoes()
        }
    }
    if(tarefa.classList.contains('btn-apagar')){
        deletaItem(tarefa)
        salvarTarefas() 
    }
    
})
inpuTarefa.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        fazAsAcoes()  
    }
})

function criaLi (texto){
    const li = document.createElement('li')
    li.innerHTML = texto
    tarefas.appendChild(li)  
    return li  
}
function criaButton(li){
    const btnApagar = document.createElement('button')    
    btnApagar.innerHTML = 'Apagar'
    btnApagar.setAttribute('class','btn-apagar')
    li.appendChild(btnApagar)
}

function criaItem (texto){
    const li = criaLi(texto)
    criaButton(li)
}

function deletaItem  (tarefa){
    tarefa.parentElement.remove()
}

function limpaInput (){
    inpuTarefa.value = ''
    inpuTarefa.focus()
}

function salvarTarefas(){
    const liTarefas = document.querySelectorAll('li')
    const listaTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listaTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaDeTarefas){
        criaItem(tarefa)
    }
}
adicionaTarefasSalvas()