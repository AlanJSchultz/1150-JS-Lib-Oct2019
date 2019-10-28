//jshint esversion:7

/*
ARRAYS
*/

// what is an arrsy?
// has [] brackets
// can hold multiple datatypes
// arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
// hidden keys    0         1         2      3     4    5       6
console.log(typeof students);  // tupeof doesn't tell me my variable is an array -> object
console.log(Array.isArray(students));
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[1]);

let name = students[6];
console.log(name);
let name1 = students[6][0];
console.log(name1);

console.log(students[6][1]);

let name2 = students[6][1];
console.log(`Hello ${name2}, you look niced today.`);

// recall for-of loop -> gives the value of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
for (const f of food) {
    console.log(f + ' is amazing!');
}

// array methods
food.push('Pizza');  // added to the end of our array
console.log(food);
food.splice(1, 1, 'Bananas');
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');  // asks for an insertion point,
//  how many things to remove, then the item or items to add
console.log(food);
food.pop();  // removes the last element of an array
console.log(food);

food = food.slice(2, 5);  // the first number is the first element to slice from the array,
// while the second number is the stop position (not to be included)
console.log(food);

// forEach allows us to iterate with loops specifically, and we can directly grab both elements
// and their index numbers

let fad = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
for (const f of fad) {
    console.log(f + ' is amazing!');
}
fad.forEach((f)=> console.log(f));

fad.forEach((fad, index) => {
    console.log(fad);
    console.log(index);
});

fad.forEach((fad, index) => {
    console.log(`The ${fad} food in our array is at position ${index}`);
});

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extaordinary Gentlemen');
// console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

// let's do the following with an array
// we will check if we are working with an array
// flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
// using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);
console.log(arr, arr instanceof Array);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

