/*
Q # 41
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

// Array of magician’s names
const magicianNames: string[] = [
  "Harry Potter",
  "David Copperfield",
  "Hermione Granger",
  "Professor Albus Dumbledore",
  "Ron Weasley",
];

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// call the function to show the magician's names
show_magicians(magicianNames);

// Another Method

function showMagicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Array of magician names
const magicianNames: string[] = [
  "Merlin",
  "Houdini",
  "David Copperfield",
  "Penn",
  "Teller",
];

// Call the showMagicians function with the array
showMagicians(magicianNames);
