function main (numOne, numTwo){

    // only change code below this line
    var numOne;
    var numTwo;
    var product = numOne * numTwo;

    // Only change code above this line

    return product;
}

console.log(main (2.5, 2.0).toFixed(1));  //change this line
console.log(main (5.5, 5.5));
console.log(main (100.25, 43.2));
module.exports = main;