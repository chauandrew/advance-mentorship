import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import Logo from '../../../assets/amp-logo-header.png'


const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" height="60" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/campuses">CAMPUSES</Nav.Link>
          <Nav.Link href="/mentors">COLLEGE MENTORS</Nav.Link>
          <Nav.Link href="/advisors">ADVISORS</Nav.Link>
          <Nav.Link href="/program">PROGRAM</Nav.Link>
          <Button href="/apply">APPLY NOW</Button>
        </Nav>
      </Navbar>
    )
}

export default Header;