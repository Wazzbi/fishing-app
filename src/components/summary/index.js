import { React, useState } from "react";
import "./summary.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Table, Modal, Button } from "react-bootstrap";

import { withAuthorization } from "../session";

// TODO: loading screen (možná udělat jako interceptor)
// TODO: paginator

const mockData = [
  {
    id: 1,
    firstName: "David",
    LastName: "Novotný",
    userName: "Dude",
    height: 175,
    weight: 80,
    ability: "super cute",
  },
  {
    id: 1,
    firstName: "David",
    LastName: "Novotný",
    userName: "Dude",
    height: 175,
    weight: 80,
    ability: "super cute",
  },
  {
    id: 1,
    firstName: "David",
    LastName: "Novotný",
    userName: "Dude",
    height: 175,
    weight: 80,
    ability: "super cute",
  },
  {
    id: 1,
    firstName: "David",
    LastName: "Novotný",
    userName: "Dude",
    height: 175,
    weight: 80,
    ability: "super cute",
  },
];

const SummaryPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="summary-main">
        <div className="summary-title">
          <b>Summary of catches and attendances</b>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="2x"
            className="summary-icon-last"
            onClick={handleShow}
          />
        </div>

        <div className="summary-table-wrapper">
          <Table hover size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Ability</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((data) => (
                <tr>
                  {Object.entries(data).map(([key, value]) => (
                    <td>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
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
        <Modal.Body>Modal window 1</Modal.Body>
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

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(SummaryPage);
