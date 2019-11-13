// @ts-nocheck
//jshint esversion:8

/*
Write a function that takes a sentence (string) as a 
parameter and returns an array of separated words
(based on space) in a single array.
Example: "The train was late yesterday"
Console log display ["The", "train", "was", "late", "yesterday"]
*/


let mySentence = "The train was late yesterday";
console.log(mySentence); // The train was late yesterday
console.log(mySentence.split); // [Function: split]
console.log(mySentence.split()); // [ 'The train was late yesterday' ]
console.log(mySentence.split(' ')); // [ 'The', 'train', 'was', 'late', 'yesterday' ]

function sentenceSplitter(sentence) {
    return sentence.split(' ');
}
console.log(sentenceSplitter(mySentence));
