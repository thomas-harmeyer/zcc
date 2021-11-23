import Ticket from "./components/Ticket";
import TicketsObject from "./tickets.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const TicketPage = (props) => {
  let { page } = props;
  const [redirect, setRedirect] = useState(-1);
  const startRedirect = page;
  const Tickets = TicketsObject.tickets;
  let tickets = [];
  let pages = [];
  for (
    let index = (page - 1) * 25;
    index <= page * 25 && index < Tickets.length;
    index++
  ) {
    tickets.push(
      <Col
        key={"ticket:" + index}
        style={{ height: "100%" }}
        sm={6}
        className="p-3"
      >
        <Ticket ticket={Tickets[index]} />
      </Col>
    );
  }
  for (let index = 1; index <= Tickets.length / 25; index++) {
    pages.push(
      <Pagination.Item
        key={index}
        active={index === page}
        onClick={() => {
          console.log(index);
          setRedirect(index);
        }}
      >
        {index}
      </Pagination.Item>
    );
  }

  return (
    <div>
      {startRedirect === redirect ? <></> : <Navigate to={"/" + redirect} />}
      <h1>Tickets</h1>
      <Row>
        <Pagination>{pages}</Pagination>{" "}
      </Row>
      <Row>
        <Pagination>{tickets}</Pagination>
      </Row>
    </div>
  );
};

export default TicketPage;
