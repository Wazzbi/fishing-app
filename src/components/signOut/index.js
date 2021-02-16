import React from "react";
import Button from "react-bootstrap/Button";

import { withFirebase } from "../firebase";

const SignOutButton = ({ firebase }) => (
  <Button variant="outline-success" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
