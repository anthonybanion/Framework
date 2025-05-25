// ==========================================
//
// Description: React component that displays a navigation bar.
//
// File: Navbar.jsx
// Author: Anthony Bañon
// Created: 2025-05-13
// Last Updated: 2025-05-13
// ==========================================

import "./navbar.css";

function Navbar() {
  /*
   * This function renders a navigation bar with three links.
   *
   * @returns {JSX.Element}
   */

  return (
    <nav className="myNavbar">
      <ul className="myUl">
        <li>
          <a href="#" className="myAnchor">
            Start
          </a>
        </li>
        <li>
          <a href="#" className="myAnchor">
            About
          </a>
        </li>
        <li>
          <a href="#" className="myAnchor">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
