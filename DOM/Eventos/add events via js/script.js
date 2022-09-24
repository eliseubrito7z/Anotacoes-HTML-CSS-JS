const h1 = document.querySelector('h1')


//função que recebe argumentos ('tipo de evento', atalho da função)
h1.addEventListener('click', print)

function print(){
    console.log('print')
}