let vector = [1, 2, 3, 4, 5];
/*
let aux ;

aux = vector[4];

vector[4]=vector[3];
vector[3]=vector[2];
vector[2]=vector[1];
vector[1]=vector[0];

vector[0]=aux;
*/

let aux = vector[vector.length - 1];

for( let i = vector.length - 1; i >= 1; i--){
    vector[i] = vector[i-1];
}

vector[0]=aux;

console.log(vector);