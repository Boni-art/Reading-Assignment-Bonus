

import person from './toBeImported.js';

var persondb = new Map();
var idChecker = new Set();


persondb.set(13, {firstName: 'Abel', LastName: 'Girma'});
persondb.set(89, {firstName: 'Ermias', LastName: 'Mulugeta'});
persondb.set(9, {firstName: 'Aman', LastName: 'Debebe'});
persondb.set(6, {firstName: 'Semere', LastName: 'Habtu'});




function heightSquare(height){
    return height * height;  
}

function BMI(heightSquared){
    return function (weight) {
        return weight / heightSquared;
    }
}

var showContent = {
    view() {
        console.log(this.message);
    }
}

class text{
    constructor(message){
        this.message = message;
    }
}

// console.log(Reflect.getPrototypeOf(text) + "\n\n");
Reflect.setPrototypeOf(text.prototype, showContent);