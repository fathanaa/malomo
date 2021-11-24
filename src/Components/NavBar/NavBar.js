import * as ReactBootStrap from 'react-bootstrap'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="NavBar">
            <ReactBootStrap.Navbar collapseOnSelect expand="sm" variant="light">
            <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#home">
                <a
                href="https://ibb.co/Kz1MyTQ">
                    <img
                        src="https://i.ibb.co/Kz1MyTQ/logo.png"
                        alt="Malomo logo"
                        border="0"
                        width="64"
                        height="64" />
                </a>

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
        </div>
        
    )
}

export default NavBar

