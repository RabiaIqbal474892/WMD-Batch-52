/*
Q # 45
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function createCar(
  manufacturer: string,
  model: string,
  ...properties: [string, any][]
): any {
  const car: any = {
    manufacturer,
    model,
  };

  for (const [key, value] of properties) {
    car[key] = value;
  }

  return car;
}

// Example usage:
const myCar = createCar(
  "Toyota",
  "Corolla",
  ["color", "red"],
  ["optional Feature", "sunroof"],
  ["speed", "280 KM/hour"]
);

console.log(myCar);

// Another Method

type CarInfo = {
  manufacturer: string;
  model: string;
  [key: string]: string | number | boolean; // Allow any additional key-value pairs
};

function storeCarInfo(manufacturer: string, model: string, ...options: [string, string | number | boolean][]): CarInfo {
  const car: CarInfo = {
    manufacturer,
    model,
  };

  // Process additional options
  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}

// Example usage of the storeCarInfo function
const carInfo = storeCarInfo("Toyota", "Camry", "color", "Blue", "year", 2022, "hasSunroof", true);

// Print the object to make sure all the information was stored correctly
console.log(carInfo);
