import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "../navigation";
import LandingPage from "../landing";
import SignUpPage from "../signUp";
import SignInPage from "../signIn";
import PasswordForgetPage from "../passwordForget";
import HomePage from "../home";
import AccountPage from "../account";
import AdminPage from "../admin";
import RecordPage from "../record";
import SummaryPage from "../summary";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../session";
import "./app.scss";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.RECORD} component={RecordPage} />
      <Route path={ROUTES.SUMMARY} component={SummaryPage} />
      {/*<Route path={ROUTES.ADMIN} component={AdminPage} />*/}
      <Redirect from="*" to="/" />
    </div>
  </Router>
);

export default withAuthentication(App);
