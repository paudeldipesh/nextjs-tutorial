"use client";
import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl mb-4 font-bold">{count}</h1>
      <button
        onClick={() => setCount((cur) => cur + 1)}
        className="btn btn-primary capitalize"
      >
        increase
      </button>
    </div>
  );
}
