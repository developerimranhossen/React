import { useContext } from "react";
import { myContext } from "./myContext";
function Component4() {
  const myUser = useContext(myContext);
  console.log(myUser);
  return (
    <>
      <h1>{myUser.id}</h1>
      <h1>{myUser.name}</h1>
    </>
  );
}

export default Component4;
