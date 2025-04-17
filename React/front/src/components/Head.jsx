import { Navbar } from "react-bootstrap";

function Head({ user, type }) {
    return (
        <Navbar bg="dark" className="px-3" expand="lg">
            <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Text>
                    {user ? `Bienvenido, ${user}` : "No estás logueado"}
                </Navbar.Text>
                {type === "admin" && (
                    <Navbar.Text className="ml-auto">
                        Eres un administrador
                    </Navbar.Text>
                )} 
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Head;