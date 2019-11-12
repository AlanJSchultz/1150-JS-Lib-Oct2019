// @ts-nocheck
//jshint esversion:8


function exponent(a, b) {
    return a ** b;
}

console.log(exponent(7, 3)); // 343

let answer = exponent(6, 2, 4);  // 36
console.log(answer);


let string1 = "Chocolate Cake.";
let string2 = "Vanilla Cake.";
let string3 = "Ice Cream.";

function newString(a, b, c) {
    return a + " " + b + " " + c;
}

console.log(newString(string1, string2, string3)); // Chocolate Cake. Vanilla Cake. Ice Cream. 



function newString(string1, string2, string3) {
    return string1 + string2 + string3;
}
console.log(newString("Chocolate Cake. ", "Vanilla Cake. ", "Ice Cream. ")); // Chocolate Cake. Vanilla Cake. Ice Cream.
