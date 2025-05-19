// ==========================================
//
// Component that displays a project card.
//
// File: ProjectCard.jsx
// Author: Anthony Bañon
// Created: 2025-05-17
// Last Updated: 2025-05-17
// ==========================================

import FunctionalButton from "../button/FunctionalButton";
import "./projectCard.css";
import { useState } from "react";

function ProjectCard({ title, image, description, buttonText }) {
  /*
   * This function renders a project card with a title,
   * image, description, button and click counter.
   *
   * @param {string} title - The title of the project.
   * @param {string} image - The image URL for the project.
   * @param {string} description - The description of the project.
   * @param {string} buttonText - The text to display on the button.
   * @returns {JSX.Element} The rendered project card element.
   */

  const color = "#4CAF50"; // Example color, you can change it
  const [clicks, setClicks] = useState(0); // State to keep track of button clicks

  function click() {
    // Handle button click event
    console.log("exploring: " + title);
    console.log("Button clicked!", clicks + 1);
    setClicks(clicks + 1);
  }

  return (
    <div className="myProjectCard">
      <img className="myImage" src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <FunctionalButton text={buttonText} color={color} onClick={click} />
    </div>
  );
}

export default ProjectCard;
