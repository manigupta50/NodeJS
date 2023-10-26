// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from '../../user/model/user.model.js';

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  // 1. Validate the user
  const user = getAllUsers().find(u => u.id == userId);
  if(!user) {
    return 'user Not Found';
  }

  // 2. Validate the product
  const product = products.find(i => i.id == productId);
  if(!product) {
    return 'product not found';
  }

  // 3. Validate the rating
  if(rating < 0 || rating > 5) {
    return 'rating should be b/w 0 and 5';
  }

  // 4. Check if there are any ratings and if not then add ratings array.
  if(!product.ratings) {
    product.ratings = [];
    product.ratings.push({
      userId,
      rating
    });
  } else {
    // 5. Check if user rating is already available
    const existingRatingIndex = product.ratings.findIndex(r => r.userId == userId);
    if(existingRatingIndex >= 0) {
      product.ratings[existingRatingIndex] = {
        userId,
        rating
      };
    } else {
      product.ratings.push({
        userId,
        rating
      });
    }
  }

};
