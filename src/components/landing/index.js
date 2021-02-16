import React from "react";
import Button from "react-bootstrap/Button";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import "./landing.scss";

const Landing = () => {
  let history = useHistory();

  function handleClick() {
    history.push(ROUTES.SIGN_IN);
  }

  return (
    <div className="landing-main">
      <div>
        <h1>landing page</h1>
        <Button variant="primary" onClick={handleClick}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Landing;
