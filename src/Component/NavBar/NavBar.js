import * as ReactBootStrap from 'react-bootstrap'

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
                className="d-inline-block align-top"
            />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="#features">About</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Our Client</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing">Research & Inovation</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#memes">Gallery</ReactBootStrap.Nav.Link>
            <ReactBootStrap.NavDropdown title="Product" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">PSA</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">MSG</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link href="#deets">Contact US</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar

