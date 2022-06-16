import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./Button";
export default function NumPad() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}><Button id="AC" text="AC"/></Col>
          <Col xs={3}><Button id="divide" text="/"/> </Col>
          <Col xs={3}><Button id="multiply" text="X"/></Col>
        </Row>
      </Container>
    </div>
  );
}
