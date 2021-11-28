import axios from "axios";
import { useState } from "react";
import FormControl from "react-bootstrap//FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import Links from "../components/Links";
import Problem from "./Problem";

const Landing = () => {
  //cookies
  const cookies = new Cookies();
  const [redirectToTicketGallery, setRedirectToTicketGallery] = useState(false);
  const [username, setUsername] = useState(
    cookies.get("username") ? cookies.get("username") : ""
  );
  const [password, setPassword] = useState(
    cookies.get("password") ? cookies.get("password") : ""
  );
  const [subdomain, setSubdomain] = useState(
    cookies.get("subdomain") ? cookies.get("subdomain") : ""
  );

  //url
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const isError = params.get("error");

  //put in stuff to store input vals
  const submit = async () => {
    cookies.set("username", username);
    cookies.set("password", password);
    cookies.set("subdomain", subdomain);

    var data = JSON.stringify({
      username: username,
      password: password,
      subdomain: subdomain,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("tickets", JSON.stringify(response.data));
        setRedirectToTicketGallery(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="center-content-vertically">
      {isError && (
        <Row>
          <Col sm="auto">
            <Problem />
          </Col>
        </Row>
      )}
      <Row className="text-center">
        <h1>Zendesk Coding Challenge</h1>
      </Row>
      <Row className="mb-4">
        <Col sm={{ span: 4, offset: 2 }}>
          <InputGroup>
            <InputGroup.Text className="bg-secondary">Email</InputGroup.Text>
            <FormControl
              type="email"
              placeholder="example@gmail.com"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm={{ span: 4 }}>
          <InputGroup>
            <InputGroup.Text className="bg-secondary">Password</InputGroup.Text>
            <FormControl
              type="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col sm={{ span: "auto", offset: 4 }}>
          <InputGroup>
            <InputGroup.Text className="bg-secondary">
              Subdomain
            </InputGroup.Text>
            <FormControl
              value={subdomain}
              onInput={(e) => setSubdomain(e.target.value)}
            />
            <InputGroup.Text>.zendesk.com</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm="auto">
          <Button onClick={submit}>Submit</Button>
        </Col>
      </Row>
      {redirectToTicketGallery ? <Navigate to={Links.ticketGallery} /> : ""}
    </div>
  );
};

export default Landing;
