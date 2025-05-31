// ==========================================
//
//  This file contains the BootstrapNav component
// which serves as the navigation bar for the application.
//
// File: BootstrapNav.jsx
// Author: Anthony Bañon
// Created: 2025-05-18
// Last Updated: 2025-05-18
// ==========================================

import { Nav, Navbar, Container } from "react-bootstrap";

function BootstrapNav({ items, onSelection }) {
  /*
   * This function renders a Bootstrap navigation bar.
   *
   * @param {Array} items - The list of navigation items.
   * @param {Function} onSelection - The callback function to handle item selection.
   * @returns {JSX.Element} The rendered navigation bar.
   */

  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map((item) => (
              <Nav.Link key={item.id} onClick={() => onSelection(item.label)}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNav;
