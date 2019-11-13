// @ts-check
//jshint esversion:8

/*
for each number from 1 to 20,
print "blank" if it is divisible by 2, 
"frank" if it is divisible by 3, and
"blank frank" if it is divisible by both,
otherwise just print the number.
*/
// for loop

// function frankBlank() {
    for (let i = 1; i <= 20; i++) {
        if (i % 6 == 0) {
            console.log("blank frank");
        } else if (i % 3 == 0) {
            console.log("frank");
        } else if (i % 2 == 0) {
            console.log("blank");
        } else {
            console.log(i);
        }      
    }
// }
// frankBlank();

// loop can be in a function but can run with out in this case



// for in-loop

let rainbow = {
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    green: 'Green',
    blue: 'Blue',
    indigo: 'Ingigo',
    violet: 'Violet'
};
for (const element in rainbow) {
    // console.log(element);  // shows the keys
    console.log(rainbow[element]);  // shows the values of the keys
}



// for of-loop

let people = ['jason', 'gerald', 'mikaela', 'joe', 'jerimiah'];

for (const names of people) {
    // console.log(names + ": " + names.length);
    console.log(`${names}: ${names.length}`);
}



// foreach loop

people.forEach(names => {
    console.log(`${names}: ${names.length}`);
});
