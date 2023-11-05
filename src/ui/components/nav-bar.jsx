import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../../auth/index.js";

function NavBarExample() {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    console.log(user);
    const onlogout = () => {
        navigate('/login', {replace: true});
    }
    return (

        <>
            <Navbar expand="lg" className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/marvel"}>Marvel</Nav.Link>
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/dc"}>DC</Nav.Link>
                            <Nav.Link className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                      as={Link} to={"/search"}>Search</Nav.Link>
                        </Nav>
                        <Nav>
                            <span className="nav-item nav-link text-primary"> {user?.name}</span>
                            <Button className="nav-item nav-link btn" onClick={onlogout}>Cerrar sesión</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
        ;
}

export default NavBarExample;