// array
function sum(n1: number, n2: number) {
  console.log(n1 + n2);
  return;
}
sum(3, 4);

const sum2 = (n1: number, n2: number) => {
  console.log(n1 + 2);
};
sum2(3, 4);

let fruit1 = "fruit1";
let fruit2 = "fruit2";
let fruit3 = "fruit3";
let fruit4 = "fruit4";
let fruit5 = "fruit5";

// array declare square bracket []
// values separate, e.g., value1, value2, value3

let fruitsArray = ["fruit1", "fruit2", "fruit3", "fruit4"];
let numberArray = [1, 2, 3, 4, 5, 6];

console.log(fruitsArray);

console.log("fruit1", fruitsArray[0]); // fruit1
console.log("fruit3", fruitsArray[2]); // fruit3

console.log(numberArray[2]); // 3

// Arrays: Adding and removing elements

// pop
console.log("Pop Method");
const removeFruit = fruitsArray.pop();
console.log(removeFruit);
console.log("Array length", fruitsArray.length);

// push
console.log("Push Method");
const arrayLength = fruitsArray.push("Fruits");
console.log(arrayLength);
console.log(fruitsArray);

// index based value
let pet = [];

pet[0] = "horse";
pet[1] = "cat";
pet[2] = "fish";

console.log(pet);

// Array: Removing, inserting and extracting elements

// shift
fruitsArray.shift();
console.log(fruitsArray);

fruitsArray.unshift("1st index value");
console.log(fruitsArray);

// Splicing and slicing arrays

// splice
// add new values
fruitsArray.splice(2, 0, "Lemon", "Banana");
console.log(fruitsArray);
// delete value
fruitsArray.splice(2);
fruitsArray.splice(2, 1);
fruitsArray.splice(2, 2);
console.log(fruitsArray);

// for loop
console.log("Loop section");
for (let i = 0; i < 5; i++) {
  console.log("Hi i am for panaverse");
}

// i = 0   // true , i++
// i = 1   // true , i++
// i = 2   // true , i++
// i = 3   // true , i++
// i = 4   // true , i++
// i = 5   // false , break

for (let i = 0; i < 5; i++) {
  console.log("Hi i am for panaverse", i);
}

const cleanestCities = ["Karachi", "Lahore", "", "Peshawar"];

let matchFound = false;

for (let x = 0; x <= 4; x++) {
  if ("Islamabad" === cleanestCities[x]) {
    console.log("It's one of the cleanest cities");
    break;
  } else {
    console.log("No cleanest city found form problem");
  }
}

for (let i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
    matchFound = true;
    break;
  }
}

if (matchFound === false) {
  console.log("No cleanest city found");
}

const data = [12, 34, 56, 78, 90, 8, 0, 1, 2, 3, 45, 6, 6, , 7];
for (let i = 0; i < data.length; i++) {
  console.log("This is Usman", data[i]);
}
