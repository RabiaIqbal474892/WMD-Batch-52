/*
Q # 18
Seeing the World: Think of at least five places in the world you’d like to visit.
1
• Store the locations in a array. Make sure the array is not in alphabetical order.
2
• Print your array in its original order.
3
• Print your array in alphabetical order without modifying the actual list.
4
• Show that your array is still in its original order by printing it.
5
• Print your array in reverse alphabetical order without changing the order of the original list.
6
• Show that your array is still in its original order by printing it again.
7
• Reverse the order of your list. Print the array to show that its order has changed.
8
• Reverse the order of your list again. Print the list to show it’s back to its original order.
9
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
10
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

// Step 1: Create an array to store Travel destinations.

let travelDestinations: string[] = [
  "Jeddah",
  "Islamabad",
  "Makkah Mukarma",
  "Madina Munawara",
  "England",
];

// Step 2: Print your array in its original order.

console.log("Original Order:");
console.log(travelDestinations);

// Step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order without modifying the actual list");
console.log([...travelDestinations].sort());

// Step 4: Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order.");
console.log(travelDestinations);

// Step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort().reverse());

// Step 6: Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);

// Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
travelDestinations.reverse();
console.log(travelDestinations);

// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original");
travelDestinations.reverse();
console.log(travelDestinations);

// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabetical order");
travelDestinations.sort();
console.log(travelDestinations);

// Step 10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabetical order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
