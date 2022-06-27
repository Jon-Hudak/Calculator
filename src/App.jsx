import NumPad from "./NumPad";
import { Container, Row } from "react-bootstrap";
import Display from "./Display";
function App() {
  return (
    <div className="App">
      
        <Container id="calculator" className="">

          <Row>
            <Display/>
          </Row>
          <Row>
            <NumPad />
          </Row>
        </Container>
      
    </div>
  );
}

export default App;
