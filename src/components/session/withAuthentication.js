import React from "react";

import AuthUserContext from "./context";
import { withFirebase } from "../firebase";

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        currentUser: null,
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });

          this.props.firebase
            .getUserData(authUser && authUser.uid)
            .then((currentUser) =>
              currentUser
                ? this.setState({ currentUser })
                : this.setState({ currentUser: null })
            );
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
