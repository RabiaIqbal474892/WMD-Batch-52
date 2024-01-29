/*
Q # 39
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/

// Arrow function

const city_country = (city: string, country: string): string => {
  return `${city}, ${country}`;
};

// Test the function with three city-country pairs

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));

// Another Method

function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Example usage of the cityCountry function
const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("Paris", "France");
const location3 = cityCountry("New York", "USA");

// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
