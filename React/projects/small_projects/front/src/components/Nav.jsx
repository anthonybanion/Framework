import {Nav as  Navbar, Container, BoosttrapNav} from 'react-bootstrap';

function Nav({items, onSeleccion})
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

export default Nav;