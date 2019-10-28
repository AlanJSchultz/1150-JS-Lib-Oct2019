//jshint esversion:7

/*
FOR IN LOOPS   (for in object properties or string or arrays)
*/

// does not require the thing you are looping through be numbered

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
};

for (let item in student) {
    console.log(item);  // get property name
    console.log(student[item]);  // gets property value
}


let catArray = ['tabby', 'british shorhair', 'burmese', 'main coon', 'rag doll'];

for (const cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}


// let's wtite a for in loop that capitalizes the first letter of name

let instructor = 'pAuL';
let capName;

for (const n in instructor) {
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);

