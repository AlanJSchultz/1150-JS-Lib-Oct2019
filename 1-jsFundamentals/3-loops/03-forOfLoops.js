//jshint esversion:7

/*
FOR OF LOOPS  (iterable or numbered)
*/

// requires the thing you are looping through be numbered


// let student = {
//     name: 'Peter',
//     isAwesome: true,
//     degree: 'javascripot',
//     week: 1
// };

// for (const item of student) {
//     console.log(item);  // crashes since not iterable
// }


let catArray = ['tabby', 'british shorhair', 'burmese', 'main coon', 'rag doll'];

for (const cat of catArray) {
    console.log(cat, 'says meow');
}


