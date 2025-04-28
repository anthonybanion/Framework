// ==========================================
// 
// Description: This is a Input component that is used to render an input field.
//
// File: Input.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================

const Input = ({ type, placeholder, extraClasses = "" }) => (
    /*
     * Input component
     *
     * @param {string} type - The type of the input field
     * @param {string} placeholder - The placeholder text for the input field
     * @returns {JSX.Element} The rendered input element
     */
    
    <input
      type={type}
      placeholder={placeholder}
      className={`form-control ${extraClasses}`}
    />
  )
  
  export default Input
  