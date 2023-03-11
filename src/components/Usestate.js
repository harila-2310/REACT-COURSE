import React, { useState } from "react";

export default function Usestate() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>You Clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
