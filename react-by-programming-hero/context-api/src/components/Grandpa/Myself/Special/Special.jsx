import { useContext } from "react";
import { RingContext } from "../../Grandpa";

function Special({ring}) {
    const angti = useContext(RingContext)
  return (
    <div>
      <h2>Special</h2>
      <small>Ring: {ring}</small>
      <br/>
      <small>Angti: {angti}</small>
    </div>
  );
}

export default Special;
