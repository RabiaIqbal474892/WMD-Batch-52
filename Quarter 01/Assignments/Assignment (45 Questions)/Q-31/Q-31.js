"use strict";
/*
Q # 31
No Users: Add an if test to Exercise 28 / Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Empty array case
const emptyUserNames = [];
// Non-empty array case
let userNames = [
    "admin",
    "Fatima Ali",
    "Muhammad Hamza",
    "Muhammad Ahmad",
    "Muhammad Haseeb",
];
// functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === "admin") {
            console.log("Hi admin, would you like to see a status report?");
        }
        else {
            console.log(`Hi ${userNames}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`);
greetUsers(userNames);
// to make array empty we just assigning an empty array to userNames
userNames = [];
console.log(`\n\n For empty username:\n`);
greetUsers(userNames);
