const baseUrl = `http://localhost:3000/diary`;

function diarioLoco() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((diario) => {
      /*  console.log (diario) */
      const diarioOrdenado = ordenarNotas(diario);
      pintarNotasDiario (diarioOrdenado)
    });
}
diarioLoco()

const ordenarNotas = (diario) => {
  return diario.sort((a, b) => new Date(a.date) - new Date(b.date));
};
/* console.log (ordenarNotas) */

const pintarNotasDiario = (notasDiario) => {
  for (const notaDiario of notasDiario) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h3>${notaDiario.title}</h3><h5>${notaDiario.date}</h5><p>${notaDiario.description}</p>`;
    document.body.appendChild(div$$);
    const btn$$ = document.createElement("button")
    btn$$.textContent = "Eliminar"
    btn$$.addEventListener ("click", () => div$$.remove())
    div$$.appendChild (btn$$)
  }
};
