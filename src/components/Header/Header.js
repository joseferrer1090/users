import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarHeader,
  Nav,
  NavDropdown,
  NavItem,
  NavbarCollapse,
  NavbarToggle,
  MenuItem
} from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar navbar-default navbar-fixed-top"
        collapseOnSelect
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">User test </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              eventKey={1}
              href="http://tuapplicacion.co/"
              target={"_blank"}
            >
              test para ingreso tuapplicacion.co
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem
              eventKey={1}
              href="https://github.com/joseferrer1090"
              target={"_blank"}
            >
              Jose Carlos Ferrer Bermudez
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
