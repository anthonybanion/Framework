// ==========================================
//
// Component that displays a functional button.
//
// File: FunctionalButton.jsx
// Author: Anthony Bañon
// Created: 2025-05-17
// Last Updated: 2025-05-17
// ==========================================

import "./button.css";

function FunctionalButton({ text, color, onClick }) {
  /*
   * This function renders a button with a text, color, and click event handler.
   *
   * @param {string} text - The text to display on the button.
   * @param {string} color - The background color of the button.
   * @param {function} onClick - The click event handler for the button.
   * @returns {JSX.Element} The rendered button element.
   */

  const style = { backgroundColor: color };
  // Inline styles for the button
  return (
    <button type="button" className="myButton" style={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default FunctionalButton;
