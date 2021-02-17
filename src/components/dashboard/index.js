import React from "react";

import { withAuthorization } from "../session";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dashboard);
