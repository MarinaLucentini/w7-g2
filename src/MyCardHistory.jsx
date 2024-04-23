import Card from "react-bootstrap/Card";
import history from "./json/history.json";
import Badge from "react-bootstrap/Badge";

function MyCardHistory() {
  return (
    <>
      {history.map((book) => {
        return (
          <Card className="my-3">
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
export default MyCardHistory;
