import * as ReactBootStrap from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return(
        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <ReactBootStrap.Container>
        <ReactBootStrap.Navbar.Brand href="#home">
            <img 
                alt="Malomo logo"
                src="https://design.jboss.org/arquillian/logo/ui/images/crown/arquillian_ui_crown_64px-glossy.png"
                width="64"
                height="64"
            />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link className="navAbout" href="#about">About</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#ourcliet">Our Client</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#rnd">Research & Inovation</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#gallery">Gallery</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contactus">Contact US</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar

