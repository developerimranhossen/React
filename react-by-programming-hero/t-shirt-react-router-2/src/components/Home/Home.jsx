import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Home() {
  const tshirts = useLoaderData();
  //   console.log(tshirts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    // console.log(tshirts);
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
        toast('you have already added this t-shirt')
        
    } else {
      setCart([...cart, tshirt]);
    }
  };

  const removeFromCart = (id) => {
    const remaining = cart.filter((cart) => cart._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
      {/* <Toaster/> */}
    </div>
  );
}

export default Home;
