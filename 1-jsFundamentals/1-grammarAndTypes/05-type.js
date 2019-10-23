//jshint esversion:6
/*

TYPES

*/

// Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

// boolean can represent: true/false, on/off, 0/1

// undefined
/*
undefined usually means a variable has been declared , but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef;
console.log(undef); // undefined

// null 
/*
null means a variable has been declared and assigned a value of null
*/
var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way --- nul values
are for gag gifts that are boxes intentionally given with nothing inside (because that is the gag).
Undefined values are gifts given when the persongiving the gifthas forgotten to put the gift
inside (oops!).
*/

// Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; // digit limit
console.log(rounded);

let notQuite = 0.2 + 0.1;  // js doesn't handle decimals well
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;  
console.log(numbersAreHard);

// Strings
// Strings is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// string concatenation vs addition
let first = 1050 + 100;
let second ='1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + 'abcde';
console.log(third);
console.log(typeof third);

// interpolation
// lets you use strings with dynamic content (they require backticks)

// example 1:
let age = 32;
let string = `my age is: ${age}`;
console.log(string);

// Objects

/*
What is an object?
An object is a container that stores property names and their values
(it can hold multliple data types)

Denoted by{}
Have keys and values --- color (key): 'blue' (value), seperated with a colon,
each key-value pair is separated with a comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
};

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);

// Arrays
/*
Arrays store multiple values in an ordered way.
They, too, hold multiple data types.
Denoted by []
Has values ("blue", "green", "yellow"), separated by commas
*/

var stepsToBrushTeeth = ["uncap toothpaste", "squeeze toothpaste", "rinse brush", "brush", "clean toothbrush"];
// array indexing                0               1                    2               3        4           
// console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[5]);
console.log(typeof stepsToBrushTeeth);
