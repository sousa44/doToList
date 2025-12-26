/*
1) Gerenciador de Tarefas (To-Do List Profissional)

Não o to-do básico. O to-do que pensa.

Funcionalidades

Listar tarefas (array de objetos)

Filtrar por status (pendente, concluída)

Ordenar por data ou prioridade

Contar tarefas concluídas

Métodos usados

filter() → mostrar só pendentes ou concluídas

map() → renderizar as tarefas no HTML

reduce() → contar tarefas concluídas

sort() → ordenar por data/prioridade

Por que recrutadores gostam
Mostra domínio de CRUD no front e lógica aplicada ao estado da aplicação.


*/

// elementos


let inputTarefa = document.getElementById("input-tarefa")

const botaoAdicionar = document.getElementById("botaoAdicionar")

const erro = document.querySelector(".erroTexto")

const caixaTarefas = document.getElementById('caixaTarefas')

const botaoListarConcluidas = document.getElementById("listarConcluidas")


// removendo classes
erro.classList.remove(

    'text-danger',
    'bold'
)


//-----------------------------------------------
// funcao que verifica os erros do inputTarefa
//-------------------------------------------------------
function verificarTarefas() {




    botaoAdicionar.addEventListener("click", function () {

        // classes adicionadas
        erro.classList.add('text-danger', 'bold')

        // limpando erro
        erro.textContent = ""



        const valorInput = inputTarefa.value







        // verifica se o valor do input está vazio
        if (valorInput == "") {

            erro.textContent = "Adicione uma tarefa"

            return


        }


        // adicionando tarefas como parametro para adicionarTarefas
        adicionarTarefas(valorInput)





    })


}

verificarTarefas()










//--------------------------------
// função adicionarTarefas
//-----------------------------------
// array de tarefas
const tarefasAdicionadas = []

function adicionarTarefas(tarefas) {

    // limpando erro 
    erro.textContent = ""

    // criando div para armazenar tarefas

    // criando elementos
    const divTarefas = document.createElement("div")

    // botao Excluir tarefa
    const botaoExcluirTarefa = document.createElement('button')

    // botao marcar como concluida
    const botaoDeConcluir = document.createElement("button")



    // adicionanado classes ou elementos filho
    divTarefas.classList.add('border-custom', 'text-center', 'text-uppercase', 'p-2', 'divTarefas')
    botaoExcluirTarefa.innerHTML = `
    
    <i class="fas fa-trash"></i>

    
    `
    // adicionanado classes ou elementos filho
    botaoDeConcluir.innerHTML = `
    <i class="fa-solid fa-check"></i>


    
    `

    botaoExcluirTarefa.classList.add('btn', 'btn-danger', 'margin-custom')
    botaoDeConcluir.classList.add('btn', 'btn-primary', 'margin-custom')



    // adicionando ao array tarefas



    // verificar se tarefa ja existe
    if (tarefasAdicionadas.includes(tarefas)) {
        erro.textContent = 'Tarefa já existe'



    } else {
        tarefasAdicionadas.push(tarefas)

        divTarefas.textContent = tarefas

        // adicionando botoes

        divTarefas.appendChild(botaoExcluirTarefa)
        divTarefas.appendChild(botaoDeConcluir)



        // adicionado a classe pai

        caixaTarefas.appendChild(divTarefas)

        console.log(tarefasAdicionadas)


    }



    // excluir tarefas

    botaoExcluirTarefa.addEventListener('click', function () {

        // exluindo classes de divs que contem as tarefas
        divTarefas.classList.remove(
            'border-custom',
            'text-center',
            'text-uppercase',
            'p-2',
            'bg-primary',
            'text-light',
            'divTarefas'




        )

        divTarefas.remove()



        // exluindo tarefa do array
        const indice = tarefasAdicionadas.indexOf(tarefas)

        if (indice !== -1) {
            tarefasAdicionadas.splice(indice, 1)

        }




    })



    // marcar como concluida

    botaoDeConcluir.addEventListener('click', function () {

        divTarefas.classList.add('bg-primary', 'text-light')

        // escondendo botoes

        botaoExcluirTarefa.style.display = 'none'

        botaoDeConcluir.style.display = 'none'




    })























}


// listar concluidas

botaoListarConcluidas.addEventListener("click", function () {

    let tarefas = document.querySelectorAll('.divTarefas');

    tarefas.forEach(function (tarefa) {
        if (tarefa.classList.contains('bg-primary')) {
            tarefa.style.display = 'block';
        } else {
            tarefa.style.display = 'none';
        }
    });

});




