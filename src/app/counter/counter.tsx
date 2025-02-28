"use client";

import { useCountStore } from "@/stores/counter";

export default function Counter() {
  const { count, increment, decrement } = useCountStore((store) => store);

  return (
    <div>
      <div>Counter: {count}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
