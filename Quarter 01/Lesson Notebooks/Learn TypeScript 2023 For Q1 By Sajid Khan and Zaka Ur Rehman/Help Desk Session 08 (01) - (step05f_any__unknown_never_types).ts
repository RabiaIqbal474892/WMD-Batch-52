//############################################################################

// Help Desk Session 08 - (Calculator, step05f_any__unknown_never_types, step06_explict_casting, step07a_enum, step07b_const_enum, step08_arrays)

//   (https://www.youtube.com/watch?v=W5b9OUM9Izg)

//############################################################################

// step05f_any__unknown_never_types

// Any

let myval: any; // (any - a datatype, but it is not preferred because features of typescript are not used properly)
// Type Safety: TypeScript is designed to provide static typing, which helps catch errors at compile-time rather than runtime. When you use any, you lose the benefits of static typing, as the compiler will not be able to check or enforce the type of the variable. This can lead to runtime errors that could have been caught earlier.

let myname: string;
myname = "str";

myval = true; // OK (because of any, it store boolean, num, string, array, object, null, undefined, function)
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => {
  console.log("Hey again!");
}; // OK

//Unknown

let value: unknown; // (unknown - a datatype)

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => {
  console.log("Hey again!");
}; // OK

// Assigning a value of type unknown to variables of other types

//#################################################################
// difference between any and unknown
// unknown is used when we do not know the data type either it is string or number or anything else, then we use unknown data type
// we use unknown, when we do not make typescript functional
// using any data type is bad practice
// using unknown data type is good practice
//#################################################################

// let val: unknown; (acceptable only for unknown and any)
let val: any; // (acceptable for all data types)

const val1: unknown = val; // OK (unknown datatype variable can be stored in unknown datatype variable)
const val2: any = val; // OK (unknown datatype variable can be stored in any datatype variable)
const val3: boolean = val; // Will throw error
const val4: number = val; // Will throw error
const val5: string = val; // Will throw error
const val6: Record<string, any> = val; // Will throw error
const val7: any[] = val; // Will throw error
const val8: (...args: any[]) => void = val; // Will throw error

//#################################################################

// Never

// never is used with functions mostly, when we want the function to throw error
// then the function will not return, and by default, it is void

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
