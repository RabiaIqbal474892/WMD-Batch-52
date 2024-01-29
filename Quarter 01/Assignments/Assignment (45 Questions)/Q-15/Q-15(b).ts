/*
Q # 15(b)
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

- Replace two guests

• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guestList: Array<string> = [
  "Imran",
  "Esa",
  "Yousuf",
  "Ismail",
  "Ayesha",
  "Ibrahim",
  "Zainab",
];

// Step 1: Print the name of person who can't make it.

let guestsWhoCantMakeIt: string[] = ["Ayesha", "Zainab"];
guestsWhoCantMakeIt.forEach((guestNotComing: string) => {
  console.log(`${guestNotComing} can't make it to Dinner.`);
});

// Step 2: Replace the name of guest who cant make it.

let newGuests: string[] = ["Hasan", "Fatima"];

guestsWhoCantMakeIt.forEach((guestWhoCantMakeIt: string, index: number) => {
  let indexOfGuestsWhoCantMakeIt: number =
    guestList.indexOf(guestWhoCantMakeIt);
  // console.log(indexOfGuestsWhoCantMakeIt)
  if (indexOfGuestsWhoCantMakeIt !== -1) {
    guestList[indexOfGuestsWhoCantMakeIt] = newGuests[index];
  }
});

// console.log(guestList[2]);

// Step 3: Print a second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList.forEach((guest: string) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});
