//jshint esversion:7

// for loops

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 0; i--) {
    console.log(i);
}


let i = 5;
for (; i <= 100; i += 5) {
    console.log(i);
}


let i = 5;
for (; i <= 100;) {
    console.log(i);
    i += 5;
}


// let i = 5;
// for (; ;) {
//     if (i <= 100) {
//         console.log(i);
//         i += 5;
//     }    
// }


// a string is an array of characters
let name = "Bob";

console.log(name.length);
for (let i = 0; i <= name.length; i++) {
    console.log(name[i]);  // prints Bob vertically
}


var start = 2;
var stop = Math.floor(Math.random() * 30);
var increment = 3;

console.log("Your stop value is " + stop);
for (let i = start; i <= stop; i += increment) {
    console.log(i);
}


