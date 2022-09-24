//Eventos

const input = document.querySelector('input')

input.onkeydown = function() { //quando a tecla abaixar
    console.log('tecla abaixou')
}

input.onkeyup = function() { //quando a tecla levantar
    console.log('tecla levantou')
}

input.onkeypress = function() { //quando a tecla tiver pressionada
    console.log('tecla pressionada')
}