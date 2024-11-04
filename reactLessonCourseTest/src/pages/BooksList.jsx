import { GlobalDataContext } from "../contextGlobal/GlobalData";
import { BookCard } from "./BookCard";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export const BooksList = () => {

    const {booksData, setBooksData} = useContext(GlobalDataContext);

useEffect(() => {
    axios.get("https://mondayexam.onrender.com/api/v1/books")
    .then((data) => setBooksData(data.data))
    .catch((error) => console.log(error))
}, []);

    return (
        <Container>
            <Row>
        {booksData.map((b) =>
            <Col
            key={b.id}>
        <BookCard 
        title={b.title}
        author={b.author}
        category={b.category}
        price={b.price}
        cover={b.cover}
        reserved={b.reserved}
        exactBook={b}
        />
            </Col>
        )}
            </Row>
        </Container>
    );
};