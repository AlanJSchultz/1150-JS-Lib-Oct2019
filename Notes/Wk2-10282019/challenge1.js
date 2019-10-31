//jshint esversion:7

/*

Challenge 1:

Write a for loop that loops 10 times.Every time the loop is run, it calls a
function. The function should console.log a random number between 5 and 7. 

Once you've completed the challenge with a for-loop, see if
you can make this work with a for - of loop.

If you can solve that problem, see if you can solve this with
a for -each loop. 

Note that for - of and for -each loops 
require slightly different conditions to work than a for loop requires.

*/


// for loop
function randomMinMax(min, max) {
    console.log(Math.floor(Math.random() * (max - min +1)) + 5);
}

for (let i = 0; i < 10; i++) {
    randomMinMax(5, 7);
}


// for - of loop


// for - each loop


