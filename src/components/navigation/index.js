import { React, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import SignOutButton from "../signOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../session";

import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  if (props.location.pathname !== ROUTES.LANDING) {
    return (
      <div>
        <AuthUserContext.Consumer>
          {({ authUser }) => (authUser ? <NavigationAuth /> : "")}
        </AuthUserContext.Consumer>
      </div>
    );
  }

  return null;
};

// admina nepotřebuji, ale stránku jde přímo přejít i bez prihlášení
// kdyby bylo třeba, tak je to skoro u konce..
// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

const NavigationAuth = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const closeNav = () => {
    setNavExpanded(false);
  };

  //TODO: Fishing-App ostylovat aby to nevypadalo jako link

  return (
    <Navbar
      bg="light"
      expand="lg"
      onToggle={(state) => setNavExpanded(state)}
      expanded={navExpanded}
    >
      <Navbar.Brand href="#home">
        <Link to={ROUTES.DASHBOARD}>Fishing-App</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">
          <Link to={ROUTES.LANDING}>Landing</Link>
        </Nav.Link> */}
          <Nav.Link href="#link" onSelect={closeNav}>
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
          </Nav.Link>
          <Nav.Link href="#link" onSelect={closeNav}>
            <Link to={ROUTES.HOME}>Home</Link>
          </Nav.Link>
          <Nav.Link href="#link" onSelect={closeNav}>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </Nav.Link>
          <Nav.Link href="#link" onSelect={closeNav}>
            <Link to={ROUTES.RECORD}>Record</Link>
          </Nav.Link>
          <Nav.Link href="#link" onSelect={closeNav}>
            <Link to={ROUTES.SUMMARY}>Summary</Link>
          </Nav.Link>
          {/*<Nav.Link href="#link"><Link to={ROUTES.ADMIN}>Admin</Link></Nav.Link>*/}
          <SignOutButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

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

export default withRouter(Navigation);
