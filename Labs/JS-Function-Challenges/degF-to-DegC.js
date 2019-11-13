// @ts-nocheck
//jshint esversion:8

/*
Write a function that will convert a Fahrenheit termperature
to a Celsius temperature.
Please round to the nearest 0.1 or one-tenth.
Formula for Fahrenheit to Celsius
(____degF - 32) x (5/9) = ____degC
*/

let degF = 70;

function convertFtoC(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}
console.log(convertFtoC(degF)); // 21.11111111111111
console.log(Math.floor(convertFtoC(degF) * 10) / 10); // 21.1
console.log(Math.floor(convertFtoC(65) * 10) / 10); // 18.3
