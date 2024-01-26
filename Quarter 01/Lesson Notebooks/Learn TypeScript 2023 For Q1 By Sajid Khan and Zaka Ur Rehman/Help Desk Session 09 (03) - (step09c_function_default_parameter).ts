//############################################################################

// Help Desk Session 09 - (step09a_functions, Callback function, step09b_function_optional_parameter, step09c_function_default_parameter, step09d_function_rest_parameter, step09e_async, callbacks, promises)

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09c_function_default_parameter

//Named function with optional and default parameters
//(Note that the parameter type will be optional when used with default value)
function buildName(firstName: string, lastName = "Khan"): string {
  // function buildName(firstName: string, lastName?: string): string
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

function buildName2(firstName: string, lastName = "Khan"): string {
  // function buildName2(firstName: string, lastName?: string): string
  return firstName + " " + lastName;
}

let result4 = buildName2("Ahmad"); //works correctly because last parameter is optional

let result1 = buildName("Ahmad"); //works correctly because last parameter is optional
let result2 = buildName("Ahmad", "Rabiaa", "Sr."); //error, too many parameters
let result3 = buildName("Ahmad", "Rabiaa"); //correct

//anonymous function type with defult parameters
//(Note that the parameter type will be optional when used with defult value)
let buildName1: (firstName: string, lastName?: string) => string = function (
  // explicit type
  firstName: string,
  lastName = "Khan"
): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
};
