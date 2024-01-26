//############################################################################

// Help Desk Session 07 - (step04_unions_literals, step05a_objects, step05b_object_aliased, step05c_structural_typing_object_literals, step05d_nested_objects)

//   (https://www.youtube.com/watch?v=93kam-INDjI&t=100s)

//############################################################################

// step04_unions_literals

let myname: string | null; // (unions_literals, string | null)

myname = null; // narrowing (let myname: null)
myname;
myname = "Rabiaa"; // narrowing (let myname: string)
myname;
console.log(myname);

myname = "zia";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error (Type 'number' is not assignable to type 'string' i.e., type or literal)

let myAge: string | number;

myAge = 16; //narrowing
myAge;
myAge.toFixed(); // functions for numbers
console.log(myAge);

//console.log(myAge.toLowerCase());//Error

//############################################################################

// step04_unions_literals

// Typeguard: Type guards can help you narrow down the possible types of a variable and avoid errors.
// Type guard is a condition

// if (typeof newAge === "string") {
//     this is called type guard which help in narrowing
//     Type of newAge: string
// newAge.toUpperCase(); // can be called
// } else {}

//############################################################################

// step04_unions_literals

myAge = "Hi";
myAge;
myAge.toLowerCase(); // functions for strings

myAge = "Dont Know"; //narrowing
console.log(myAge); // (let myAge: string)

console.log(myAge.toString()); // common to both types
//can be called even without narrowing

console.log(myAge.toLowerCase()); //Can be called on string
//because of narrowing

//############################################################################

// step04_unions_literals

console.log(Math.random()); // values between 0 and 1

let newAge = Math.random() > 0.6 ? "Khan" : 60;

newAge; // (let newAge: string | number) - we need type guard to handle such situation

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Typeguard
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
} else {
  // typeof newAge === "string" | "number"
  newAge;
}

if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
} else {
  // typeof newAge === "number"
  newAge;
  newAge.toFixed();
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

//############################################################################

// step04_unions_literals

let age: number | "died" | "unknown"; // can give specific strings (| - union)
// let age: number | "died" | "unknown" | "living";   // (| - union)

age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error (Type '"living"' is not assignable to type 'number | "died" | "unknown"'.)

let zia: "zia"; // string literal

zia = "zia";
//zia = "khan";//Error

// OR

let zia2 = "zia"; // Not string literal

zia2 = "zia";
zia2 = "khan"; //No Error

const b = 10; // cannot reassign (const b: 10)
// const assignConst: number | "died" | "unknown"; // cannot give value like this

//############################################################################

// step04_unions_literals

// Truthiness narrowing

// typescript, unions_literals, Truthiness narrowing

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined; // (let yourName: string | undefined)

if (yourName) {
  // when we have string value but not undefined
  yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase(); //OK , (? shows optional conditioning)

//############################################################################

// step04_unions_literals

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

data = "Airline";

let val: RawData; // reusability of type in RawData

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;
