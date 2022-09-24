// elementos filhos
// childNodes children

const el = document.querySelector('body')

console.log(el.childNodes)//vai pegar todos os filhos de body

/*
    retorna

    NodeList(8) [text, header, text, comment, text, script, text, script]
        0: text
        1: header
        2: text
        3: comment
        4: text
        5: script
        6: text
        7: script
        8: text
        length: 9

    o espaço entre <body> e <header> fica como text
*/

console.log(el.children)//vem como (HTMLColection)

/*
    HTMLCollection(3) [header, script, script]
        0: header
        1: script
        2: script
        length: 3

    o HTMLColection elimina os espaços antes
*/

console.log(el.firstChild)//pega o primeiro elemento do 'body'

// vai retornar um #text que é o espaço vazio, se tirar ele retorna:
/*
    <header> <h1>Meu Blog</h1> </header>
*/

console.log(el.firstElementChild) // não considera o espaço em branco

/*
    retorna

    <header> <h1>Meu Blog</h1> </header>
*/