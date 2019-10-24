//jshint esversion:6

/*
Hoisting
*/


// example 1:
console.log(scissors);
var scissors = 'blue';

// example 1 breakdown:
var scissors;
console.log(scissors);
scissors = "blue";

// example 2:
0
// example 2 breakdown:
function hoistTest() {
    var testVar;
    console.log(testVar); // undefined
    testVar = 10;
    console.log(testVar); // 10
}

hoistTest();
