import Card from "react-bootstrap/Card";
import fantasy from "./json/fantasy.json";
import Badge from "react-bootstrap/Badge";

function MyCardFantasy() {
  return (
    <>
      {fantasy.map((book) => {
        return (
          <Card key={`book-${book.asin}`} className="my-3">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Categoria:
                {book.category}
              </Card.Text>
              <Badge bg="light" text="dark">
                {book.price}€
              </Badge>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
export default MyCardFantasy;
