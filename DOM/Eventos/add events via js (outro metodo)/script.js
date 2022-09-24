const h1 = document.querySelector('h1')

//passa a função ou atalho
h1.onclick = print

function print(){
    console.log('print')
}

//se eu crio outro h1.onclick, ele irá substituir o primeiro

h1.onclick = function() {
    console.log('outro momento')
}

//logo, a maneira mais recomendada é:

h1.addEventListener('click', print)

//é possivel empilhar as funcionalidades com o eventListener

h1.addEventListener('click', function(){
    console.log('outro momento DENOVO')
})