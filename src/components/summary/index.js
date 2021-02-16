import React from "react";

import { withAuthorization } from "../session";

const SummaryPage = () => (
  <div>
    <h1>SummaryPage</h1>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(SummaryPage);
