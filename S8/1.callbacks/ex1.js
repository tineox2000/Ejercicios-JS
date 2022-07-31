const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;

}

function father(callback){
    numbersList.push (callback());

}

father((a,b) => sum (3,4))
father((a,b) => substract (3,4))
father((a,b) => sum (7,4))
;