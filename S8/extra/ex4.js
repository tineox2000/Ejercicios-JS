const urlPlanets = (`http://localhost:3000/planets`)
const urlPersonajes = (`http://localhost:3000/characters`)

const planetas$$ = document.body.querySelector ('[data-function = "planets"]')
const personajes$$ = document.body.querySelector ('[data-function="characters"]')

function llamarPlanetas (){
fetch (urlPlanets)
.then (res => res.json())
.then ((planetas) => {
pintarPlanetas (planetas);
});
}
llamarPlanetas ()

const pintarPlanetas = (planetas) => {
for (const planeta of planetas) {
  const div$$ = document.createElement ("div")
  div$$.innerHTML = `<img class = imagenPlanetas  src = "${planeta.image}"/><h2>${planeta.name}</h2>`;
  planetas$$.appendChild(div$$)
}
};

function personajesFiltrados () {
fetch (urlPersonajes)
.then (res => res.json())
.then ((personajes) => {
  pintarPersonajes (personajes)
});
}
personajesFiltrados()

const pintarPersonajes = (personajes) => {
  
  for (const personaje of personajes) {
    const divPersonajes$$ = document.createElement ("div");
    divPersonajes$$.innerHTML = `<img src="${personaje.avatar}"/><h2>${personaje.name}</h2>`
    personajes$$.appendChild(divPersonajes$$);
  }
}

