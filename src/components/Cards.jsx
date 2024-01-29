import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./cards.css";

function Cards({ item, handleClick }) {
  const { brand, Model, price, images } = item;
  return (
    <div id="main">      
          <Card
            className="card1"
            style={{
              width: "18rem",
              height: "500px",
              margin: "50px",
              padding: "50px",
            }}
          >
            <Card.Img variant="top" src={images} alt="image" height="300px" />
            <Card.Body>
              <Card.Title>{brand}</Card.Title>
              <Card.Text>{Model}</Card.Text>
              <Card.Text>{price}</Card.Text>
              <Button className="btn" onClick={() => handleClick(item)}>
                {" "}
                add to cart{" "}
              </Button>
            </Card.Body>
          </Card>
    </div>
  );
}

export default Cards;
