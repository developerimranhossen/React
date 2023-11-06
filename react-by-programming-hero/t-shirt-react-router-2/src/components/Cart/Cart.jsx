function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>order summery: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => removeFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
}

export default Cart;
