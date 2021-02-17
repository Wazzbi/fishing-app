import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import AuthUserContext from "./context";
import { withFirebase } from "../firebase";
import * as ROUTES from "../../constants/routes";

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN);
          }
          // if (
          //   !condition(authUser) &&
          //   this.props.location.pathname === ROUTES.LANDING
          // ) {
          //   return null;
          // } else if (!condition(authUser)) {
          //   this.props.history.push(ROUTES.SIGN_IN);
          // } else if (
          //   condition(authUser) &&
          //   this.props.location.pathname === ROUTES.LANDING
          // ) {
          //   this.props.history.push(ROUTES.DASHBOARD);
          // }
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {(authUser) =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
