import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const SignedInLinks = () => {
  return (
    <Nav className="right">
      <Nav.Item>
        <Nav.Link href="/chat" eventKey="/chat">
          Message
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/chat" eventKey="/chat">
          Class
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/chat" eventKey="/chat">
          School
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/search" eventKey="/search">
          Search
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Profile" id="basic-nav-dropdown">
        <NavDropdown.Item href="/status">Status</NavDropdown.Item>,
        <NavDropdown.Item href="/account">Account</NavDropdown.Item>,
        <NavDropdown.Divider />
        <NavDropdown.Item href="/unsubscribe">Unsubscribe</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="/chat" className="sho">
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SignedInLinks;
