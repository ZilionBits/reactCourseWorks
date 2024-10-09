import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const clickCounter = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickCounter}>Add 1</button>
    </div>
  );
};
