//jshint esversion:6
/*

SCOPE

*/

/*
What is scope?

JS has both LOCAL and GLOBAL scope
*/

// example 1
var x = 12;  // global variable

function scope() {
    var x = 33;  //  local variable
    // var y = 10;
    console.log(x);
}
scope();  // 33
// console.log(y);
console.log(x);  // 12

// example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}

scope();  // 33
console.log(x);  // 33

// example 3:
var x = 1;

function scope() {
    var x = 2;
    function scope() {
        var x = 3;
        console.log(x);  // 3
    }
    scope();
    console.log(x);  // 2
}
scope();
console.log(x);  // 1

// example 4 conatrasts with 5:
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        let x = 45;  // let vs var below
        console.log(x);  // 45
    }
    console.log(x);  // 33
}

scope();
console.log(x);  // 12

// example 5 contrasts with 4:
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        var x = 45;  //  var vs let above
        console.log(x); // 45
    }
    console.log(x); // 45 -> var doesn't obey 'block scope'
}

scope();
console.log(x); // 12
