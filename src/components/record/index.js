import { React, useState } from "react";
import "./record.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Table, Button, Modal, Dropdown } from "react-bootstrap";

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

const RecordPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="record-main">
        <div className="record-title">
          <b>Records of attendance and catches</b>

          <FontAwesomeIcon
            icon={faPlusCircle}
            size="2x"
            className="record-icon"
            onClick={handleShow}
          />

          <Dropdown>
            <Dropdown.Toggle>
              <FontAwesomeIcon
                icon={faEllipsisV}
                size="2x"
                className="record-icon-last"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="record-table-wrapper">
          <Table hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
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

export default withAuthorization(condition)(RecordPage);
