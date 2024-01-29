/*
Q # 11
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

// Method 1
let names: string[] = ["Muhammad", "Ahmad", "Ali", "Khuram"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Method 2
const names2: string[] = ["Muhammad Iqbal", "Umar", "Usman", "Abdul Rahman"];

// Print each person's name one at a time
for (let i = 0; i < names2.length; i++) {
  console.log(`Person ${i + 1}: ${names2[i]}`);
}
