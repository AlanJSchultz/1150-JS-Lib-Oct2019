//jshint esversion:6



// decalaration of function
//1         //2
function hello() {
    //3
    console.log("Hello World!");
}

// function call

hello();
hello();
hello();
hello();


// practice

function pacersWon() {
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();


// function with a parameter

function numberEntered(x) {
    console.log("The number entered was: ", x);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);


// two params

function addAnyTwoNumbers(x, y) {
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);


// repetition practice

function subtractTwoNumbers(firstNum, secondNum) {
    console.log(secondNum - firstNum);
}

// call it
subtractTwoNumbers(5, 7);


// the return keyword
// declare the function
function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;
}
//call the function with arguments
console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 6, 50000, 0));
console.log(getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0));



// More Practice

// Write a function that returns the value of two numbers added together.
function add(x, y) {
    let sum = x + y;
    return sum;
}
console.log(add(1, 1));


// Write a function that takes in a first and last name. It returns a whole name.
function fullName(firstName, lastName) {
    var wholeName = firstName + " " + lastName;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor"));


// Write a function that returns your pet's name and breed.
function petNameAndBreed(name, breed) {
    var petDetails = name + ", " + breed;
    return petDetails;
}
console.log(petNameAndBreed("Sansa", "Generic"));


// Great challenge
// Write a function that calculates the totalPrice after tax on any quantity of any price on a product.
function calculatorPriceIndiana(quantity, price) {
    var taxRate = 0.07;
    var productTotal = quantity * price;
    var totalPrice = productTotal + (taxRate * productTotal);
    return totalPrice;
}
console.log(calculatorPriceIndiana(17, 5));


