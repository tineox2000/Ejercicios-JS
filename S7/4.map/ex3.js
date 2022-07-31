const cities = [{isVisited:true, name: 'Tokyo'},
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'},
{isVisited:false, name: 'Seul'}];

const citiesVisited = cities.map (
function (city) {
    if (city.isVisited === true) {
    city.name = "Visitado";
    return city.name;     
}        
}
) 
console.log (cities);