"use strict";
/*
Q # 06
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace
around the name is displayed. Then print the name after striping the white spaces.
*/
let personName = "\t   Rabia Iqbal \n";
console.log("Name with whitespace1", personName);
// Stripping whitespaces using trim()
let strippedName = personName.trim();
console.log("Stripped name1:", strippedName);
// Method 2:
const personNameWithWhitespace = "\t   \n Rabia Iqbal \t \n";
console.log(`Name with whitespace2: " ${personNameWithWhitespace}"`);
// Stripping whitespaces using trim()
const strippedName2 = personNameWithWhitespace.trim();
console.log(`Stripped Name2: " ${strippedName2}"`);
// Method 3:
const personNameWithWhitespace3 = "\t   \n Rabia Iqbal \t \n";
console.log(`Name with whitespace3: ${personNameWithWhitespace3}`);
// Stripping whitespaces using trim()
const strippedName3 = personNameWithWhitespace.trim();
console.log(`Stripped Name3: ${strippedName3}`);
