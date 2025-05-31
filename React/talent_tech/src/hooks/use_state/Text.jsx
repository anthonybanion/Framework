// ==========================================
//
// Text component and onMouseOver and onMouseOut events.
//
// File: Text.jsx
// Author: Anthony Bañon
// Created: 2025-05-19
// Last Updated: 2025-05-19
// ==========================================

import { useState } from "react";

function Text() {
  const [highlighted, setHighlighted] = useState(false);
  return (
    <div>
      <h2
        onMouseOver={() => setHighlighted(true)} // Mouse over event
        onMouseOut={() => setHighlighted(false)} // Mouse out event
        style={{
          color: highlighted ? "blue" : "black",
          fontSize: highlighted ? "2em" : "1em",
          transition: "all 0.3s ease", // Smooth transition
        }}
      >
        Talent Tech 2025!
      </h2>
    </div>
  );
}

export default Text;
