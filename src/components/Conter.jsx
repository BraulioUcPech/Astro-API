import { useState } from "preact/hooks";

export function Conter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <span class="text-yellow-200 text-xl mr-4">{count}</span>
      <button class="border px-4 py-2 tex-xl text-white" onClick={() => setCount(count => count +  1)}>+</button>
      <button class="border px-4 py-2 tex-xl text-white" onClick={() => setCount(count => count - 1)}>-</button>
    </div>
  );
}