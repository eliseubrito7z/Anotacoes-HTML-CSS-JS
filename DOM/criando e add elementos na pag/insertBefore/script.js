//add elementos
// adicionar a div entre o <header> e o <script>

const div = document.createElement('div')
div.innerText = "Olá devs"

//insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

// a div é inserida no meio do <header> e do <script>

//simulando um "insertAfter"

const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)