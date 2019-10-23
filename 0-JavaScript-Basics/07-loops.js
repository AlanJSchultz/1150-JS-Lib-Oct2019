//jshint esversion:6


// loops

// sample
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// for loops
for (let i = 1; i < 101; i++) {
    console.log(i);    
}

for (let i = 1; i <= 10; i++) {
    console.log("Number: " + i);
}


// practice

// Write a loop that counts to 50 by 5s. Starts at 0.
for (var i = 0; i <= 50; i += 5) {
    console.log(i);
}

// Write a loop that starts at 20 and counts down to 1. It subtracts one each time:
for (var i = 20; i >= 1; i--) {
    console.log(i);
}


// Write a for loop that starts at 3, and increments by 5, but doesn't go over 30:
for (var i = 3; i <=30; i += 5) {
    console.log(i);
}


// more practice

// Count to 200 by 25s. Start on 25.
for (var i = 25; i <= 200; i += 25) {
    console.log(i);
}

// Count to 10 by 2s. Start at 6.
for (var i = 6; i <= 10; i += 2) {
    console.log(i);
}

// Count to 10 by 5s. Start at 100.
for (var i = 100; i >= 10; i -= 5) {
    console.log(i);
}


// Write a loop that calls a function every time it iterates

function pacersWon() {
    console.log("Pacers Won!");
}

for (var i = 0; i < 5; i++) {
    pacersWon();
}
