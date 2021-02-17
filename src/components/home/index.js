import React from "react";
import "./home.scss";
import { Button, Card } from "react-bootstrap";
import AddPost from "../addPost";

import { withAuthorization, AuthUserContext } from "../session";

//TODO: home by měla načítat příspěvky ze serveru + infinite scroll

const HomePage = () => (
  <AuthUserContext.Consumer>
    {({ currentUser }) =>
      currentUser && currentUser.role !== "user" ? (
        <HomeAuth />
      ) : (
        <HomeNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const HomeAuth = () => (
  <div className="home-main">
    <Button variant="success" className="home-section-btn">
      CZ
    </Button>
    <Button variant="danger" className="home-section-btn">
      EU
    </Button>
    <Button variant="info" className="home-section-btn">
      World
    </Button>

    <AddPost />

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);

const HomeNonAuth = () => (
  <div className="home-main">
    <Button variant="success" className="home-section-btn">
      CZ
    </Button>
    <Button variant="danger" className="home-section-btn">
      EU
    </Button>
    <Button variant="info" className="home-section-btn">
      World
    </Button>

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="home-card">
      <Card.Img variant="top" src="//via.placeholder.com/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
