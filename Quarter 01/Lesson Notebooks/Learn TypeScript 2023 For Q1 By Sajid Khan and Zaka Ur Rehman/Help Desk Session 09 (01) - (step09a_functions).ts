//############################################################################

// Help Desk Session 09 - (step09a_functions, Callback function, step09b_function_optional_parameter, step09c_function_default_parameter, step09d_function_rest_parameter, step09e_async, callbacks, promises)

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09a_functions

//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
  return x + y;
}

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
  return x + y;
};

let a: string = "string"; // explicit type

type func = (x: number, y: number) => number;

let myAdd5: func = function (x: number, y: number): number {
  return x + y;
};

let myAdd6: (x1: number, y1: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

myAdd3(2, 3);

// let myAdd8: (baseValue: number, increment: number) => number = function ( // error because of (baseValue: number, increment: number) => number
//  x: number,
//  y: number
//): string {
// return type string
//  return "hi"; // return type string
//};

//Lambda functions () =>
let myAdd4 = (a: number, b: number) => a + b; // here a + b is return
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

let myAdd7 = (a: number, b: number) => {
  let c = 10;
  console.log(c);
  return a + b + c;
};

// Callback function, when there is function in the parameter, it is called callback function
type GreetFunction = (a: string) => void; // fn: GreetFunction , function in parameter
function greeter(fn: GreetFunction) {
  //....
}

greeter(() => console.log(""));

type GreetFunction2 = (a: string) => number; // fn: GreetFunction , function in parameter
function greeter2(fn: GreetFunction2) {
  //....
}

// greeter2(() => console.log("")); // error, because return type number (type GreetFunction2 = (a: string) => number;)
