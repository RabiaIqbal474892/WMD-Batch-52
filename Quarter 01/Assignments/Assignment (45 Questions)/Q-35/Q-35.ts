/*
Q # 35
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such as A dog would make a great pet.

• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

// List of animals with a common characteristic
const animals: string[] = ["cat", "rabbit", "goat"];

// Printing the names of each animal using a for of loop
console.log("List of animals:");
for (const animal of animals) {
  console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
  if (animal === "rabbit") {
    console.log(`A ${animal} is a great pet.`);
  } else if (animal === "cat") {
    console.log(`A ${animal} would be a good companion at home.`);
  } else if (animal === "goat") {
    console.log(`A ${animal} is an adorable pet that also give us milk.`);
  }
}

// Common characteristic
console.log("\nWhat these animals have in common");
console.log("\nAny of these animals would make a great pet!");

// Another Method

// Array of animals with a common characteristic
const animals: string[] = ["Goat", "Cat", "Rabbit"];

// Print the name of each animal
console.log("List of animals:");

for (const animal of animals) {
  console.log(animal);
}

// Modify the loop to print a statement about each animal
console.log("\nStatements about each animal:");

for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line at the end stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");
