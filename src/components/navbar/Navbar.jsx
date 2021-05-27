import React from "react";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";

const NavBar = () => {
  return (
    <Navbar fixed='top' id="navbar" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        HR <span id="navbar-sub-brand">Human Resources</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
        </Nav>
        <DropdownButton drop="left" title=''>
          <Dropdown.Header id="dropdown-header">
            <Row>
              <FontAwesomeIcon icon={faUserCircle} />
            </Row>
            <Row>Username</Row>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
