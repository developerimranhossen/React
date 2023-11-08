import "./Cart.css";
function Cart({ cart, removeFromCart }) {
  //way 1: for conditional rendering
  let message;
  if (cart.length === 0) {
    message = <p>Please Buy</p>;
  } else {
    message = <p>Thanks for Buy</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? `fontSize text green` : "yellow"}>
        order summery: {cart.length}
      </h2>
      {/* way 2: for conditional rendering */}
      {cart.length > 1 ? (
        <span>You buy more then 1 items</span>
      ) : (
        <span>You buy less then 1 items</span>
      )}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => removeFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {/* way 3: fro conditional rendering */}
      {cart.length === 2 && <p>You buy 2 items</p>}
      {cart.length === 2 || <p>You buy more then or less then 2 items</p>}
    </div>
  );
}

export default Cart;

// Conditional Rendering -
//  1. use if or if else to set a variable thal will contain an element, component
//  2. ternary operator- condition ? 'for true' : 'for false'
//  3. logical && (note- if the condition is true then th next thing will be displayed)
//  4. logical || (note- if the conditon is false then the next thing will be displayed)

// Conditional class=
// 1. use ternary operator
// 2. ternary inside template string- exaple: <p className={`class-name class-name ${cart.length === 3 ? 'red' : 'blue'}`}>Thanks</p>
