



var persondb = new Map();
var idChecker = new Set();







function heightSquare(height){
    return height * height;  
}

function BMI(heightSquared){
    return function (weight) {
        return weight / heightSquared;
    }
}
