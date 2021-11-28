import { useState } from "react";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import { Navigate, useLocation } from "react-router-dom";
import Links from "../components/Links";
import Ticket from "../components/Ticket";

import Problem from "./Problem";
const TicketGallery = () => {
  //get current pagination index from url params
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const page = params.get("page") ? parseInt(params.get("page")) : 1;

  //change pagination index state
  const [redirect, setRedirect] = useState(page);

  const Tickets_Json = JSON.parse(localStorage.getItem("tickets"));
  //get tickets from json file
  const tickets_objects = Tickets_Json.requests;
  //tickets object array
  let tickets = [];
  //pages object array
  let pages = [];

  const pushPage = (page) => {
    for (let index = 1; index <= tickets_objects.length / 25; index++) {
      pages.push(
        <Pagination.Item
          key={index}
          active={index === page}
          onClick={() => {
            setRedirect(index);
          }}
        >
          {index}
        </Pagination.Item>
      );
    }
  };

  const pushTickets = () => {
    const minPage = (page - 1) * 25;
    const maxPage = page * 25;
    for (
      let index = minPage;
      index < maxPage && index < tickets_objects.length;
      index++
    ) {
      tickets.push(
        <Col
          key={"ticket:" + index}
          style={{ height: "100%" }}
          sm={4}
          className="p-3"
        >
          <Ticket ticket={tickets_objects[index]} galleryView />
        </Col>
      );
    }
  };

  pushPage(page);
  pushTickets();

  return (
    <>
      <Row>
        <Col sm="auto">
          <Problem />
        </Col>
      </Row>
      {page === redirect ? (
        <></>
      ) : (
        <Navigate to={Links.ticketGalleryQuery + redirect} />
      )}
      <Row>
        <Col>
          <h1>Tickets</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination>{pages}</Pagination>{" "}
        </Col>
      </Row>
      <Row>{tickets}</Row>
    </>
  );
};

export default TicketGallery;
