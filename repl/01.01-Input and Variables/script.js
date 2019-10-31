//jshint esversion:7
0
/*
Using the html and js files provided, write a webpage that asks the user
for input on a store, a quantity, and a product.Save the user input in 3 separate variables.Once the user has input their information, your webpage should console.log a sentence using those 3 variables.For example: 'I shopped at *Target* for *5* *apples*'
may be output to the console.

Finally, using 'typeof', console.log the type of both an array(like[1, 2, 3, 4, 5]) and an object(like {
key: 'first', thing: 'second'}).
*/


// let store = "Target";
// let quantity = 5;
// let product = "apples";
let store = prompt("Enter store name");
let quantity = prompt("Enter the number of product");
let product = prompt("Enter name of product");
console.log("I shopped at " + store + " for "+ quantity + " " + product);

let arr = [1, 2, 3, 4, 5];
console.log("The typeof for array arr is " + typeof arr);

let obj = {
    key: "first",
    thing: "second"
};
console.log("The typeof for object obj is " + typeof obj);
