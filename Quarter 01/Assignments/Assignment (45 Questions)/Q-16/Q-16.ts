/*
Q # 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list.
*/

let guestList: Array<string> = ["Imran", "Ayesha", "Zainab"];

// Exercise 16 Solution

// Step 1: Informing people that you found a bigger dinner table.
for (let guest of guestList) {
  console.log(`Hi ${guest}, we found a bigger dinner table.`);
}

// Step 2: Add a new guest to the beginning of array.
let newGuestAtBeginning: string = "Khadija";
guestList.unshift(newGuestAtBeginning);

// console.log(guestList);

// Step 3: Add one guest to the middle of array
let newGuestInMiddle: string = "Maryam";

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, newGuestInMiddle);

// console.log(guestList);

// Step 4: Use append() to add new guest to the end of your list.

let newGuestAtEnd: string = "Muhammad Ahmad";

guestList.push(newGuestAtEnd);

// console.log(guestList);

// Final Step: Print a new set of invitation messages

console.log("New set of invitation messages:");

for (let guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}
