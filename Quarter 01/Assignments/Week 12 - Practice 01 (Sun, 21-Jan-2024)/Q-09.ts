/*
Q # 09

// Objects

// 9. Person Object
// Create an object representing a person with properties for name, age, and address.
*/

// Define a Person object
interface Person {
  name: string;
  age: number;
  address: string;
}

const person1: Person = {
  name: "Rabiaa Iqbal",
  age: 30,
  address: "abc123, Lahore, Pakistan",
};

// Accessing properties
console.log(`Name: ${person1.name}`);
console.log(`Age: ${person1.age}`);
console.log(`Address: ${person1.address}`);
