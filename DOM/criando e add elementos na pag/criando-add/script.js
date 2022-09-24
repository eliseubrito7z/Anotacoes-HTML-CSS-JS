// create element

const div = document.createElement('div')
div.innerText = "Olá devs"

// append prepend / add na pag

const body = document.querySelector('body')
body.append(div)//adicionar depois

/*
    retorna 

    Meu Blog
    Olá devs

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>
        <header>
            <h1>Meu Blog</h1>
        </header>
        <script src="./script.js"></script>
        <div>Olá devs</div>
    </body>
        
    </html>
*/

body.prepend(div)//adicionar antes do body

/*
    retorna 
    
    Olá devs
    Meu Blog

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>
    <body>

    //aqui é o const body
        <div>Olá devs</div>
        <header>
            <h1>Meu Blog</h1>
        </header>
        <script src="./script.js"></script>
    //aqui é o const body  
      
    </body>
        
    </html>
*/