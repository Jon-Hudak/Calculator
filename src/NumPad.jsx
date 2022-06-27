import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function NumPad({ display, setDisplay, setAnswer }) {
  const checkLeadingZero = (input) => {
    return input.replaceAll(/^0+(?!$)/g, "");
  };

  const clickHandler = (e) => {
    let btnPressed = e.target.innerText;

    switch (btnPressed) {
      case "AC":
        setDisplay("0");
        setAnswer("0");
        break;

      case "=":
        console.log("TODO Equals");
        break;

      case ".":
        if (!display.match(/\./)) {
          //check if decimal already exists
          setDisplay(display + ".");
        }
        break;

      case "/":
      case "x":
      case "-":
      case "+":
        if (display !== "0" && display !== "-") {
          if (!display.match(/.+[/+\-x]$/)) {
            setDisplay(display + btnPressed);
          }
          if (display.match(/.*[/+\-x]$/)) {
            setDisplay(display.replaceAll(/[/+-x]$/g, btnPressed));
          }
        } else {
          setDisplay("-");
        }
        break;

      default:
        //assuming all other cases are accounted for, must be a number
        if (display.length < 15) {
          setDisplay(checkLeadingZero(display + btnPressed));
        }
        break;
    }
  };

  return (
    <>
      <Col className="px-0" xs={6}>
        <Button
          onClick={clickHandler}
          className="btn btn-danger btn-block rounded-0"
          id="clear"
        >
          AC
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block btn-secondary rounded-0"
          id="divide"
        >
          /
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block btn-secondary rounded-0"
          id="multiply"
        >
          x
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="seven"
        >
          7
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="eight"
        >
          8
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="nine"
        >
          9
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block btn-secondary rounded-0 "
          id="subtract"
        >
          -
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="four"
        >
          4
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="five"
        >
          5
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="six"
        >
          6
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block btn-secondary rounded-0"
          id="add"
        >
          +
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="one"
        >
          1
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="two"
        >
          2
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="three"
        >
          3
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block btn-primary rounded-0"
          id="equals"
        >
          =
        </Button>
      </Col>

      <Col className="px-0" xs={6}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="zero"
        >
          0
        </Button>
      </Col>

      <Col className="px-0" xs={3}>
        <Button
          onClick={clickHandler}
          className="btn btn-block rounded-0 btn-dark"
          id="decimal"
        >
          .
        </Button>
      </Col>
    </>
  );
}
