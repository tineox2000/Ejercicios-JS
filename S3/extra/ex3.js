const cars = ['Mazda 6', 'Ford fiesta', 
'Audi A4', 'Toyota corola'];

div$$ = document.querySelector ("[data-function = 'printHere']")
ul$$ = document.createElement ("ul")
for (const car of cars) {
    const li$$ = document.createElement ("li")
    li$$.textContent = car
    ul$$.appendChild (li$$);
    
}
div$$.appendChild (ul$$);