//jshint esversion:7

/*
repl.it 02.01 - Loops with an Array
*/

/*

Using the array[1, 10, 8, 5, 7, 11], write a
for loop that console.logs 'your number is even'
if the number is even and 'your number is odd'
if your number is odd.

Once you 've solved this with a for loop, solve this with a for-of loop.

Finally, solve this challenge with a
for - in loop.

*/


let array = [1, 10, 8, 5, 7, 11];

console.log("--- for loop ---");
// for loop
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] % 2 == 1) {
        console.log(array[i] + ' is odd');
    } else {
        console.log(array[i] + ' is even');
    }
}

console.log(" ");
console.log("--- for-of loop ---");
// for-of loop
for (let numArr1 of array) {
    if (numArr1 % 2 == 1) {
        console.log(numArr1 + ' is odd');
    } else {
        console.log(numArr1 + ' is even');
    }
}

console.log(" ");
console.log("--- for-in loop ---");
// for-in loop
for (let numArr2 in array) {
    // console.log(array);
    // console.log(numArr2);
    // console.log(array[numArr2]);
    if (array[numArr2] % 2 == 1) {
        console.log(array[numArr2] + ' is odd');
    } else {
        console.log(array[numArr2] + ' is even');
    }
}

