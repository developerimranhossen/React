import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import Father from "./Father/Father";
import "./Grandpa.css";

function Grandpa() {
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <section className="flex">
        <Father ring={ring} />
        <Uncle />
        <Aunty />
      </section>
    </div>
  );
}

export default Grandpa;
