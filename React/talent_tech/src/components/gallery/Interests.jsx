// ==========================================
//
// This component displays a list of interests as buttons.
//
// File: Interests.jsx
// Author: Anthony Bañon
// Created: 2025-05-17
// Last Updated: 2025-05-17
// ==========================================

import "./interests.css";
import "../button/button.css";
import { useState } from "react";

function Interests({ topics }) {
  /*
   * This function renders a list of interests as buttons.
   *
   * @param {Array} topics - The list of interest topics.
   * @returns {JSX.Element} The rendered list of buttons.
   */

  //let color = "blue";  error 1
  const [color, setColor] = useState("blue");

  function changeColor() {
    /*
     * This function changes the color of the button when clicked.
     *
     * @param {Event} event - The click event.
     * @returns {void}
     */

    console.log("Button clicked!");
    if (color === "blue") {
      //color = "green";  error 2
      setColor("green");
    } else {
      //color = "blue";  error 3
      setColor("blue");
    }
    alert("Button clicked!");
    console.log("Button clicked!", color);
  }
  const style = { backgroundColor: color };
  return (
    <div>
      <h2>Interests</h2>

      <div className="myInterests">
        {topics.map((topic) => (
          /*
           * This function renders a button for each interest topic.
           * Do not use index as a key, because it is a unique value in each topic.
           *
           */

          <button
            className="myButton"
            key={topic}
            onClick={changeColor}
            style={style}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Interests;

/*
 * Note: The button color change is not rendered,
 * because the virtual DOM is not updated.
 * need to use useState to manage the color state.
 */
