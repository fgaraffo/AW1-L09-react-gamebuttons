import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ButtonGroup from './ButtonGroup';

const names = ['Chess', 'Poker', 'Black Jack', 'Go'];

function App() {
  return (
   <Container>
     <ButtonGroup names={names}/>
   </Container>
  );
}

export default App;
