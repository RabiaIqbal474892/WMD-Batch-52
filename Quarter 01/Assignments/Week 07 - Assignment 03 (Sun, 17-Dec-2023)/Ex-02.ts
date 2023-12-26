/*
Exercise 02:
Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation.
*/

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

class ShoppingCart {
  private cart: CartItem[] = [];

  // Function to add an item to the cart
  addItem(name: string, price: number, quantity: number): void {
    const newItem: CartItem = { name, price, quantity };
    this.cart.push(newItem);
    this.printCart();
  }

  // Function to remove an item from the cart by name
  removeItem(name: string): void {
    const index = this.findIndexByName(name);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.printCart();
    } else {
      console.log(`Item '${name}' not found in the cart.`);
    }
  }

  // Function to update the quantity of an item in the cart
  updateQuantity(name: string, newQuantity: number): void {
    const index = this.findIndexByName(name);
    if (index !== -1) {
      this.cart[index].quantity = newQuantity;
      this.printCart();
    } else {
      console.log(`Item '${name}' not found in the cart.`);
    }
  }

  // Helper function to find the index of an item by name
  private findIndexByName(name: string): number {
    return this.cart.findIndex((item) => item.name === name);
  }

  // Function to print the contents of the cart
  private printCart(): void {
    console.log("Cart Contents:");
    this.cart.forEach((item) => {
      console.log(
        `${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`
      );
    });
    console.log("---------------");
  }
}

// Example usage:
const shoppingCart = new ShoppingCart();

// Adding items to the cart
shoppingCart.addItem("Product A", 10, 2);
shoppingCart.addItem("Product B", 20, 1);

// Updating quantity of an item in the cart
shoppingCart.updateQuantity("Product A", 3);

// Removing an item from the cart
shoppingCart.removeItem("Product B");
