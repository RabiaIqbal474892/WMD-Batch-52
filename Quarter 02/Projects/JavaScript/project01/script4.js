// Comparison Operators

// Equal operator

let number11 = 18;
let number12 = 10;

number11 === number12    // false,     18 != 10




let number13 = 18;
let number14 = "18";

number13 === number14    // false,     18 != "18",  number and string
number13 !== number14    // true,      18 != "18",  number and string




let number15 = 18;
let number16 = 18;

number15 === number16    // true,     18 != "18",  number and number




// Less than and Greater than operator

let number17 = 10;
let number18 = 18;

number17 > number18    // false
number17 < number18    // true




// And operator

let number19 = 10;
let number20 = 18;
let number21 = 15;

number19 < number20 && number20 > number21    // true
number19 < number20 && number20 < number21    // false

number19 < number20 || number20 < number21    // true

!number21     // false




