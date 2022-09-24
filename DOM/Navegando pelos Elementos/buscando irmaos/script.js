//nextSibling nextElementSibling

const el = document.querySelector('header')
console.log(el.nextSibling)// leva em consideração o texto

//retorna #text

// se tirar o espaço retorna <script src="./script.js"></script>

console.log(el.nextElementSibling)
//retorna <script src="./script.js"></script>


//previousSibling previousElementSibling 

const el1 = document.querySelector('script') // pega o primeiro script que acha na pag

const el2 = document.querySelector('body script') // pega o script de dentro do body
console.log(el2.previousElementSibling)//o que vem ateriormente

//retorna <header> <h1>Meu Blog</h1> </header>