import {Nav as BoosttrapNav, Navbar, Container} from 'react-bootstrap';

function Nab({items, onSeleccion})
{
    
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <BoosttrapNav className="me-auto" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    {items.map((item, index) => (
                        <BoosttrapNav.Link key={index} onClick={() => onSeleccion(item)}>
                            {item}
                        </BoosttrapNav.Link>  // Add more items here if needed 
                    ))}
                </BoosttrapNav>
            </Container>
        </Navbar>
    );
}

export default Nab;