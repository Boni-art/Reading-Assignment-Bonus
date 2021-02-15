

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

function tags(strings, ...names) {
    return names.join(' ');
}


(function init(){
    let choice = prompt("What do you want to do? choose.\n 1. Calculate a persons BMI\n 2. See persons whose BMI were calculated in this program with their BMI.");
    if (choice == 1) {
        let personFirstName = prompt("Enter the persons informations first.\n Enter his or her first name.");
        let personLastName = prompt("Enter his or her last name.");
        let check = true;
        while (check) {
            var personId = prompt("Enter any Id that you haven't given before. This will prompt again if you have entered an id already existing.");
            if(idChecker.has(personId)){
                check = true;
            }else{
                check = false;
                idChecker.add(personId)
            }
        }
        let personToCalculateInList = [];
        Reflect.set(personToCalculateInList, 0, personFirstName);
        Reflect.set(personToCalculateInList, 1, personLastName);
        let personToCalculate = Reflect.construct(person, personToCalculateInList);
        if(Reflect.defineProperty(personToCalculate, 'id', {value: personId})){
            console.log("property entered.");
        }
        persondb.set(personId, personToCalculate);
        let hChoice = prompt("choose from common heights or enter your custom.\n 1. 1.50\n 2. 1.60\n 3. 1.70\n 4. Enter custom");
        if (hChoice == 1) {
            var bmi = BMI(heightSquare(1.50));
        } else if(hChoice == 2) {
            var bmi = BMI(heightSquare(1.60));
        }else if (hChoice == 3) {
            var bmi = BMI(heightSquare(1.70));
        }else if(hChoice == 4){
            let height = prompt("Enter the person's height in meters");
            var bmi = BMI(heightSquare(height));
        }else{
            alert("wrong input try again.");
        }
        
        let weight = prompt("Enter the person's weight");
        let newText = new text(`${Reflect.get(personToCalculateInList, 0)} ${Reflect.get(personToCalculateInList, 1)}'s Bmi index is ${bmi(weight)}`);
        newText.view();
        // console.log(Reflect.getPrototypeOf(newText) + "\n");

        console.log(personToCalculate, idChecker, persondb);  
        init();
    }else if(choice == 2) {
        function* namegen(map1) {
            for (const [key, value] of map1) {
                yield [key, value];
            }
        }

        const dbGen = namegen(persondb);
        for (const individual of dbGen) {
            let nameInfo = tags`${individual[0]}, ${individual[1].firstName}, ${individual[1].LastName}`;
            console.log(nameInfo);
        }
        init();
    }else{
        alert("Wrong input please try again.");
    }



})();    