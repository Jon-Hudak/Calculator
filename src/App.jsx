import NumPad from "./NumPad";
import { Container, Row } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div id="calculator">
        <Container id="btnCont" className="px-0">
          <Row>
            <NumPad />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
