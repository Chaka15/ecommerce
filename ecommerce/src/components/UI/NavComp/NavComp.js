import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavComp = (props) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">RecipeFinder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
        </Nav>
        <Form inline style={props.style}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={props.onChange}
          />
          <Button variant="outline-success" onClick={props.onClick}>
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComp;
