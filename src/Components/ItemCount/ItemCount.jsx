import { useState } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import "./ItemCount.css";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const menos = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  const mas = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button key={count} onClick={menos}>-</button>
        <span>{count}</span>
      <button key={count >= 1} onClick={mas}>+</button>
      <div>
      <button>
        <CartWidget />
      </button>
      </div>
    </div>
  );
};

export default ItemCount;
