//############################################################################

// Help Desk Session 09 - ()

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09b_function_optional_parameter

// optional_parameter - aik aesi parameter whose value are optional to pass
// In TypeScript, optional parameters in functions allow you to define parameters that may or may not be provided when the function is called. You can make a parameter optional by appending a question mark (?) to its name in the function declaration.

// in optional_parameter, there is union - (parameter) lastName: string | undefined

//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Rabiaa"); //ok
let result2 = buildName("Rabiaa", "Iqbal", "Sr."); //error, too many parameters
var result3 = buildName("Rabiaa", "Iqbal"); //also ok

//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};

//############################################################################

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hi, ${name}!`;
  }
}

console.log(greet("Rabiaa")); // Outputs: Hi, Rabiaa!
console.log(greet("Muhammad Iqbal", "Good morning")); // Outputs: Good morning, Muhammad Iqbal!

// TypeScript also allows you to use default parameter values to achieve a similar effect:

function greet2(name: string, greeting: string = "Hi"): string {
  return `${greeting}, ${name}!`;
}

console.log(greet2("Rabiaa")); // Outputs: Hi, Rabiaa!
console.log(greet2("Muhammad Iqbal", "Good morning")); // Outputs: Good morning, Muhammad Iqbal!

//############################################################################
