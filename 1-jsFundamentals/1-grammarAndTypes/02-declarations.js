//jshint esversion:6

/*

Variables

*/

// What is a variable
var a = 1;
var b = 2;
console.log(a + b);

// notes on naming variables:
// 1) a variable must begin with a letter, underscore, or dollar sign
// 2) numbers may follow the above chararcters, but cannot come first
// 3) JavaScript is case sensitive -- 'hello and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarartions refer to when we 'declare' a varable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log("Declaration 1:", x);  // undefined

x = 10;
console.log("Initialization 1:", x);  //10

x = 33;
console.log("Assignment 1:", x);  // 33

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my friend';
console.log(y);

/*
var, let, and const:
var = 'old' keyword for variables
let = 'new' keyword for variables   ---   more predicable behaviors
const = also 'nw', declares unchangeable variables
*/

let tonight = 'great';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty ='Super!';  // can't change a constant variable, will cause an error
