import { React, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import "./landing.scss";
import { withAuthorization } from "../session";

const Landing = (props) => {
  let history = useHistory();
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLogin(!!props.firebase.auth.X);
    showModal();
    redirect();
  });

  function handleClick() {
    history.push(ROUTES.SIGN_IN);
  }

  const showModal = () => (login ? handleShow() : null);

  const redirect = () => {
    if (login) {
      setTimeout(() => {
        history.push(ROUTES.DASHBOARD);
      }, 2000);
    }
  };

  // TODO: když přihlášený zobraz namísto sign in tlačítko getIn a routuj na homepage

  return (
    <>
      <div className="landing-main">
        <div>
          <h1>landing page</h1>
          <Button variant="primary" onClick={handleClick}>
            Sign In
          </Button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>logged user - redirect</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const condition = (authUser) => true;

export default withAuthorization(condition)(Landing);
