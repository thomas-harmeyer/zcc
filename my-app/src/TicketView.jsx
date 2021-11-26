import { useLocation } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Ticket from "./components/Ticket";
import Tickets_Json from "./ticketsRes.json";

const TicketView = () => {
  //get current pagination index from url params
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const ticketId = params.get("id") ? parseInt(params.get("id")) : 1;

  //get tickets from json file
  const tickets_objects = Tickets_Json.requests;

  return (
    <>
      <Ticket
        ticket={tickets_objects[ticketId - tickets_objects[0].id]}
        size={tickets_objects.length}
      />
    </>
  );
};

export default TicketView;
