import React from "react";

import { AuthUserContext, withAuthorization } from "../session";
import { PasswordForgetForm } from "../passwordForget";
import PasswordChangeForm from "../passwordChange";

// TODO: SAMOSTATNÁ ZÁLOŽKA NAZMĚNU HESLA
// TODO: možnost přidat příspěvek

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
