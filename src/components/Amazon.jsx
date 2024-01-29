import React from "react";
import List from "./Data";
import Cards from "./Cards";
import { Col, Container, Row } from "react-bootstrap";
import "./Amazon.css";

function Amazon({ handleClick }) {
  return (
    <>
      <div id="content">
        <Container>
          <Row>
            <Col className="d-flex flex-wrap">
              {List.map((item) => (
                <Cards item={item} handleClick={handleClick} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Amazon;
