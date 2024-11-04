import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { GlobalDataContext } from '../contextGlobal/GlobalData';

export const Homepage = () => {

    const {counter, addCounter} = useContext(GlobalDataContext);

    return (
        <Card className="text-center position-absolute top-50 start-50 translate-middle">
        <Card.Header>{counter}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button onClick={addCounter}>Sign Up</Button>
        </Card.Body>
      </Card>
    );
};