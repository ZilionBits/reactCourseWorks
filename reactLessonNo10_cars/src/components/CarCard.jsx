
import { Card, Image } from "react-bootstrap";

export const CarCard = ({name, year, price, url}) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{year}</Card.Subtitle>
                <Card.Subtitle>{price}€</Card.Subtitle>
            <Image src={url} fluid/>
            </Card.Body>
        </Card>
    );
};