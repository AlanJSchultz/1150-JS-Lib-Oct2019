//jshint esversion:8

/*

04.02 - Converse of Pyth.Theorem

Design a function that takes three inputs, 
which are the 3 side lengths of a triangle.

Use the(Converse of the) Pythagorean Theorem 
to see if the triangle is a right triangle.

Return true if it is, and false if it isn 't.  

The largest side length needs to be the third 
input to the function.

*/



function pythConverse(a, b, c) {
    //insert your code here
    if (c !> a || b) {
        console.log("The largest side must be the third input to the function.")
    } else if (c**2 == a**2 + b**2) {
        console.log("The triangle is a right triangle.")
    } else {
        console.log("The traingle is NOT a right triangle.")
    }
}
pythConverse();
