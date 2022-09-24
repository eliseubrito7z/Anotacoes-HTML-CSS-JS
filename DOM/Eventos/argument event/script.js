// argumento event

/*
    - prototype / argumentos utilizaveis 

        input.onkeypress = function(event){
        console.log(event)
        }

        é possivel utilizar no event os argumentos

        altKey, charcode, etc OLHA O PROTO

    - categorias de envento

    onkeydown, onkeyup, onkeypress, onclick, etc


*/



const input = document.querySelector('input')
// o function(event) pega o evento de onkeydown, ou seja, ele pega o evento keypress e fala o que é, nesse caso ele é um KeyBoardEvent
input.onkeypress = function(event){
    console.log(event)
}

//vai retornar dizendo que esse evento é um keyboardEvent 

/*
    KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
*/

input.onclick = function(event){
    console.log(event)
}

/*
    retorna

    PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
*/

//pegar a tecla digitada

input.onkeydown = function(event){
    console.log(event.key)
}

/*
    digitei = das
    retorna 

    d
    a
    s
 */

//pegar o alvo do disparo do evento

input.onkeydown = function(event){
    console.log(event.currentTarget)
}

/*
    retorna

    <input type="text">
 */


// pegar o value

input.onkeydown = function(event){
    console.log(event.currentTarget.value)
}

/*  
    digitei = abcd
    retona

    a
    ab
    abc
*/