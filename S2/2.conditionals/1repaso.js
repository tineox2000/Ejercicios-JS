const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

/*const isApproved = alumns.isApproved;

for (let index = 0; index < alumns.length; index++) {

    const element = alumns[index];

    if (element.T1 === true && element.T2 === true) var (element.isApproved == true);

}*/



for (let index = 0; index < alumns.length; index++) {

    const element = alumns[index];

    if ((element.T1 === true && element.T2 === true) || (element.T1 === true && element.T3 === true) || (element.T2 === true && element.T3 === true) ){

        element.isApproved = true;

    }

    else{

        element.isApproved = false;

}

}

console.log(alumns);