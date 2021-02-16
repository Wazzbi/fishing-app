import React from "react";

import { withAuthorization } from "../session";

const RecordPage = () => (
  <div>
    <h1>RecordPage</h1>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(RecordPage);
