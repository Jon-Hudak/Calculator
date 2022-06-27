import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
  const checkLeadingZero=(input)=>{
    return input.replaceAll(/^0+(?!$)/g,'')
     
  }

export default function NumPad() {
  return (
    <>
      <Col className="px-0" xs={6}>
        <Button className="btn btn-danger btn-block rounded-0" id="AC">
          {" "}
          AC
        </Button>
      </Col>
      
      <Col className="px-0" xs={3}>
        <Button className="btn btn-block btn-secondary rounded-0" id="divide">
          /
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block btn-secondary rounded-0" id="multiply">
          X
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="seven">
          7
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="eight">
          8
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="nine">
          9
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block btn-secondary rounded-0 " id="minus">
          -
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="four">
          4
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="five">
          5
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="six">
          6
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block btn-secondary rounded-0" id="plus">
          +
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="seven">
          7
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="eight">
          8
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="nine">
          9
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          className="btn btn-block btn-secondary rounded-0 oper"
          id="minus"
        >
          -
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="one">
          1
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="two">
          2
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="three">
          3
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block btn-primary rounded-0" id="equal">
          =
        </Button>
      </Col>

      <Col className="px-0" xs={6}>
        <Button className="btn btn-block rounded-0 btn-dark" id="zero">
          0
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button className="btn btn-block rounded-0 btn-dark" id="dec">
          .
        </Button>
      </Col>
    </>
  );
}
