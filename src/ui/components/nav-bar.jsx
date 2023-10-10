import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from "react-router-dom";

function NavBarExample() {
    return (
        <>
            <Navbar expand="lg" className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/marvel"}>Marvel</Nav.Link>
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/dc"}>DC</Nav.Link>
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/login"}>login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default NavBarExample;