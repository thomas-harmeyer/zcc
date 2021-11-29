import { Navigate, useLocation } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Ticket from "../components/Ticket";
import Links from "../components/Links";

const TicketView = () => {
  //get current pagination index from url params
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const ticketId = params.get("id") ? parseInt(params.get("id")) : 1;

  const Tickets_Json = JSON.parse(localStorage.getItem("tickets"));
  if (Tickets_Json) {
    //get tickets from json file
    const tickets_objects = Tickets_Json.requests;
    console.log(tickets_objects);

    return (
      <>
        <Ticket
          ticket={tickets_objects[ticketId]}
          size={tickets_objects.length}
          id={ticketId}
        />
      </>
    );
  } else {
    //if no tickets in json file
    return <Navigate to={Links.landing + "?error=true"} />;
  }
};

export default TicketView;
