import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mt-5">
      <h2>Count: {count}</h2>

      <button
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default Counter;