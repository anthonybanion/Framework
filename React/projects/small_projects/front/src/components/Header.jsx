/*

This component renders the header for the application.

FileName: Header.jsx
Author: Anthony Bañon
Created: 2025-19-05
Last update: 2025-19-05
*/


import React from 'react';  
import { Navbar } from "react-bootstrap";
function Header({ user, type }) {
    /*
        The function Header renders the header of the application with a title and a navbar.

        Arg:
        user: The user logged in
        type: The type of user logged in

        Returns:
        A header with the name of the application and a navbar with the user logged in
    */
return (
    <>
 
        <Navbar bg="red" variant="dark" expand="lg" className="px-3">
            <Navbar.Brand href="#home">
                Mi Aplicación
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
                <Navbar.Text>
                    {user ? `Bienvenido, ${user} ` : "No estás logueado"}
                </Navbar.Text>
                {type === "admin" && (
                    <Navbar.Text className="ml-auto">
                        Eres un administrador
                    </Navbar.Text>
                )}
            </Navbar.Collapse>
        </Navbar>
  
    </>
);
}
export default Header;