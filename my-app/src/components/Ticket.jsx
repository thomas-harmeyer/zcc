import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const Ticket = (props) => {
  const onDelete2 = (id) => {
    console.log(id);
  };
  const getDescription = (description) => {
    if (description.length > 50) {
      return description.substring(0, 50) + "...";
    }
    return description;
  };
  const getTitle = (description) => {
    if (description.length > 25) {
      return description.substring(0, 25) + "...";
    }
    return description;
  };

  const { ticket } = props;
  return (
    <Card bg="dark" text="light" className="ticket">
      <Card.Header className="ticket__title">
        <h2>{getTitle(ticket.subject)}</h2>
        <div className="ticket__id">
          <p>{getTitle(ticket.requester_id)}</p>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="ticket__body">
          <p>{getDescription(ticket.description)}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup>
          <Button
            className="ticket__delete-btn"
            variant="danger"
            onClick={() => onDelete2(ticket.requester_id)}
          >
            X
          </Button>{" "}
          <Button variant="warning" onClick={() => {}}>
            More
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};
export default Ticket;
