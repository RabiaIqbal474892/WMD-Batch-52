"use strict";
/*
Q # 37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: '${message}'`);
}
// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love TypeScript'
// Medium shirt with default message
makeShirt(); // Output: Size: Medium, Message: 'I love TypeScript'
// Custom shirt with a different message and size
makeShirt("Small", "Hi, TypeScipt!"); // Output: Size: Small, Message: 'Hi, TypeScipt!'
