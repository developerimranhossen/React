import { useEffect, useState } from "react";
import { addToDb, removeFromDb } from "./js-file/fakedb";

function JsonLoader() {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => SetUsers(data));
  }, []);
  const evenHandler = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id)
  }
  
  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>
          {user.name}
          <button onClick={() => evenHandler(user.id)}>Add Id</button>
          <button onClick={() => removeFromCart(user.id)}>Remove Id</button>

        </h1>
      ))}
    </div>
  );
}

export default JsonLoader;
