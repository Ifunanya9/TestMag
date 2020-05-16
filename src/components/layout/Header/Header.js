import React from "react";
import logo from "../../../img/starter.png";
import { Nav, Navbar } from "react-bootstrap";
import "./nav.css";
import SignedInLinks from "./links/SignedInLinks";
import SignedOutLinks from "./links/SignedOutLinks";

const Header = () => {
  return (
    <header className="long high">
      <div>
        <div bg="black">
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            fixed="top"
            className="grey darken-3"
          >
            <Navbar.Brand href="/">
              <img src={logo} alt="maghour" length="60px" width="60px" />
              MagHour
            </Navbar.Brand>
            <form id="search-container">
              <input className="text-white" type="text" placeholder="Search" />
            </form>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              bg="dark"
              variant="dark"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="right">
              <Nav
                className="justify-content-center right hi grey darken-3 short"
                activeKey="/home"
              >
                <SignedInLinks />
              </Nav>
              <Nav
                className="justify-content-center right hi grey darken-3 short"
                activeKey="/home"
              >
                <SignedOutLinks />
              </Nav>
            </Navbar.Collapse>
            {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
