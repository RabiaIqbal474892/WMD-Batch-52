"use strict";
/*
Q # 10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/
// Ctrl + / (comments)
// Store a person's name in a variable
let personName = "Rabia Iqbal Malik";
// Method 1: Print in lowercase
let lowercaseName = personName.toLowerCase();
// Method 1: Print in uppercase
let uppercaseName = personName.toUpperCase();
// Method 1: Print in titlecase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
// console.log(titlecaseName);
// Method 2: Print in titlecase
function toTitleCase(personName) {
    let words = personName.split(" ");
    let titlecaseName = "";
    for (let i = 0; i < words.length; i++) {
        titlecaseName +=
            words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }
    // Remove trailing space
    titlecaseName = titlecaseName.trim();
    return titlecaseName;
}
// console.log(`Titlecase: ${toTitleCase(personName)}`);
console.log(lowercaseName);
// Method 2: Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(uppercaseName);
// Method 2: Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(titlecaseName);
console.log(`Titlecase: ${toTitleCase(personName)}`);
