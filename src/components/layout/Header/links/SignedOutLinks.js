import React from "react";
import { Nav } from "react-bootstrap";

const SignedOutLinks = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/login" eventKey="/login">
          Signin
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup" eventKey="/signup">
          Signup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" eventKey="/about">
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SignedOutLinks;
