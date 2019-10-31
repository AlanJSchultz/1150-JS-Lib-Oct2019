//jshint esversion:6

// Challenge 5:
// present to them this color wheel:
// https://www.ecgprod.com/wp-content/uploads/2017/08/true-light-color-wheel.jpg
// 
// Ask them to automate the following process: 
// for any given color starting point on the wheel, find the
// color 2 counter-clockwise spaces from that starting point.
// 

let colors = ['Red', 'Yellow', 'Green', 'Cyan', 'Blue', 'Magenta'];
//              0        1         2       3       4        5

let index = Math.floor(Math.random() * colors.length);

console.log(colors[index], ' is the color chosen.');

switch (index) {
    case 0 : console.log("Magenta is two positions counter-clockwise from Red.");        
        break;
    case 1 : console.log("Red is two positions counter-clockwise from Yellow.");
        break;
    case 2 : console.log("Yellow is two positions counter-clockwise from Green.");
        break;
    case 3 : console.log("Green is two positions counter-clockwise from Cyan.");
        break;
    case 4 : console.log("Cyan is two positions counter-clockwise from Blue.");
        break;
    case 5 : console.log("Blue is two positions counter-clockwise from Magenta.");
        break;
}
