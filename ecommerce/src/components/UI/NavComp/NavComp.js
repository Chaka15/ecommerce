import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavComp.css";
import { useSelector } from "react-redux";

const NavComp = React.forwardRef((props, ref) => {
  const favorites = useSelector((state) => state.favorites.favRecipes);
  const isAuth = useSelector((state) => state.auth.token !== null);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand>CookIT</Navbar.Brand>
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
            Favorites(
            <span className={favorites.length === 10 ? styles.red : null}>
              {favorites.length}
            </span>
            )
          </NavLink>
          {isAuth ? (
            <NavLink
              to="/logout"
              className={styles.NavLinkLogout}
              activeClassName={styles.active}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/auth"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              Authenticate
            </NavLink>
          )}
          {isAuth ? (
            <NavLink
              to="/saved"
              className={styles.NavLink}
              activeClassName={styles.active}
            >
              Saved
            </NavLink>
          ) : null}
        </Nav>
        <Form inline style={props.style} onSubmit={props.onSubmit}>
          <FormControl
            type="text"
            placeholder="Your ingredients"
            className="mr-sm-2"
            onChange={props.onChange}
            ref={ref}
          />
          <Button
            variant="outline-success"
            type="submit"
            disabled={props.disabled}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default NavComp;
