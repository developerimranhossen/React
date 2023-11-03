import "./Cart.css";

function Cart({ cart }) {
//   console.log(cart);
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0
for(const product of cart) {
  if(product.quantity === 0) {
    product.quantity = 1
  }
  // product.quantity = product.quantity || 1; // উপরের if-এর shortcut এটা

    totalPrice = totalPrice + product.price * product.quantity
    totalShipping = totalShipping + product.shipping
    quantity = quantity + product.quantity
}
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: {totalShipping}</p>
      <p>Tax:</p>
      <h6>Grand Total: </h6>
    </div>
  );
}

export default Cart;
