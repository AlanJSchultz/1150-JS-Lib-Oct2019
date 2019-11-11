//jshint esversion:8

// # Promises
// States of Promise: Pending, Resolved, Rejected


// Boolean declaration 
var amIGood = false;

// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); // rejected
        }
    }
);


// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
            // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
            // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};

checkTwice();


