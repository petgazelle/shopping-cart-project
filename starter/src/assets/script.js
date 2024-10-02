/* Array containing the products available for sale
   Each product is an object with these properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart, starts at 0 (number)
   - productId: unique id (number)
   - image: picture of product (url string) */
   const products = [
    {
    name: 'Carton of Cherries',
    price: 4,
    quantity: 0,
    productId: 101,
    image: './images/cherry.jpg'
    },
  
    {
    name: 'Carton of Strawberries',
    price: 5,
    quantity: 0,
    productId: 102,
    image: './images/strawberry.jpg'
    },
  
    {
    name: 'Bag of Oranges',
    price: 10,
    quantity: 0,
    productId: 103,
    image: './images/orange.jpg'
    }
  ];

// Empty array to hold products added to cart
const cart = [];

// Function that takes products array and productId as arguments and returns product
function getProductById(productList, productId) {
  return productList.find(product => product.productId === productId);
}

// Function that increases the product's quantity in cart
function increaseQuantity(productId) {
  const product = getProductById(products, productId);
  product.quantity += 1;
}

// Function that adds product to cart and increases product quantity
function addProductToCart(productId) {
  const product = getProductById(products, productId);
  increaseQuantity(productId);
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

// Function that sets product quantity to zero
function setItemQuantityToZero(productId) {
  const product = getProductById(products, productId);
  product.quantity = 0;
}

// Function that removes product from cart and sets item quantity to 0
function removeProductFromCart(productId) {
  setItemQuantityToZero(productId);
  const cartIndex = cart.indexOf(cartItem => cartItem.productId === productId);
  cart.splice(cartIndex, 1);
}

// Function that decreases the product's quantity in cart
// If quantity decreases to 0, the product is removed from the cart
function decreaseQuantity(productId) {
  const product = getProductById(products, productId);
  if (product.quantity > 1) {
    product.quantity -= 1;
  }
  else {
    removeProductFromCart(productId);
  }
}

// Function that empties all products from the cart
function emptyCart() {
  cart.forEach(cartItem => setItemQuantityToZero(cartItem.productId));
  cart.length = 0;
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
