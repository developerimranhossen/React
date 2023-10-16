import Component2 from "./Component2";
import { useState } from "react";

function Component1() {
  const [user, setUser] = useState({ id: 1, name: "imran" });
  return <Component2 user={user} />;
}

export default Component1;
