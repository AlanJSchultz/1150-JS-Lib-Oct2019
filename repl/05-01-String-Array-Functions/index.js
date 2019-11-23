//jshint esversion:8

// 05.01-String Array Functions

/*

Make 2 functions.

Each function accepts an array of strings and returns that array of strings 
after we operate on that array.

The first function removes any elements from the input array that have 'q'
or 'p' in them(uppcase or lowercase).

The second function capitalizes the first letter of each word in the string 
and leaves the rest of the string untouched.

Here is a test with its output:

    input -
    let inputArr = ['tyler Michael shelton', 'LAINEY', '1150 academy', 'quietly tiptoe', 'this is a thing'];
console.log(qOrPRemover(capitalFirst(inputArr)));

output - ['Tyler Michael Shelton',
    'LAINEY',
    '1150 Academy',
    'This Is A Thing'
]

*/


let inputArr = ['tyler Michael shelton', 'LAINEY', '1150 academy', 'quietly tiptoe', 'this is a thing'];

console.log(qpRemover(capitalizer(inputArr)));

function qpRemover(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.includes('p') || element.includes('q') || element.includes('P') || element.includes('Q')) {
            array.splice(i, 1);
        }
    }
    return array;
}

function capitalizer(array) {
    //insert your code here
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array;    
}
