//jshint esversion:7

/*
02.02 - Object keys and Object values
*/

/*

Use the
function 'objectChecker'
to accept the object {
    name: 'Batman',
    age: 42,
    isVillain: false
}.

Your function should return an array that has three elements inside:

a) an array of all the keys in the object,
b) an array of all the values in the object, 
c) the number of key - value pairs in the object. 

Make sure the array has items a, b, and c in order.

Be sure to console.log what your function returns so you can see it!

*/


// let theObject = {
//     name: 'Batman',
//     age: 42,
//     isVillain: false
// };

// Your function should return an array that has three elements inside


// console.log(" ");
// console.log("object theObject");
// console.log(theObject);


// console.log(" ");
// console.log("--- an array of all the keys in the object ---");
// // array of all the keys in the object,
// console.log(Object.keys(theObject));

// let objKeys = Object.keys(theObject);
// console.log(objKeys);


// console.log(" ");
// console.log("--- an array of all the values in the object ---");
// // an array of all the values in the objec
// console.log(Object.values(theObject));

// let objVals = Object.values(theObject);
// console.log(objVals);


// console.log(" ");
// console.log("--- the number of key - value pairs in the object ---");
// // the number of key - value pairs in the object
// console.log(Object.keys(theObject).length);

// let objNumOfKeys = Object.keys(theObject).length;
// console.log(objNumOfKeys);


// console.log(" ");
// console.log("that has three elements");
// that has three elements
// let objKeys = Object.keys(theObject);
// let objVals = Object.values(theObject);
// let objNumOfKeys = Object.keys(theObject).length;
// let finalArr = [];
// finalArr.push(objKeys);
// finalArr.push(objVals);
// finalArr.push(objNumOfKeys);
// console.log(finalArr);



// let theObject = {
//     name: 'Batman',
//     age: 42,
//     isVillain: false
// };

// function objectChecker(obj) {
//     let objKeys = Object.keys(obj);
//     let objVals = Object.values(obj);
//     let objNumOfKeys = Object.keys(obj).length;
//     let finalArr = [];
//     finalArr.push(objKeys);
//     finalArr.push(objVals);
//     finalArr.push(objNumOfKeys);
//     return finalArr;
// }

// console.log(objectChecker(theObject));



function objectChecker(object) {
    let objKeys = Object.keys(object);
    let objVals = Object.values(object);
    let objNumOfKeys = Object.keys(object).length;
    let finalArr = [];
    finalArr.push(objKeys);
    finalArr.push(objVals);
    finalArr.push(objNumOfKeys);
    return finalArr;
}

let theObject = {
    name: 'Batman',
    age: 42,
    isVillain: false
};

console.log(objectChecker(theObject));

