import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavComp.css";

const NavComp = (props) => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">CookIT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            to="/"
            className={styles.NavLink}
            activeClassName={styles.active}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={styles.NavLink}
            activeClassName={styles.active}
          >
            Favorites
          </NavLink>
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
