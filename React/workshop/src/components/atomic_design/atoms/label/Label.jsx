// ==========================================
// 
// Description: This is a Label component
//
// File: Label.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================



const Label = ({ text, htmlFor, extraClasses = "" }) => 
    /*
     * Label component
     *
     * @param {string} text - The text content of the label
     * @param {string} htmlFor - The id of the input element the label is associated with
     * @param {string} extraClasses - Additional classes for styling
     * @returns {JSX.Element} The rendered label element
     */
    
    <label 
      htmlFor={htmlFor} 
      className={`label ${extraClasses}`}
    >
      {text}
    </label>
  
  
  export default Label
  
