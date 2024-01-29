/*
Q # 13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

let favoriteTransportation: Array<[transport: string, brand: string]> = [];

favoriteTransportation.push(["motorcycle", "Honda"]);
favoriteTransportation.push(["car", "Honda"]);
favoriteTransportation.push(["car", "Toyota"]);
favoriteTransportation.push(["bicycle", "Sohrab"]);

// console.log(favoriteTransportation);
// I would like to own a Honda motorcycle.

// using for each loop
// to print a series of statements

favoriteTransportation.forEach(([transport, brand]) => {
  console.log(`I would like to own a ${brand} ${transport}.`);
});

// #####################################################################################################

// Another Method

// Define an array of favorite transportation with brand
const favoriteTransportation2: { brand: string; transport: string }[] = [
  { brand: "Honda", transport: "motorcycle" },
  { brand: "Toyota", transport: "car" },
  { brand: "Schwinn", transport: "bicycle" },
  { brand: "Vespa", transport: "scooter" },
];

// Iterate through the array and print statements
favoriteTransportation2.forEach(({ brand, transport }) => {
  console.log(`I would like to own a ${brand} ${transport}.`);
});
