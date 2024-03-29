//jshint esversion:7


// function callbackFunction() {
//     const data = {
//         name: 'Ralf Machio',
//         age: 66,
//         occupation: 'kickboxing'
//     };
//     return data;
// }

// function showGreeting(dataFromFunction) {
//     return "hello " + dataFromFunction.name + ", I hear you're the greatest?!";
// }

// console.log(
//     showGreeting(callbackFunction())
// );


//  --------------------------------------------------


function callbackFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }

    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    };
    return data;
}

function showData(dataFromFunction) {
    return "hello " + dataFromFunction.name;
}

console.log(
    showData(callbackFunction())
);


/* 
The code has to wait until the callback function is 
finished to continue doing what it was intending to do.  
*/
