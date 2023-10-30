// use localStorage to store cart data

const addToDb = (id) => {
  console.log(id);
  let shoppingCart = {};

  //get the shopping cart
  const storreCard = localStorage.getItem("shopping-cart");
  if (storreCard) {
    shoppingCart = JSON.parse(storreCard);
  }

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storreCard = localStorage.getItem("shopping-cart");
  if (storreCard) {
    const shoppingCart = JSON.parse(storreCard);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

export { addToDb, removeFromDb };
