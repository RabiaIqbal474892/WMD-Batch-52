/*
Q # 03
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
// Store a person's name in a variable
var personName = "Rabia Iqbal Malik";
// Method 1: Print in lowercase
var lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// Method 2: Print in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Method 1: Print in uppercase
var uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// Method 2: Print in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Method 1: Print in titlecase
var words = personName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
// Method 2: Print in titlecase
function toTitleCase(personName) {
    var words = personName.split(" ");
    var titlecaseName = "";
    for (var i = 0; i < words.length; i++) {
        titlecaseName +=
            words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }
    // Remove trailing space
    titlecaseName = titlecaseName.trim();
    return titlecaseName;
}
console.log("Titlecase: ".concat(toTitleCase(personName)));
