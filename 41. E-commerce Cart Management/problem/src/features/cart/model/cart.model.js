// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const checkIndex = cartItems.findIndex(i => i.userId == userId && i.productId == productId);
  if(checkIndex >= 0) {
    cartItems[checkIndex] = {userId, productId, quantity};
    return cartItems[checkIndex];
  } else {
    const newItem = new cartModel(userId, productId, quantity);
    cartItems.push(newItem);
    return newItem;
  }
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const itemIndex = cartItems.findIndex(i => i.userId == userId && i.id == cartItemId);
  if(itemIndex === -1) {
    return false;
  } else {
    cartItems.splice(itemIndex, 1);
    return true;
  }
};
