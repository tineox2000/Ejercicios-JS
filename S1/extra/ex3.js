const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

const peliPequeña = [];
const peliMediana = [];
const peliGrande = [];

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.durationInMinutes < 100) {
        peliPequeña.push(movie)
    }
    if (movie.durationInMinutes > 100 &&  movie.durationInMinutes < 200 ) {
        peliMediana.push(movie)
    }
    if (movie.durationInMinutes > 200) {
        peliGrande.push(movie)
    }

}
console.log (peliPequeña, peliMediana, peliGrande);