//jshint esversion:7

/*
Challenge 1(Objects, Functions):

First, make an object that stores numbers, booleans, string values, and an array of numbers.

Make a function that accepts this object as a parameter, and checks that the object
does indeed store those types(use typeof, not instanceOf).If the object contains
any types not listed above, the function should return false.Otherwise, it returns
true.

If you would like an additional challenge, make your
function check that any
object passed to it has at least 1 number, boolean, and string.
*/

let nameIt = {
    number: 55,
    tired: true,
    quote: "This is a quote!",
    anArray: [212, 26, 5],
};

function challenge(obj) {
    for (const value in obj) {
        if (typeof obj[value] !== "number" && typeof obj[value] !== "boolean" &&
            typeof obj[value] !== "string" && typeof obj[value] !== "object") {
                return false;
            }
    }
    return true;
}

console.log(challenge(nameIt));

