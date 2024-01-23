//############################################################################

// step07b_const_enum

const enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;

const enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color[2]; //Not allowed with const enums
console.log(colorName);

const enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

//############################################################################

// step08_arrays

let array7: any[] = [5, 6, 7]; // any typescript ko javascript bna skta hai
let array1: number[] = [5, 6, 7]; //correct syntax
console.log(array1[1]); //correct syntax
let array2: Array<number> = [1, 2, 3]; //alternative correct syntax, <> angle brackets are used in generics form
let array3: number[] = []; //correct syntax to define an empty array

let array4: number[] = new number[2](); //error
let array6 = new Array();

let array5: number[] = [];
array5.push(1234); //dynamically adding
