import React, { useState } from "react";
import { Navbar, Nav,Container} from 'react-bootstrap';
//compenent

const Navabar = (props) => {

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
        
        <Nav className="me-auto">
          <Nav.Link href={"/description/"+props.id}>description</Nav.Link>
          <Nav.Link href={"/update/"+props.id}>modifier</Nav.Link>
          <Nav.Link href={"/delete/"+props.id}>supprimer</Nav.Link>
        </Nav>
        <Navbar.Brand href='/'>deconnexion</Navbar.Brand>
        </Container>
      </Navbar>

    </>
  );
}
export default Navabar;

