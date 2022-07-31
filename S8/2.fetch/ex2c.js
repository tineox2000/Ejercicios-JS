const baseUrl = "https://api.nationalize.io?name=";

const input$$ = document.querySelector("input");
const boton$$ = document.querySelector("button");

boton$$.addEventListener("click", function () {
  const p$$ = document.createElement("p");
  const btn$$ = document.createElement("button");
  btn$$.textContent = "Eliminar"
  

  fetch("https://api.nationalize.io?name=" + input$$.value)
    .then((response) => response.json())
    .then((data) => {
      let text = "El nombre " + data.name + " tiene un ";
      for (let index = 0; index < data.country.length; index++) {
        const porcentaje = data.country[index].probability;
        const id = data.country[index].country_id;
        text += porcentaje + " porciento de ser de " + id + ". ";
      }

      p$$.textContent = text;
    });
  document.body.appendChild(p$$);
  document.body.appendChild(btn$$);
  btn$$.addEventListener("click", function () {
    p$$.remove();
    btn$$.remove()
  });
});
