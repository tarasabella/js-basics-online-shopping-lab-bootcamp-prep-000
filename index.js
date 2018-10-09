var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}
const item = [];
function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  var objItem = {`${item}: ${price}`};
  cart.push(objItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
