import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'


const Header = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Link1</Nav.Link>
          <Nav.Link href="#">Link2</Nav.Link>
          <Nav.Link href="#">Link3</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;