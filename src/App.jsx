import NumPad from "./NumPad";
import { Container, Row } from "react-bootstrap";
import Display from "./Display";
import { useState } from "react";
function App() {

  const [display, setDisplay]=useState('0');
  const [answer, setAnswer]=useState('0');

  return (
    <div className="App">
      
        <Container fluid id="calculator" className="">

          <Row>
            <Display display={display} answer={answer}/>
          </Row>
          <Row id="btnCont">
            <NumPad display={display} answer={answer} setDisplay={setDisplay} setAnswer={setAnswer}/>
          </Row>
        </Container>
      
    </div>
  );
}

export default App;
