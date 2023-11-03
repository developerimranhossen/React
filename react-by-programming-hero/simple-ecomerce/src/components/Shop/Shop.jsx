import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../fakeData/fakedb";

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = []
    // console.log(storedCart);
    // step 1: get id
    for (const id in storedCart) {
      // console.log(id);

      // step 2: get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);

      // step 3: get quantity of the product
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);

        // step 4: add the addedprodut to the saved cart
        savedCart.push(addedProduct)
      }
    }
    // step 5: set the cart
    setCart(savedCart)
  }, [products]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToDb(product.id);
  };
  console.log(cart);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
