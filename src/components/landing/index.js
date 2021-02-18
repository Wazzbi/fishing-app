import { React, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import "./landing.scss";
import { withAuthorization } from "../session";

const Landing = (props) => {
  let history = useHistory();
  const [login, setLogin] = useState(null);

  useEffect(() => {
    checkLogin();
    redirect();
  });

  const checkLogin = () => {
    if (props.firebase.auth.X !== undefined) {
      setLogin(!!props.firebase.auth.X);
    }
  };

  function handleClick() {
    history.push(ROUTES.SIGN_IN);
  }

  const redirect = () => {
    if (login) {
      setTimeout(() => {
        history.push(ROUTES.DASHBOARD);
      }, 2000);
    }
  };

  const Landing = () => {
    if (login) {
      return (
        <div className="landing-main">
          <div>
            <h1>Logged user - redirect</h1>
          </div>
        </div>
      );
    }
    if (login === false) {
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
    }
    if (login === null) {
      return (
        <div className="landing-main">
          <div>
            <h1>Loading...</h1>
          </div>
        </div>
      );
    }
  };

  // TODO: na landingPage nezobrazovat navbar

  return <Landing />;
};

const condition = (authUser) => true;

export default withAuthorization(condition)(Landing);
