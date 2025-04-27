/*
  Description: This component renders a Bootstrap navbar with navigation links. 
  
  FileName: navbarBootstrap.jsx
  Author: Anthony Bañon
  Created: 2025-20-05
  Last update: 2025-20-05
*/

import {Nav as BoosttrapNav, Navbar, Container } from 'react-bootstrap';

function NavbarBooststrap({items, onSeleccion})
  /*
    This function renders a Bootstrap navbar with navigation links.

    Args:
        items: An array of strings representing the navigation links.
        onSeleccion: A function to handle the selection of a navigation link.

    Returns:
        A Bootstrap navbar with navigation links.
  */

{
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <BoosttrapNav className="me-auto" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {items.map((item, index) => (
                        <BoosttrapNav.Link key={index} onClick={() => onSeleccion(item)}>
                            {item}
                        </BoosttrapNav.Link>  
                    ))}
                </BoosttrapNav>
            </Container>
        </Navbar>
    );
}

export default NavbarBooststrap;