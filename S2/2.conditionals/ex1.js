const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
const isAprroved = "Aprobado";

for (let i = 0; i < alumns.length; i++) {
  const alumn = alumns[i];

  if (alumn.T1 === false && alumn.T2 === true && alumn.T3 === true) {
    isAprroved.push(alumn);
  }
  if (alumn.T1 === true && alumn.T2 === false && alumn.T3 === true) {
    isAprroved.push(alumn);
  }
  if (alumn.T1 === true && alumn.T2 === true && alumn.T3 === false) {
    isAprroved.push(alumn);
  }
  if (alumn.T1 === true && alumn.T2 === true && alumn.T3 === true) {
    isAprroved.push(alumn);
  }
}
console.log(alumn);
