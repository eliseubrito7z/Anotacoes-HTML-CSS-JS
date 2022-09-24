const elements = document.querySelectorAll('.one')

console.log(elements)

/*
    retorna

    NodeList [h1.one]
*/

/*
    forEach ACEITA APENAS NodeList
*/

elements.forEach(el => console.log(el))

/*
    retorna

    <h1 class="one">Meu Blog</h1>
*/