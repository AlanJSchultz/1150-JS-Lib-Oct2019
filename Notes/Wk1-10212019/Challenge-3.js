// Challenge 3:  Make 2 variables.
// 
// The first is an array, the second is an object.
// Inside each variable, store a string, a number,
// a boolean, an undefined, a null, an array, and an object.
// 
// Once you've defined each variable, use console.log messages 
// to output every value within your array and your object.

var arr = ["one", 2, false, undefined, null, ["two", 3, false], {
    class: "part time",
    weeks: 24, 
    partTime: true
}];

// var obj = 

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[5][0]);
console.log(arr[5][1]);
console.log(arr[5][2]);
console.log(arr[6]);
console.log(arr[6].class);
console.log(arr[6].weeks);
console.log(arr[6].partTime);
