// class List
// alterando estilos

const element = document.querySelector('body')

//add element na classList
element.classList.add('active', 'green')
// pega o color red do HTML e o color green


console.log(element.classList) 
// => DOMTokenList [value: ""]

//removendo apenas active
element.classList.remove('active')

//se existir, o toggle tira, se não existir, ele add
element.classList.toggle('active')

/*

    no final, está retornando no console

    DOMTokenList(2) ['active', 'green', value: 'active green']
        0: "green"
        1: "active"
        length: 2
        value: "green active"
 */