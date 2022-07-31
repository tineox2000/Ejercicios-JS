const eventoFocus = function (event){

    console.log(event.target.value)
}

const input$$ = document.querySelector("input")
input$$.addEventListener ("focus", eventoFocus);
