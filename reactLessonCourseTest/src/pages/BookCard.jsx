import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { BookCommentModal } from './BookCommentModal';
import { useState } from 'react';

export const BookCard = ({title,author,category,price,cover,reserved,exactBook}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    
    const updateBookReservation = () => {
        console.log(exactBook.id);
    axios.put(`https://mondayexam.onrender.com/api/v1/books/${exactBook.id}`, 
        {
            "title": exactBook.title,
            "author": exactBook.author,
            "category": exactBook.category,
            "price": exactBook.price,
            "cover": exactBook.cover,
            "reserved": !(exactBook.reserved)
        })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
    }

    console.log(exactBook);

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{price}</Card.Text>
          {reserved ? 
          <Button onClick={updateBookReservation}>Grąžinti</Button> 
          : 
          <Button onClick={updateBookReservation}>Išduoti</Button>}
          <Button onClick={handleShow}>Leave Comment</Button>
        </Card.Body>
        <BookCommentModal 
        show={show}
        handleClose={handleClose}
        />
      </Card>
    );
};