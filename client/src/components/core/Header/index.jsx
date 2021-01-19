import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import Logo from '../../../assets/amp-logo-header.png'


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-theme-light" href="/campuses">CAMPUSES</Nav.Link>
          <Nav.Link className="text-theme-light" href="/mentors">MENTORS</Nav.Link>
          <Nav.Link className="text-theme-light" href="/advisors">ADVISORS</Nav.Link>
          <Nav.Link className="text-theme-light" href="/program">PROGRAM</Nav.Link>
          <Button href="/apply">APPLY NOW</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;