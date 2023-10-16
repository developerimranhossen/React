import Component2 from "./Component2";
import { useState } from "react";
import { myContext } from "./myContext";

function Component1() {
  const [user, setUser] = useState({ id: 1, name: "imran" });
  return (
    <myContext.Provider value={user}>
      <Component2 />
    </myContext.Provider>
  );
}

export default Component1;
