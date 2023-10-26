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

// export const addToCart = (userId, productId, quantity) => {
//   // Write your code here
//   const checkIndex = cartItems.findIndex(i => i.userId == userId && i.productId == productId);
//   if(checkIndex >= 0) {
//     cartItems[checkIndex] = {userId, productId, quantity};
//     return cartItems[checkIndex];
//   } else {
//     const newItem = new cartModel(userId, productId, quantity);
//     cartItems.push(newItem);
//     return newItem;
//   }
// };

export const addToCart = (userId, productId, quantity) => {
  let newCartItem = new cartModel(userId, productId, quantity);
  let newItemFlag = true;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].userId == userId && cartItems[i].productId == productId) {
      cartItems[i].quantity += Number(quantity);
      newItemFlag = false;
    }
  }
  if (newItemFlag) {
    cartItems.push(newCartItem);
  }
  return { success: true, item: cartItems };
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  // const itemIndex = cartItems.findIndex(i => i.userId == userId && i.id == cartItemId);
  // if(itemIndex === -1) {
  //   return false;
  // } else {
  //   cartItems.splice(itemIndex, 1);
  //   return true;
  // }

  let cartItemInd = cartItems.findIndex((item) => {
    return item.id == cartItemId && item.userId == userId;
  });
  if (cartItemInd >= 0) {
    let itemToDelete = cartItems[cartItemInd];
    cartItems.splice(cartItemInd, 1);
    return { success: true, deletedCartItem: itemToDelete };
  } else {
    return {
      success: false,
      msg: "operation not allowed",
    };
  }
};
