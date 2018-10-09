var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item, price) {
 // write your code here
 var price = Math.floor(Math.random()*100)+ 1;
 var itemObject = {};
 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`)
return cart
}
