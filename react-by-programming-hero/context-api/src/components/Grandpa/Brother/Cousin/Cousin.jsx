import { Children } from "react";

function Cousin({ children }) {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>
      </p>
    </div>
  );
}

export default Cousin;
