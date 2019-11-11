//jshint esversion:8

// aasync chaining promises


// Boolean declaration 
var amIGood = true;

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


// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message);
        }
    );
};

// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // log before
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log('after opening gifts'); // log after
};

checkTwice();

/*
output:

before Christmas

after opening gifts  <<== you would thought this output last

Salutations fellow child I enjoy interacting with!
I notice you received a posable plastic Batman figurine 
during the Yultide season. What do you think of my new 
HasMattelbro Turbo - Man action figure ?
*/


/*
This is where asynchronous programming fits in.
The code will run without blocking or waiting
for the result. Anything that needs to wait
for a promise to proceed is put in .then.
*/
