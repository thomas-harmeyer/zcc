import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Links from "./Links";
import { Link } from "react-router-dom";

const Ticket = (props) => {
  const ticketTitleLength = 30;
  const ticketBodyLength = 100;
  const { ticket, galleryView, size, id } = props;
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

  const backButton = () => {
    if (galleryView || id === 0) return;
    return directionButton("←", id - 1);
  };
  const forwardButton = () => {
    if (galleryView || id === size - 1) return;
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

  const renderTicketDetails = () => {
    return (
      <>
        <Row>
          <Col>assignee id: {ticket.assignee_id}</Col>
        </Row>
        <Row>
          <Col>
            can be solved by me: {ticket.can_be_solved_by_me ? "true" : "false"}
          </Col>
        </Row>
        <Row>
          <Col>
            collaborator ids:{" "}
            {ticket.collaborator_ids.map((val) => {
              return val + " ";
            })}
          </Col>
        </Row>
        <Row>
          <Col>created at: {ticket.created_at}</Col>
        </Row>
        <Row>
          <Col>
            custom fields:{" "}
            {ticket.custom_fields.map((val) => {
              return val + " ";
            })}
          </Col>
        </Row>
        <Row>
          <Col>due at: {ticket.due_at}</Col>
        </Row>
        <Row>
          <Col>
            email cc ids:{" "}
            {ticket.email_cc_ids.map((val) => {
              return val + " ";
            })}
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            fields:{" "}
            {ticket.fields.map((val) => {
              return val + " ";
            })}
          </Col>
        </Row>
        <Row>
          <Col>followup source id: {ticket.followup_source_id}</Col>
        </Row>
        <Row>
          <Col>is public: {ticket.is_public}</Col>
        </Row>
        <Row>
          <Col>organization id: {ticket.organization_id}</Col>
        </Row>
        <Row>
          <Col>priority: {ticket.priority}</Col>
        </Row>
        <Row>
          <Col>recipient: {ticket.recipient}</Col>
        </Row>
        <Row>
          <Col>requester id: {ticket.requester_id}</Col>
        </Row>
        <Row>
          <Col>status: {ticket.status}</Col>
        </Row>
        <Row>
          <Col>ticket form id: {ticket.ticket_form_id}</Col>
        </Row>
        <Row>
          <Col>type: {ticket.type}</Col>
        </Row>
        <Row>
          <Col>updated at: {ticket.updated_at}</Col>
        </Row>
        <Row>
          <Col>url: {ticket.url}</Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <Card>
        <Card.Header
          className={
            ticket.status === "open"
              ? "bg-primary text-secondary"
              : "bg-secondary"
          }
        >
          <div>
            <p>id: {ticket.id}</p>
          </div>
        </Card.Header>
        <Card.Title className="text-center px-2 pt-1 pb-0">
          <h2>{getTitle(ticket.subject)}</h2>
        </Card.Title>
        <Card.Body>
          <div className="ticket__body ">
            <p>{getDescription(ticket.description)}</p>
            {!galleryView && renderTicketDetails()}
          </div>
        </Card.Body>
        <Card.Footer>
          <Row className="float-end">
            {backButton()}

            <Col>
              <Button
                variant="primary"
                onClick={() => {}}
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
            {forwardButton()}
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Ticket;
