import { useLoaderData } from "react-router-dom"
import Cart from "../components/Cart/Cart"


function Order() {
    const cart = useLoaderData();
    console.log(cart);
  return (
    <div className="shop-container">
        <div className="products-container">
            <h2>Order page: {cart.length}</h2>
        </div>
        <div className="cart-container">
            <Cart cart={cart}/>
        </div>
    </div>
  )
}

export default Order