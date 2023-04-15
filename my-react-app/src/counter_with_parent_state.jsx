export default function CounterWithParentState({ count, onClick }) {
  return <button onClick={onClick}> Counter: {count}</button>;
}
