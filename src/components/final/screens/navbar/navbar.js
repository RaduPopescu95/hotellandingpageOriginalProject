import React, { Component } from 'react'
import { Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'

import { Link } from 'react-router-dom'
import './navbar.css'


export default class navbar extends Component {
   
render(){

 return (
   
  <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand className="titlu" href="#home">Hill Valley</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="mx-4 linkuri" to="/" >Pensiune</Link>
      <Link className="mx-4 linkuri" to="/camere" >Camere</Link>
      <Link className="mx-4 linkuri" to="/galerie" >Galerie</Link>
      <Link className="mx-4 linkuri" to="/" href="#pricing">Pricing</Link>
      <Link className="mx-4 linkuri" to="/book" href="#pricing">Booking</Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 )
}
}

