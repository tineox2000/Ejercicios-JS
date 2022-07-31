const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector ("input");
const boton$$ = document.querySelector("button");

boton$$.addEventListener ("click", function (){

    fetch ('https://api.nationalize.io?name=' + input$$.value)
    .then (response => response.json())
    .then (data => console.log (data));

});
