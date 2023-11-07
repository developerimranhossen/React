import Cousin from "../Grandpa/Brother/Cousin/Cousin";

function Uncle() {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin>Nabil</Cousin>
        <Cousin>Nabila</Cousin>
      </section>
    </div>
  );
}

export default Uncle;
