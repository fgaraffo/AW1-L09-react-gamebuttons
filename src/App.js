import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Jumbotron } from 'react-bootstrap';
import ButtonGroup from './ButtonGroup';

const names = ['Chess', 'Poker', 'Black Jack', 'Go'];

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1>Game Buttons</h1>
        <Row>
          <ButtonGroup names={names} />
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
