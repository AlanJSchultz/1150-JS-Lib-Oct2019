//jshint esversion:7

/*
FUNCTIONS
*/

// General ideas: at their broadest level, functions do the following:
// 1) they take some input which the function will handle/process
// 2) they process the input given to them
// 3) they usuallu, but not always, return some value
// 4) they can be invoked (used) as many times as we want, cutting down on code repetition

console.log('--- example one ---');
// example one:
function newFunc(num) {
    return num + 1;
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));


console.log(" ");
console.log('--- example two---');
// example two:
function sentence(firtName, lastName) {
    return `My first name is ${firtName} and my last name is ${lastName}`;
}
console.log(sentence('Jonathon', 'Huer'));
console.log(sentence('Tyler', 'Shelton'));
let superImportantSentence = sentence('Nicky', 'Disborough');
console.log(superImportantSentence);


console.log(" ");
console.log('--- example three---');
// example three
// lets build a function that takes a complex type -- an array in this case,
// and console.log each item in the input array
let arr = [1, true, {key: 'string'}, [0, false, null], 'string'];
let arr2 = [5,6,7,8,9,10];
function iteratorFunc(inputArr) {
    for (let element of inputArr) {
        console.log(element);  // side effect since there is no return
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);

