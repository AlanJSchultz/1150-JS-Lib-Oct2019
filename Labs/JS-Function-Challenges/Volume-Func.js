// @ts-nocheck
//jshint esversion:8

/*
Write a function that takes 3 parameters for length, width, height.
The function should return the 3 parameters multiplied together.
The goal is to take 3 sets of numbers and find the volume of the cuboid.
*/


function cuboid(length, width, height) {
    return length * width * height;
}
console.log(cuboid(3, 4, 5));  // 60

let num1 = 4;
let num2 = 5;
let num3 = 6;
console.log(cuboid(num1, num2, num3));  // 120
