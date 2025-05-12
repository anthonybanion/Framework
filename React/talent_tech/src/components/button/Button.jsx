// ==========================================
// 
// Description: This is a simple React component that displays a button.
//
// File: Button.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================


import "./button.css";


function Button({ text, color }) {
    /*
     * This function renders a button with an text and color.
     *
     * @param {string} text - Text to display on the button
     * @param {string} color - Background color of the button
     * @returns {JSX.Element} Rendered button element
     */
    
    // Inline styles for the button
    const style = { backgroundColor: color};
    
    return <button type="button" className="myButton" style={style}>{text}</button>;
    }

export default Button;