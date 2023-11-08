import { Children, useContext } from "react";
import { MoneyContext } from "../../Grandpa";

function Cousin({ children }) {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Cousin</h2>
      <small>Granpa money: {money}</small>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
}

export default Cousin;
