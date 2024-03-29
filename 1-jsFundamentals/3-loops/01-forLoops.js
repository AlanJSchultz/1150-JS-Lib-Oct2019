//jshint esversion:7

/*
LOOPS
*/

/*
Loops offer a quick and easy way to do something repeatedly.
There are many differernt kinds of loops but they all 
do roughly the same thing.
    For statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach -- for arrays only
    .map -- for arrays only
*/

// loop structure: 
// a) creation of an indexing variable
// b) a run condition
// c) change to the indexing variable

// count to 10 from 1 and log the numbers:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// loop can run infinitely
// for (let i = 0; ; i++){  // don't do this infinite loop
//     console.log(i);
// }

// counts to -25 by -3 starting from 2, logs the numbers
for (let i = 2; i >= -25; i = i - 3) {
    console.log(i);    
}

// display the letters in a name individually
let name = "Kincade";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;
for (let i = start; i <= stop; i += increment) {
    console.log(i);
}

