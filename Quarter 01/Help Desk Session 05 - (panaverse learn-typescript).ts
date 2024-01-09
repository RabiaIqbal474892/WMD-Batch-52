//############################################################################

// Help Desk Session 05 - (step00_helloworld, step00a_json_objects, step00b_syntax_error, step00c_type_error, step00d_assignability_error, step01_strong_typing, step02_const_let)

//   (https://www.youtube.com/watch?v=L6ph9p_wxsM)

//############################################################################

let fruits = ["orange", "kiwi"];

let stuName = "Ali";
let age = 27;
let pass = true;

let student1 = {
  name: "Ali", // properties
  age: 27,
  pass: true,
  hobbies: ["games", "cricket"],
  fun: function () {
    console.log("hi");
  },
  sum() {
    // method
    console.log(5 + 9);
  },
};

console.log(student1);

console.log(student1.name);

console.log(student1["name"]);

student1.fun();

student1.sum();

//############################################################################

// step01_strong_typing

//

//strongly typed syntax / or type annotation / or explicit typing
let a: string = "Pakistan";
a = "USA";
let b: number = 9;
let c: boolean = true;

//type inference / or implicit typing
let e = "USA"; // jb hum us ma value dain ge to usey koi type mile gi, yahan pr hum e ma integer nai dal skte
let f = 10.9;
f = 22;
let g = false;
g = true;

let ab; // any

let ab2: string; // explicit type casting or type annotation

//############################################################################

// step02_const_let

let arr = [1, 2, 3, 4, 5];
arr = [3, 4, 6, 7];

const arr2 = [1, 2, 3, 4, 5]; // cannot change values, cannot give new values again using assignment operator, we can use methods on it like push, pop, splice, slice etc.
// arr2 = [1, 34, 5, 6];
arr2.push(1, 34);

//############################################################################

//use const where variable values do not change
const a2 = 5;
const b2: number = 33;
const c2 = "best";

//I suggest use let instead of var everywhere,
//becuase let has blocked scope
if (true) {
  let z = 4;
  //use z
} else {
  let z = "string";
  //use z
}
console.log("let: " + z); // Error: z is not defined in this scope

// typescript to javascript conversion - transpiling (code 1 language se 2sri language ma convert hta hai)
// javascript compilation krta hai but line by line, it is known as interpretation
