###### Font Family
    *Tipo de fonte de um elemento
    *Lista de fontes e ordem de prioridade
    *inclui *fallback* font
    
```css
p {
    font-family: "Times New Roman", Times, serif;
}                /*caminho ideal     op2    op3*/
```

- serif (fontes com pequenas dobras)
- sans (não tem dobras)

###### Font Weight

    * Peso da fonte

https://www.w3.org/TR/css-fonts-3/

```css
p {
    font-weight: bold;
}
```
###### Font Style

   *É o estilo da fonte

    Valores: normal | italic | oblique

    Os valores que podem ser aplicados dependem da fonte usada

    span {
        font-style: italic;
    }

###### Font Size

*Tamanho da fonte

p {
	font-size: 18px;
}

###### Web Fonts

    * @font-face
    * @import
    * links

# Para mandar minha fonte pro servidor https://css-tricks.com/snippets/css/using-font-face-in-css/ 
# link e @import feito https://fonts.google.com/