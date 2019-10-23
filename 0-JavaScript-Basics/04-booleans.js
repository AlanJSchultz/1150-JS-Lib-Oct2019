// description
// boolean --- true or false
// one of two values, such as: yes / no, on / off, true / false

// examples of declaring and initializing a boolean variable in JavaScript
var isLoggedIn = true;
var isAuthenticated = true;
var hasLoggedInToday = false;
var hasToken = false;

// comparison operqators
// Operator & Meaning
// ==   Equality
// ===  Strict Equality
// !=   Inequality
// !==  Strict Inequality
// >    Greater than
// >=   Greater than or equal
// <    Less than
// <=   Less than or equal

// Printing values
console.log(2 > 1); // true
console.log(3 < 2); // false
var test = 2 >= 3; // what will this print?
console.log(test); // false
console.log("Two is greater than one? " + (2 > 1)); // true
console.log(3 >= 1); // true

// other operations
console.log(2 == "2"); // true
console.log(1 == "1"); // true
console.log(2 === "2"); // false
console.log(2 === 2); // true
console.log("Password12!!" === "Password12!!"); // true

//more practice
console.log("Password12!" === "Password12!!"); // false
console.log(1 !== 2); // true
console.log(10 !== 10); // false

//logical operators
console.log("&& : ", 2 === 2 && 1 === 1); // true
console.log("|| : ", 2 === 2 || 2 === 1); // true
console.log("!= : ", 2 != 1); // true

