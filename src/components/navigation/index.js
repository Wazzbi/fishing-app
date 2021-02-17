import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../signOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../session";

import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {({ authUser }) => (authUser ? <NavigationAuth /> : "")}
    </AuthUserContext.Consumer>
  </div>
);

// admina nepotřebuji, ale stránku jde přímo přejít i bez prihlášení
// kdyby bylo třeba, tak je to skoro u konce..
// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

const NavigationAuth = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Fishing-App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Nav.Link> */}
        <Nav.Link href="#home">
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link to={ROUTES.HOME}>Home</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link to={ROUTES.RECORD}>Record</Link>
        </Nav.Link>
        <Nav.Link href="#link">
          <Link to={ROUTES.SUMMARY}>Summary</Link>
        </Nav.Link>
        {/*<Nav.Link href="#link"><Link to={ROUTES.ADMIN}>Admin</Link></Nav.Link>*/}
        <SignOutButton />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
