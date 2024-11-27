import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { BookCommentModal } from "./BookCommentModal";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { libraryApi } from "../libraryApi/LibraryApi";
import AuthContext from "../contextGlobal/AuthContext";

export const BookCard = ({
  title,
  author,
  category,
  price,
  cover,
  reserved,
  exactBook,
}) => {
  const navigate = useNavigate();

  const { getUser } = useContext(AuthContext);
  const token = getUser();

  const navigateToUpdatePage = () => {
    navigate("/updateBookForm", { state: { book: exactBook } });
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const deleteBook = () => {
    libraryApi
      .deleteBook(exactBook.id, token)
      .catch((error) => console.log(error));
  };

  const updateBookReservation = () => {
    libraryApi.updateBookReservation(exactBook.id,exactBook,token)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  console.log(exactBook);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cover} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{price}</Card.Text>
        {reserved ? (
          <Button onClick={updateBookReservation}>Grąžinti</Button>
        ) : (
          <Button onClick={updateBookReservation}>Išduoti</Button>
        )}
        <Button onClick={handleShow}>Leave Comment</Button>
        <Button onClick={navigateToUpdatePage}>Update Book</Button>
        <Button onClick={deleteBook}>Delete Book</Button>
      </Card.Body>
      <BookCommentModal show={show} handleClose={handleClose} />
    </Card>
  );
};
