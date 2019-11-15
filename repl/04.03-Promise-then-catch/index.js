//jshint esversion:8

/*

04.03 - Promise, .then, .catch

Write a custom - built promise.

If Date.now() has an even number of milliseconds, 
the promise should resolve.

If Date.now() has an odd number of milliseconds, 
the promise should reject.

In either case, use .then & .catch to handle the 
resolved or rejected promise and print a message.

*/

let splitSecondTime = Date.now();

// console.log(splitSecondTime);
// if (splitSecondTime % 2 == 0) {
//     console.log('Millisecond Time is Even');
// } else {
//     console.log('Millisecond Time is Odd');
// }

let milliseconds = new Promise((resolve, reject) => {
    if (splitSecondTime % 2 == 0) {
        resolve('resolved promise even time');  // comes up with the resolved value
    } else {
        reject('rejected promise odd time');  // comes up with the rejected error
    }
});

milliseconds
    .then((value) => console.log(splitSecondTime, value))  // function for resolved
    .catch((error) => console.log(splitSecondTime, error));  // function for rejected


// 1573855637191 "rejected promise odd time"
// 1573856008286 "resolved promise even time"
