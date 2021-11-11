import React from 'react'
import { Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'
import './navbar.css'

function navbar() {
 return (
  <div>
   <Navbar className="myNav" fixed="top" expand="lg" >
  <Container>
    <Navbar.Brand className="titlu text-white"  href="#home">Hill-Valey</Navbar.Brand>
    <Navbar.Toggle className="collaps" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="collaps" id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link className="text-white mx-5 linkuri" href="#home">Pensiune</Nav.Link>
        <Nav.Link className="text-white mx-5 linkuri" href="#link">Camere</Nav.Link>
        <Nav.Link className="text-white mx-5 linkuri" href="#home">Galerie</Nav.Link>
        <Nav.Link className="text-white mx-5 linkuri" href="#link">Facilitati</Nav.Link>
        <Nav.Link className="text-white mx-5 linkuri" href="#home">Contact</Nav.Link>
      
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
 )
}

export default navbar
