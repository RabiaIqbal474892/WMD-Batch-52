/*
Q # 03
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

// Store a person's name in a variable
let personName: string = "Rabia Iqbal Malik";

// Method 1: Print in lowercase
let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);

// Method 2: Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Method 1: Print in uppercase
let uppercaseName: string = personName.toUpperCase();

console.log(uppercaseName);

// Method 2: Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Method 1: Print in titlecase
let words: string[] = personName.split(" ");

let titlecaseName: string = "";

for (let i = 0; i < words.length; i++) {
  titlecaseName +=
    words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}

console.log(titlecaseName);

// Method 2: Print in titlecase
function toTitleCase(personName: string): string {
  let words: string[] = personName.split(" ");

  let titlecaseName: string = "";

  for (let i = 0; i < words.length; i++) {
    titlecaseName +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
  }
  // Remove trailing space
  titlecaseName = titlecaseName.trim();

  return titlecaseName;
}

console.log(`Titlecase: ${toTitleCase(personName)}`);
