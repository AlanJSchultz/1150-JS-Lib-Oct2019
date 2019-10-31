//jshint esversion:6

// displaying type

var str = "eleven";  // string
var num = 50;  // number
var bool = true;  // boolean
var def;  // undefined
var nll = null;  // object
var arr = [151, "Ohio", true];  // object, isArray true
var obj = {
    course: "JavaScript",
    weeks:  24
};  // object, isArray false

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof def);
console.log(typeof nll);
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(typeof obj);
console.log(Array.isArray(obj));
