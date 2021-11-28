import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap//FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Cookies from "universal-cookie";
import Links from "../components/Links";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Landing = () => {
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
      <Row>{username + " " + password + " " + subdomain}</Row>
      <Row>
        {cookies.get("username") +
          " " +
          cookies.get("password") +
          " " +
          cookies.get("subdomain")}
      </Row>
      {redirectToTicketGallery ? <Navigate to={Links.ticketGallery} /> : ""}
    </div>
  );
};

export default Landing;
