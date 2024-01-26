//############################################################################

// Help Desk Session 08 - (Calculator, step05f_any__unknown_never_types, step06_explict_casting, step07a_enum, step07b_const_enum, step08_arrays)

//   (https://www.youtube.com/watch?v=W5b9OUM9Izg)

//############################################################################

// step06_explict_casting

let myname: unknown = "Zia"; // due to type unknown, no functions when myname.
console.log((myname as string).length); // explicitly
console.log((<string>myname).length); // by using generics

// implicit casting
let a = "2" + 2; // what data type , string + number, it will be string due to concatenation, this is called implicit casting

let myname2 = myname as string;
myname2.toLowerCase;

let b: unknown = "2"; // we want to convert it into number
let f = b as number;
f;

//############################################################################

// step07a_enum

enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
type clr = "red" | "blue";
var c: Color = Color.Green; // index ko assign krna hai to dot(.) lgana hai
console.log("c", c); // gives the index value

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color1[2]; // index 2 = green, agr values ko assign krna hai to bracket ma value dni hai
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
// it also allows same value , const enum Color2 { Red = 1, Green = 1, Blue = 1 } , but gives last value, Blue = 1, var colorName: string = Color1[0]; undefined
var colorIndex = Color2["Blue"]; // it assign index
console.log(colorIndex);

// index can be assign by dot(.) and square brackets,
// Color.Green , Color2["Blue"]

//############################################################################
