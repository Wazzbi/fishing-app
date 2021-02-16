import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../signOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../session";

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

// admina nepotřebuji, ale stránku jde přímo přejít i bez prihlášení
// kdyby bylo třeba, tak je to skoro u konce..
// https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {/*<li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>*/}
    <li>
      <SignOutButton />
    </li>
  </ul>
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
