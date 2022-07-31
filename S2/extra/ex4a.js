function findArrayIndex(array,text){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === text) {
            return i;
        }
    }
}


const equiposNba = findArrayIndex (["Knicks","Nets","Heat","Lakers"], "Knicks");
console.log (equiposNba);

const equiposNba2 = findArrayIndex (["Knicks","Nets","Heat","Lakers"], "Lakers");
console.log (equiposNba2);