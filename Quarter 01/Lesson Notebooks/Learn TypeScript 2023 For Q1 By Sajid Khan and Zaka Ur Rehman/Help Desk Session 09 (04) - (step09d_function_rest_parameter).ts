//############################################################################

// Help Desk Session 09 - (step09a_functions, Callback function, step09b_function_optional_parameter, step09c_function_default_parameter, step09d_function_rest_parameter, step09e_async, callbacks, promises)

//   (https://www.youtube.com/watch?v=oacaX15qb-c&t=3s)

//############################################################################

// step09d_function_rest_parameter

// ...restOfName - rest parameter (it is also in the end)
// buildName("Abdul Rahman", "Umar", "Usman", "Iqbal");
// "Abdul Rahman" is in the first, other 3 in array ["Umar", "Usman", "Iqbal"] will be in the rest , ...restOfName: string[] and it is an array

function buildName(firstName: string, ...restOfName: string[]) {
  console.log(restOfName); // it will be having ["Umar", "Usman", "Iqbal"], an array
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Abdul Rahman", "Umar", "Usman", "Iqbal");
console.log(employeeName);

//############################################################################

function buildName2(firstName: string, ...restOfName: string[]) {
  console.log(restOfName); // it will be having ["Umar", "Usman", "Iqbal"], an array
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(".");
}

var employeeName2 = buildName2("Abdul Rahman", "Umar", "Usman", "Iqbal");
console.log(employeeName2);

//############################################################################

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string = function (
  firstName: string,
  ...restOfName: string[]
) {
  return firstName + " " + restOfName.join(" ");
};

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list

//############################################################################

//anonymous function type with Rest parameters
var buildNameFun2: (fname: string, ...rest: (number | string)[]) => string = // error
  function (firstName: string, ...restOfName: string[]) {
    // error, ...restOfName: (number | string)[]
    return firstName + " " + restOfName.join(" ");
  };

var buildNameFun2: (fname: string, ...rest: (number | string)[]) => string =
  function (firstName: string, ...restOfName: (number | string)[]) {
    return firstName + " " + restOfName.join(" ");
  };
