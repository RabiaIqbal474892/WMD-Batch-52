/*
Q # 44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function makeSandwich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("   - You ordered an empty sandwich. Please add some items.");
  } else {
    items.forEach((item, index) => {
      console.log(`   ${index + 1}. ${item}`);
    });
  }
  console.log("\n");
}

// Call the function with different numbers of arguments

makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Banana", "Honey");

// Another Method

function orderSandwich(...items: string[]): void {
  console.log("Sandwich Order:");
  if (items.length === 0) {
    console.log("No items selected. Please choose some items for your sandwich.");
  } else {
    console.log("Items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
  }
  console.log("------------------------------------");
}

// Example usage of the orderSandwich function
orderSandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Bread", "Peanut Butter", "Jelly");
orderSandwich(); // No items selected
