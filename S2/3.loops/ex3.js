const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = 0; i < placesToTravel.length; i++) {
    const places = placesToTravel[i];

    if (places.id === 11 || places.id === 40 ) {
        placesToTravel.splice (i,1);
    }
}
console.log (placesToTravel);
