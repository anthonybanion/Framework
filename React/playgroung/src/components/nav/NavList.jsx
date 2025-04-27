/*
  This component renders a navigation list.
  
  FileName: navList.jsx
  Author: Anthony Bañon
  Created: 2025-20-05
  Last update: 2025-20-05
*/
import React from 'react';

function NavList({items, onSeleccion})
  /*
    This function renders a navigation list.

    Args:
        items: An array of strings representing the navigation links.
        onSeleccion: A function to handle the selection of a navigation link.

    Returns:
        A navigation list with links.
  */
{
    
    return (
        <nav style={{ backgroundColor: "#333", color: "white", padding:
        "10px" }}>
            <ul style={{ listStyle: "none", display: "flex",
            justifyContent: "space-around", margin: 0 }}>
                <li><a href="#" style={{ color: "white",
                textDecoration: "none" }}>Home</a></li>
                <li><a href="#" style={{ color: "white",
                textDecoration: "none" }}>About</a></li>
                <li><a href="#" style={{ color: "white",
                textDecoration: "none" }}>Contacts</a></li>
                <li><a href="#" style={{ color: "white",
                textDecoration: "none" }}>Services</a></li>
            </ul> 
        </nav>
    ); 
}

export default NavList;