// ==========================================
// 
// Description: This is a Button component that can be used in a React application.
//
// File: ButtonRB.jsx
// Author: Anthony Bañon
// Created: 2025-04-27
// Last Updated: 2025-04-27
// ==========================================


import { Button } from 'react-bootstrap';

const ButtonRB = ({ color, text }) => 

    /*
     * ButtonRB component
     *
     * @param {string} color The color variant of the button
     * @param {string} text The text to display on the button
     * @returns {JSX.Element} The rendered button component
     */
    <Button variant={color}>
        {text}
    </Button>

export default ButtonRB;