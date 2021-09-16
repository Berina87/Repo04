function main (numOne, numTwo){

    // only change code below this line
    var numOne;
    var numTwo;
    var myQuotient = numOne / numTwo;

    // Only change code above this line

    return myQuotient;
}

console.log(main (5.0, 2.0));  //change this line
console.log(main (16.5, 5.5).toFixed(1));
console.log(main (102.0, 25.5).toFixed(1));
module.exports = main;