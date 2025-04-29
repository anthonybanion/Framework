// ==========================================
// 
// Description: This is a Input component whit React-Bootstrap
//
// File: InputRB.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================


import { Form } from 'react-bootstrap'

const InputRB = ({ type, placeholder, extraClasses = "" }) =>
    /*
     * InputRB component
     * 
     * @param {string} type - The type of the input field
     * @param {string} placeholder - The placeholder text for the input field
     * @returns {JSX.Element} The rendered input element
     */
    
    <Form.Control
      type={type}
      placeholder={placeholder}
      className={`form-control ${extraClasses}`}
    />
  
  
  export default InputRB
  