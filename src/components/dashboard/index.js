import React from "react";
import "./dashboard.scss";

import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

import { withAuthorization } from "../session";

const Dashboard = () => (
  <div className="dashboard-main">
    <div>
      <p>
        <Link to={ROUTES.HOME}>Home</Link>
      </p>
      <p>
        <Link to={ROUTES.RECORD}>Record</Link>
      </p>
      <p>
        <Link to={ROUTES.SUMMARY}>Summary</Link>
      </p>
    </div>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dashboard);
