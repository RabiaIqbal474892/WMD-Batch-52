"use strict";
/*
Q # 42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// Array of magician’s names
const magicianNames = [
    "Harry Potter",
    "David Copperfield",
    "Hermione Granger",
    "Professor Albus Dumbledore",
    "Ron Weasley",
];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
const greatMagicianNames = makeGreat(magicianNames);
// Call the function to show the original magician's names
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
