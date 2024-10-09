import { Button, Card } from "react-bootstrap";

export const CardExample = ({ name, username, email, avatar, reserved }) => {
  return (
    <>
      {reserved && (
        <Card className="bg-custom-gradient-reverse-reserved text-center">
          <Card.Img src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{username}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <Button>Reserved</Button>
          </Card.Body>
        </Card>
      )}

      {!reserved && (
        <Card className="bg-custom-gradient-reverse text-center">
          <Card.Img src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{username}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <Button>Reserve</Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
