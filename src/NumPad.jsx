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
    let newDisp = input;
    let breakout = false;
    while (/[\dx/]/.test(input) && breakout == false) {
      //checks if multiplication or division first
      let match = input.match(
        /([-]?[0-9]+(?:[.][0-9]+)?)([x\/])([0-9]+(?:[.][0-9]+)?)/
      );
      //let match = input.match(/([0-9]+)([x/])([0-9]+)/);
      console.log(match);
      let [exp, num1, operator, num2] = match;

      switch (operator) {
        case "x":
          console.log("mult");
          newAns = parseInt(num1) * parseInt(num2);
          input = input.replace(exp, newAns.toString());
          console.log(input, "input");

          break;
        case "/":
          if (num2 == 0) {
            console.log("div zero");
            newAns = "Negative Infinity";
            breakout = true;
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
    }
    console.log(newAns, "after");
    breakout = false;
    while (/\d[+-]/.test(input) && breakout == false) {
      //checks if multiplication or division first
      let match = input.match(
        /([-]?[0-9]+(?:[.][0-9]+)?)([-+])([-]?[0-9]+(?:[.][0-9]+)?)/
      );
      //let match = input.match(/([0-9]+)([+-])([0-9]+)/);
      console.log(match);
      let [exp, num1, operator, num2] = match;

      switch (operator) {
        case "+":
          console.log("no");
          newAns = parseInt(num1) + parseInt(num2);
          input = input.replace(exp, newAns.toString());
          console.log(input);

          break;
        case "-":
          console.log("div");
          newAns = parseFloat(num1) - parseFloat(num2);
          input = input.replace(exp, newAns.toString());
          console.log(input);
          break;

        default:
          throw new Error();
      }
    }
    return newAns;
  };

  const clickHandler = (e) => {
    let btnPressed = e.target.innerText;
    let newDisp = display;
    let newAns = answer;
    let equalsLP = equalsLastPressed;

    switch (btnPressed) {
      case "AC":
        newDisp = "0";
        newAns = "0";
        equalsLP = false;
        break;

      case "=":
        if (equalsLastPressed === false) {
          console.log("TODO Equals");
          newAns = equals(display);
          newDisp = `${display}=${newAns}`;
        }
        equalsLP = true;
        break;

      case ".":
        if (!display.match(/\./) && equalsLastPressed === false) {
          //check if decimal already exists
          newDisp = display + ".";
        }
        break;

      case "/":
      case "x":
      case "+":
        if (equalsLastPressed === true) {
          newDisp = "";
        }
        if (display != "0") {
          if (!display.match(/.+[/+\x]$/)) {
            newDisp = display + btnPressed;
          }
          if (display.match(/.*[/+\x]$/)) {
            newDisp = display.replaceAll(/[/+-x]$/g, btnPressed);
          }
        } 
        // else {
        //   newDisp = "-";
        // }
        equalsLP = false;
        break;
        case "-":
          if (newDisp.charAt(newDisp.length - 1) == "-") {
            console.log(newDisp)
            newDisp=newDisp.slice(0, -1);
            console.log(newDisp);
            break
          }    
          if (display != "0") {
            if (!display.match(/.+[-]$/)) {
              newDisp = display + btnPressed;
            }
            if (display.match(/.*[-]$/)) {
              newDisp = display.replaceAll(/[/+-x]$/g, btnPressed);
            }
          } 
          if (display=="0"){
            newDisp='-'
          }
          break;
      default:
        //assuming all other cases are accounted for, must be a number

        if (equalsLP) {
          newDisp = "";
        }

        newDisp = checkLeadingZero(newDisp + btnPressed);

        equalsLP = false;
        break;
    }
    setDisplay(newDisp);
    setAnswer(newAns);
    setEqualsLastPressed(equalsLP);
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
