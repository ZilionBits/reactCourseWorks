import { useState } from "react";

export const Counter = () => {
  // startCount = 5; 'Buvo nurodyta App.jsx'
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p data-testid="click-count">You clicked {count} times</p>
      <button data-testid="plus-one-button" onClick={addOne}>Add one click</button>
    </div>
  );
};
