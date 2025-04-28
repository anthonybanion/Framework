// ==========================================
// 
// Description: This is a Button component that can be used in a React application.
//
// File: Button.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================


const Button= ({ color, text }) =>
    /*
     * Button component
     *
     * @param {string} color The color of the button
     * @param {string} text The text to display on the button
     * @returns {JSX.Element} The rendered button component
     */
    
    <button className={`btn btn-${color}`}>
            {text}
    </button>


export default Button;