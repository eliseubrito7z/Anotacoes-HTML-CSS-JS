const header = document.querySelector('header')

header.setAttribute('id', 'header-id')

const headerID = document.querySelector('#header-id')
console.log(headerID)

/*
    retorna

    <header> <h1>Meu Blog</h1> </header> => 

    <header id="header-id"> <h1>Meu Blog</h1> </header>

*/

console.log(headerID.getAttribute('id')) //pegando um atributo

/*
    retorna

    header

*/

header.removeAttribute('id')

/*
    retorna

    <header id="header-id" class="bg"> <h1>Meu Blog</h1> </header> => 

    <header class="bg"> <h1>Meu Blog</h1> </header>

*/

header.removeAttribute('class')

/*
    retorna

    <header id="header-id" class="bg"> <h1>Meu Blog</h1> </header> => 

    <header> <h1>Meu Blog</h1> </header>

*/