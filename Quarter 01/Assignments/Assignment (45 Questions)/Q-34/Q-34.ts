/*
Q # 34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

// Array of favorite pizzas
const favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the name of each pizza using a for loop
console.log("My favorite pizzas are:");
for (let i = 0; i < favoritePizzas.length; i++) {
  console.log(favoritePizzas[i]);
}

// Modify the loop to print a sentence for each pizza
console.log("\nStatements about my favorite pizzas:");

console.log("\nI like these pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
  console.log(`I like ${favoritePizzas[i]} pizza`);
}

// Add a line outside the loop expressing overall love for pizza
// Print an additional sentence about how much I like pizza
console.log(`\nI really love pizza!`);

// Another Method

// Array of favorite pizzas
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the name of each pizza
console.log("My favorite pizzas:");

for (const pizza of favoritePizzas) {
  console.log(pizza);
}

// Modify the loop to print a sentence for each pizza
console.log("\nStatements about my favorite pizzas:");

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the loop expressing overall love for pizza
console.log("\nI really love pizza!");
