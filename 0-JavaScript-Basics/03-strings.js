// string examples
console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account has two million bucks in it. It's gone now.");

// variables
var tweet = "Lebron is king! Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = "jamespauloconnor";
console.log(tweet);
console.log(facebookPost);
console.log(username);

// numbers in a string
var password = "123456789HELLO";
var birthday = "August 11";
console.log(password);
console.log(birthday);

// concatenation
var birthCity = "Indianapolis";
var birthState = "Indiana";
console.log(birthCity + ", " + birthState);

// challenge
birthCity = "Chicago";
birthState = "Illinois";
console.log(birthCity + ", " + birthState);

// strings and numbers
var ageInAugust = 40;
var highSchool = "Bill Murray High School";
var graduatedHIghSchool = 1994;
console.log(highSchool + ", " + graduatedHIghSchool);
console.log("My age in August: " + ageInAugust);

// another challenge
var gradYear = 1994;
var highSchool = "Bill Murray High School";
console.log("I graduated from " + highSchool + " in " + gradYear + ".");


// string methods
// using built in properties using the dot operator

// length - returns the length of a string (including spaces)
console.log(highSchool.length);

// lower or upper case
console.log(highSchool.toUpperCase);
console.log(highSchool.toLowerCase);

console.log(highSchool.split(" ")); // splits the string into an array on each space['Bill', 'Murray', 'School' ]
console.log(highSchool.slice(10)); // cuts off everything before the nth index
