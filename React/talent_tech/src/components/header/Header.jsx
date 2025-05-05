// ==========================================
// 
// Description: This is a simple React component that displays a header.
//
// File: Header.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================


import "./header.css";

function Header() {
    /*
     * This function renders the header of the application.
     *
     * @returns {JSX.Element} Rendered header element
     */
    
  return (
    <header>
      <h1 className="myHeader">Bienvenidos a mi App React</h1>
    </header>
  );
}
export default Header;
