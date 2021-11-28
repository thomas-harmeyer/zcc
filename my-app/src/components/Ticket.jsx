import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Links from "./Links";
import { Link } from "react-router-dom";
const Ticket = (props) => {
  const ticketTitleLength = 30;
  const ticketBodyLength = 100;
  const { ticket, galleryView, size } = props;

  const directionButton = (directionArrow, toId) => {
    return (
      <Col>
        <Button
          variant="primary"
          as={Link}
          to={Links.ticketQuery + toId}
          onClick={() => console.log(toId)}
        >
          {directionArrow}
        </Button>
      </Col>
    );
  };

  const backButton = (id) => {
    if (galleryView || id === 1) return;
    return directionButton("←", id - 1);
  };
  const forwardButton = (id) => {
    if (galleryView || id === size) return;
    return directionButton("→", id + 1);
  };

  const getTitle = (title) => {
    if (!galleryView) return title;

    if (title.length > ticketTitleLength) {
      return title.substring(0, ticketTitleLength) + "...";
    }
    return title;
  };

  const getDescription = (description) => {
    if (!galleryView) return description;

    if (description.length > ticketBodyLength) {
      return description.substring(0, ticketBodyLength) + "...";
    }
    return description;
  };

  return (
    <Card className="ticket">
      <Card.Header className="ticket__title">
        <div className="ticket__id">
          <p>{ticket.id}</p>
        </div>
      </Card.Header>
      <Card.Title className="text-center px-2 pt-1 pb-0">
        <h2>{getTitle(ticket.subject)}</h2>
      </Card.Title>
      <Card.Body>
        <div className="ticket__body ">
          <p>{getDescription(ticket.description)}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <Row className="float-end">
          {backButton(ticket.id)}

          <Col>
            <Button
              variant="primary"
              onClick={() => { }}
              as={Link}
              to={
                galleryView
                  ? Links.ticketQuery + ticket.id
                  : Links.ticketGallery
              }
            >
              {galleryView ? "view" : "return"}
            </Button>
          </Col>
          {forwardButton(ticket.id)}
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default Ticket;
