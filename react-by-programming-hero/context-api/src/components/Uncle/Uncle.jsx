import { useContext } from "react";
import Cousin from "../Grandpa/Brother/Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

function Uncle() {
  const [money, setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Uncle</h2>
      <small>Granpa money: {money}</small>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
}

export default Uncle;
