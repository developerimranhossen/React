import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import Father from "./Father/Father";
import "./Grandpa.css";

// step 1: create context
export const RingContext = createContext();
export const MoneyContext = createContext();

function Grandpa() {
  const [money, setMoney] = useState(0);
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <small>Grandpa money: {money}</small>
      <section className="flex">
        {/* step 2: create provider and pass value */}
        <MoneyContext.Provider value={[money, setMoney]}>
          <RingContext.Provider value={"golden ring"}>
            <Father ring={ring} />
            <Uncle />
            <Aunty />
          </RingContext.Provider>
        </MoneyContext.Provider>
      </section>
    </div>
  );
}

export default Grandpa;

// context api-
// 1. create context
// 2. create a provider and pass a value
// 3. use useContext to receive the value
