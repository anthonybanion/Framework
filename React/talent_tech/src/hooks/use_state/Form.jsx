// ==========================================
//
// Form component that uses the useState hook
// to manage the name input.
//
// File: Form.jsx
// Author: Anthony Bañon
// Created: 2025-05-18
// Last Updated: 2025-05-18
// ==========================================

import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  function handleShipping(event) {
    /*
     * Handle form submission.
     *
     * @param {Event} event - The submit event.
     * @returns {void}
     */

    event.preventDefault();
    alert(`Form sent by: ${name}`);
  }

  return (
    <form onSubmit={handleShipping}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update name state
        placeholder="Enter your name"
      />
      <p>Hello {name}</p>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
