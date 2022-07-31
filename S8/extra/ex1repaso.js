const baseUrl = "https://breakingbadapi.com/api/characters";

function Init() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((personajes) => {
      pintarPersonajes(personajes);
    });
}
Init()

const pintarPersonajes = (personajes) => {
  for (const personaje of personajes) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<img src = ${personaje.img}/><h2>${personaje.name}</h2>`;
    document.body.appendChild(div$$);
  }
};
