import { useState } from "react";

export default function CounterWithOwnState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Counter: {count}</button>;
}
