let cartQuantity = 0;

function updateCartQuantity(value) {
  if (cartQuantity + value > 10) {
    alert("The cart is full");
    return;
  }
  if (cartQuantity + value < 0) {
    alert("Not enough items in the cart");
    return;
  }
  cartQuantity += value;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
