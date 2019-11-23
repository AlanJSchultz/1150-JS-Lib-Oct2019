//jshint esversion:8

/*

Write some sample JavaScript that shows the following things about
var, let, and const:
a) let, const are not hoisted
b) var doesn 't obey block scope, while let and const do
c) var, let, const all obey functional scope

*/

// a)

console.log(x);  // undefined
// console.log(y);  // not defined, not hoisted
// console.log(z); // not defined, not hoisted

var x = "trains";
let y = "planes";
const z = "automobiles";


// b)

