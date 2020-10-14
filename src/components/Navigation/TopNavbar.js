import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FaEnvelope} from 'react-icons/fa'


import './TopNavbar.css';


const TopNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#section__projects">Projects</Nav.Link>
        <Nav.Link href="#section__skills">Skills</Nav.Link>
        <Nav.Link href="mailto:john.nicholson812@gmail.com"><FaEnvelope /></Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>
  );
}

export default TopNavbar;
