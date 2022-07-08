import React from "react";
import { useState } from "react";
import { Col, Button } from "react-bootstrap";

export default function NumPad({ display, answer, setDisplay, setAnswer }) {
  const [equalsLastPressed, setEqualsLastPressed] = useState(false);

  const checkLeadingZero = (input) => {
    return input.replaceAll(/^0+(?!$)/g, "");
  };

  const equals = (input) => {
    let newAns = 0;
    let newDisp=input;
    let breakout=false;
    while (/[x/]/.test(input) && breakout==false) {
      //checks if multiplication or division first
      // const match = input.match(/(-?\d(?:.\d+)?)+([/x])([0-9](?:.\d+)?)/);
      let match = input.match(/([0-9]+)([x/])([0-9]+)/);
      console.log(match);
      let [exp, num1, operator, num2] = match;

      switch (operator) {
        case "x":
          console.log("no");
          newAns = parseInt(num1) * parseInt(num2);
          input = input.replace(exp, newAns.toString());
          console.log(input);
          
          break;
        case "/":
          if (num2 == 0) {
            console.log('div zero')
            newAns="Negative Infinity";
            newDisp="";
            breakout=true;
            break;
          }
          console.log("div");
          newAns = parseInt(num1) / parseInt(num2);
          input = input.replace(exp, newAns.toString());
          console.log(input);          
          break;

        default:
          throw new Error();
      }

      setDisplay(newDisp + "=" + newAns);
      setAnswer(newAns);
    }
    //  if (true)){

    //  }
  };

  const clickHandler = (e) => {
    let btnPressed = e.target.innerText;

    switch (btnPressed) {
      case "AC":
        setDisplay("0");
        setAnswer("0");
        setEqualsLastPressed(false);
        break;

      case "=":
        if (equalsLastPressed == false) {
          console.log("TODO Equals");
          equals(display);
        }
        setEqualsLastPressed(true);
        break;

      case ".":
        if (!display.match(/\./) && equalsLastPressed === false) {
          //check if decimal already exists
          setDisplay(display + ".");
        }
        break;

      case "/":
      case "x":
      case "-":
      case "+":
        if (equalsLastPressed === true) {
          setDisplay(answer);
        }
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
        setEqualsLastPressed(false);
        break;

      default:
        //assuming all other cases are accounted for, must be a number

        if (equalsLastPressed) {
          setDisplay("");
        }

        setDisplay((old) => checkLeadingZero(old + btnPressed));

        setEqualsLastPressed(false);
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
