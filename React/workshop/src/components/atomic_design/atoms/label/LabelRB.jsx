// ==========================================
// 
// Description: This is a Label whit React-Bootstrap
//
// File: LabelRB.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================


import { Form } from 'react-bootstrap';

const LabelRB = ({ text, htmlFor, extraClasses = "" }) => 
      /*
     * Label component
     *
     * @param {string} text - The text content of the label
     * @param {string} htmlFor - The id of the input element the label is associated with
     * @param {string} extraClasses - Additional classes for styling
     * @returns {JSX.Element} The rendered label element
     */
    
  <Form.Label 
    htmlFor={htmlFor} 
    className={`label ${extraClasses}`}
  >
    {text}
  </Form.Label>

export default LabelRB;
