import "./App.css";
import { useState } from "react";
import CounterWithOwnState from "./counter_with_own_state";
import CounterWithParentState from "./counter_with_parent_state";

export default function App() {
  const user = {
    name: "Allan Tang",
    imageUrl: "https://avatars.githubusercontent.com/u/3772449?v=4",
    imageSize: 90,
  };

  const products = [
    { title: "Potatoes", isFirst: true, id: 1 },
    { title: "Pasta", isFirst: false, id: 2 },
    { title: "Pizza", isFirst: false, id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id} style={{ color: product.isFirst ? "blue" : "black" }}>
      {product.title}
    </li>
  ));

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="app">
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <div>
        <ul>{listItems}</ul>
      </div>

      <h2> Counters that update separately</h2>
      <CounterWithOwnState />
      <CounterWithOwnState />

      <h2> Counters that update together</h2>
      <CounterWithParentState count={count} onClick={handleClick} />
      <CounterWithParentState count={count} onClick={handleClick} />
    </div>
  );
}
