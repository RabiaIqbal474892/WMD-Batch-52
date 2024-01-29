/*
Q # 15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
var guestList = [
    "Muhammad Imran",
    "Muhammad Esa",
    "Muhammad Yousuf",
    "Muhammad Ismail",
    "Ayesha",
    "Muhammad Ibrahim",
    "Zainab",
];
// Step 1: Print the name of person who can't make it.
var guestsWhoCantMakeIt = ["Ayesha", "Zainab"];
guestsWhoCantMakeIt.forEach(function (guestNotComing) {
    console.log("".concat(guestNotComing, " can't make it to Dinner"));
});
// Step 2: Replace the name of guest who cant make it.
var newGuests = ["Muhammad Hasan", "Fatima"];
guestsWhoCantMakeIt.forEach(function (guestWhoCantMakeIt, index) {
    var indexOfGuestsWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
    // console.log(indexOfGuestsWhoCantMakeIt)
    if (indexOfGuestsWhoCantMakeIt !== -1) {
        guestList[indexOfGuestsWhoCantMakeIt] = newGuests[index];
    }
});
// console.log(guestList[2]);
// Step 3: Print a second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner"));
});
