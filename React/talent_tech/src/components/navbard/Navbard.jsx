// ==========================================
//
// Description: React component that displays a navigation bar.
//
// File: Navbard.jsx
// Author: Anthony Bañon
// Created: 2025-05-13
// Last Updated: 2025-05-13
// ==========================================

import "./navbard.css";

function Navbard() {
  /*
   * This function renders a navigation bar with three links.
   *
   * @returns {JSX.Element}
   */

  return (
    <nav className="myNavbard">
      <ul className="myUl">
        <li>
          <a href="#" className="myAnchor">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="myAnchor">
            Acerca de
          </a>
        </li>
        <li>
          <a href="#" className="myAnchor">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbard;
