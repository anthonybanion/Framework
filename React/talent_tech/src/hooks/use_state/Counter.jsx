// ==========================================
//
// Counter component that uses the useState hook to manage its state.
//
// File: Counter.jsx
// Author: Anthony Bañon
// Created: 2025-05-18
// Last Updated: 2025-05-18
// ==========================================

import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Counter Value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}
export default Counter;
