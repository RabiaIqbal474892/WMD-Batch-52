"use strict";
/*
Q # 21
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
const bouquet = {
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangement of spring flowers",
};
// define an array of objects
let bouquets = [];
// pushing multiple objects
bouquets.push(bouquet);
bouquets.push({
    name: "Summer bliss",
    price: 350,
    description: "beautiful arrangement of Summer flowers",
});
let bouquet3 = {
    name: "Red Hot",
    price: 350,
    description: "Beautiful arrangement of red roses",
};
bouquets.push(bouquet3);
// console.log(bouquets);
bouquets.push({
    name: "Freshness",
    price: 250,
    description: "A beautiful arrangement of white and yellow roses",
});
// console.log(bouquets);
// Function to display bouquets
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
    title: ${i.name}
    description: ${i.description}
    price: ${i.price}
    ______________\n`);
    }
}
displayBouquets(bouquets);
