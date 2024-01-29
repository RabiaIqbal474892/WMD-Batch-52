/*
Q # 29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

// Define the array of fruits
const favorite_fruits: string[] = ["apple", "mango", "banana"];

// Syntax: arrayName.includes("element")

// Check for specific fruits using independent if statements
if (favorite_fruits.includes("apple")) {
  console.log("I like apples!");
}

if (favorite_fruits.includes("banana")) {
  console.log("I enjoy bananas!");
}

if (favorite_fruits.includes("mango")) {
  console.log("Mangoes are one of my favorites!");
}

if (favorite_fruits.includes("grape")) {
  console.log("Grapes are tasty!");
} else {
  console.log("Grapes are not one of your favorite fruits.");
}

if (favorite_fruits.includes("orange")) {
  console.log("Oranges are delicious!");
} else {
  console.log("Oranges are not one of your favorite fruits.");
}
