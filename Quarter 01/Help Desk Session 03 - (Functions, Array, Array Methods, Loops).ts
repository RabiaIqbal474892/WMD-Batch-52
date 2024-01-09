//#################################################################

// Help Desk Session 03 - (Functions, Array, Array Methods, Loops)
//   (https://www.youtube.com/watch?v=c0qSAAkozh4&t=1278s)

//#################################################################

//#################################### 1 ####################################

let userCountry = "pakistan";
let userAge = 20;

let correctAns = "pakistan";

if (userCountry === "pakistan") {
  if (userAge >= 18) {
    console.log("Here is your ticket");
  } else {
    console.log("You are not eligible");
  }
} else {
  console.log("Invalid country");
}

//#################################### 2 ####################################

let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "grapes";
let fruit4 = "strawberry";
let fruit5 = "orange";

let fruits = ["apple", "banana", "grapes", "strawberry", "orange"];

console.log(fruits);
console.log(fruit4);
console.log(fruits[3]);

//#################################### 3 ####################################

let pets: string[] = [];

console.log(pets[0]); // undefined

pets[0] = "cat";
pets[1] = "horse";

console.log(pets[0]);

//#################################### 4 ####################################

let pets2 = ["cat", "goat", "rabbit", "cow", "horse"];

pets2.pop(); // removes last element - horse
pets2.pop(); // removes last element - cow
pets2.pop(); // removes last element - rabbit

console.log(pets2);

//#################################### 5 ####################################

let pets3 = ["cat", "goat", "rabbit", "cow", "horse"];

pets3.push("elephant");

console.log(pets3);

//#################################### 6 ####################################

let pets4 = ["cat", "goat", "rabbit", "cow", "horse"];

// shift removes 1st element - cat
// shift pushes back other elements - "goat", "rabbit", "cow", "horse"

// shift removes 1st element - goat
// shift pushes back other elements - "rabbit", "cow", "horse"

pets4.shift();
pets4.shift();
pets4.shift();
pets4.shift();

console.log(pets4);

//#################################### 7 ####################################

let pets5 = ["cat", "goat", "rabbit", "cow", "horse"];

// unshift - adds an element in the start of the array
// push - add an element in the last of the array

pets5.unshift("elephant");

console.log(pets5[2]);

//#################################### 7 ####################################

// The splice() method adds new items to an array.

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// splice(start: number, deleteCount?: number | undefined): string[]

// (method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[]

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.

// (2, 0, "Lemon")
// we want to add element before apple and after orange - index 2
// we do not want to delete elements after index 2 - 0
// we want to add "Lemon" at index 2

fruits2.splice(2, 0, "Lemon");

console.log(fruits[2]); // Lemon
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"];

fruits2.splice(2, 1, "Grapes");
// ["Banana", "Orange", "Grapes", "Mango"];

console.log(fruits[2]); // Grapes
console.log(fruits); // ["Banana", "Orange", "Grapes", "Mango"];
// Apple will be deleted

fruits2.splice(2, 2, "Grapes");
// ["Banana", "Orange", "Grapes"];

console.log(fruits[2]); // Grapes
console.log(fruits); // ["Banana", "Orange", "Grapes"];
// Apple will be deleted
// Mango will be deleted

//#################################### 8 ####################################

// The slice() method slices out a piece of an array.

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.slice(1);
console.log(fruits[0]); // Banana

let slicedArray = fruits3.slice(1); // ["Orange", "Apple", "Mango"]
// slicing will start from index 1 - orange
// upto where we will slice, upto end it will slice

// slice method does not changes original array

// (method) Array<string>.slice(start?: number | undefined, end?: number | undefined): string[]

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

console.log(fruits3); // ["Banana", "Orange", "Apple", "Mango"];
console.log(slicedArray); // ["Orange", "Apple", "Mango"]

let slicedArray2 = fruits3.slice(1, 3);

console.log(slicedArray2); // ["Orange", "Apple"]

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];

let slicedArray3 = fruits4.slice(1, 2);

console.log(slicedArray3); // ["Banana", "Orange"]

//#################################### 9 ####################################

function greet() {
  console.log("Hi Rabiaa! Welcome to TypeScript");
}

greet();
greet();
greet();

function greet2(firstName: string) {
  console.log(firstName);
  console.log(`Hi ${firstName}! Welcome to our website`);
}

greet2("Muhammad Iqbal");
