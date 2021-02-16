import React from "react";

import { withAuthorization } from "../session";

const HomePage = () => (
  <div>
    <h1>home</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
