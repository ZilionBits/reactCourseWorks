import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Homepage = () => {

    return (
        <Card className="text-center position-absolute top-50 start-50 translate-middle">
        <Card.Body>
          <Card.Title>Welcome to real book store!</Card.Title>
          <Card.Text>
            Go to books list.
          </Card.Text>
          <Button href='/booksList'>Books List</Button>
        </Card.Body>
      </Card>
    );
};