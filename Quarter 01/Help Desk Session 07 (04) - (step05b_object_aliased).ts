//############################################################################

// Help Desk Session 07 - (step04_unions_literals, step05a_objects, step05b_object_aliased, step05c_structural_typing_object_literals, step05d_nested_objects)

//   (https://www.youtube.com/watch?v=93kam-INDjI&t=100s)

//############################################################################

// step05b_object_aliased

//############################################################################

// anonymous

let teacher: { name: string; exp: number } = {
  name: "Zeeshan",
  exp: 10,
};

//############################################

// to give objects some types
// we use type alias or interface

//############################################

// Aliased Object Type
type Student = {
  name: string;
  age?: number;
};

let student: Student = {
  // Property 'age' is missing in type '{ name: string; }' but required in type 'Student'.
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);

//############################################

// Interfaces

// Aliased Object Type
interface Student2 {
  name: string;
  age?: number;
}

let student2: Student2 = {
  // Property 'age' is missing in type '{ name: string; }' but required in type 'Student'.
  name: "Hira",
  age: 30,
};

console.log(student2["name"]);
console.log(student2.age);

//############################################

// Interfaces

// Interface mostly objects k sath use hta hai
// because type (type alias) ma agr hum extra properties dain ge to wo interface support kr sake ga
// Type hum number of variables k sath use krte hain

// Type jo hum use krte hain, wo normally hmare pas typescript ma pre-build types hte hain,
// unke unions bnane k lye krte hain
// kisi b variable ya kisi aur value ko store krne k lye
// type hmare lye interface ka b kam kr skta hai
// but type hum unions bnane k lye krte hain

// interface hum apne custom data types bnane k lye use krte hain
// jb hmare database se, APIs se different types ka data araha hta hai
// us ma string b hta, different types ka data hta hai
// iske lye hum interface use krte hain

// 1 more thing
// hum 1 he type k 2 interface bna skte hain
// typescript un dnu interface ko, un dnu interface ki properties ko merge kr k 1 interface ma kr de ga
// hum types ma aesa nai kr skte

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
};

//############################################
//############################################
//############################################

// In TypeScript, type aliases are used to assign a name for any type. It doesn't create a new type.
// Instead, it provides a name for the type.

// Create type alias

type gender = "male" | "female" | "nonbinary";

let male: gender = "male";
let female: gender = "female";
let nonbinary: gender = "nonbinary";

console.log(male, female, nonbinary);

// In the code above, we have created a type alias with the name gender.
// The gender type can have one of the following values: "male", "female", or "nonbinary".

//#######################
//#######################

// Create type alias

// We create a type alias with the name alphaNumeric . The alphaNumeric type can have either a string or a numeric value.

type alphaNumeric = string | number;

let num: alphaNumeric = 10;
let str: alphaNumeric = "ten";

// We create a type alias with the name Point. The Point type is an object that has two numeric properties, x and y .

type Point = {
  x: number;
  y: number;
};

let pt: Point = { x: 10, y: 20 };

// We create a type alias with the name obj. The value of the obj type should either be {val: 1} or {val: 2} .
// obj type variable can have any one of the below value
type obj = { val: 1 } | { val: 2 };

// Similarly, we create a type for func
// obj type variable can have any one of the below value
type func = (() => string) | (() => void);

//############################################
//############################################
//############################################
