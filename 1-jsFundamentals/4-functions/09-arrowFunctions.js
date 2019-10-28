//jshint esversion:7

/*
ARROW FUNCTIONS
*/

// normal function declaration
function coffee(){             //  named function
    return 'coffee is good';
}

// normal function expression
let tea = function(){          //  un-named function called with name of the variable
    return 'tea is healthy';
};

console.log(coffee());
console.log(tea());


// arrow functions are *always* anonymous
// arrow function expression
let hotChocolate = () => {                //  arrow function
    return 'hot chocolate is king';
};
console.log(hotChocolate());


// console.log(animals(3, 2));  // not hoisted
let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`;};
console.log(animals(3, 2));
console.log(animals(0, 0));

// concise vs. block body
// concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

// block body
let bananas = (x) => {       // parens optional for single param
    return `There are ${x} bananas`;
};
console.log(bananas(5));
// return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());

let secondFunc = () =>
'hi';                      // allowed but why seperate from one line up
console.log(secondFunc());
