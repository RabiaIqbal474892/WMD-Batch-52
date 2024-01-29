/*
Q # 08

// Objects

// 8. Display Book Details Method
// Add a method to the book object to display its details. You can use string formatting to present the information neatly.
*/

// Define a Book object
interface Book2 {
  title: string;
  author: string;
  displayDetails: () => void; // Method to display book details
}

const myBook2: Book2 = {
  title: "My first book",
  author: "Rabiaa Iqbal",
  // Method to display book details
  displayDetails: function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  },
};

// Display book details using the method
myBook2.displayDetails();
