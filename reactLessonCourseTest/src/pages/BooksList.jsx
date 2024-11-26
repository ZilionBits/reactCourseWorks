import { GlobalDataContext } from "../contextGlobal/GlobalData";
import { BookCard } from "./BookCard";
import { useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AuthContext from "../contextGlobal/AuthContext";
import { libraryApi } from "../libraryApi/LibraryApi";

export const BooksList = () => {

    const {booksData, setBooksData} = useContext(GlobalDataContext);
    const {getUser} = useContext(AuthContext);
    const userToken = getUser();

useEffect(() => {

    libraryApi.getAllBooks(userToken)
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