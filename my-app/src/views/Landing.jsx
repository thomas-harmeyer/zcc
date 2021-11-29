import axios from "axios";
import { useEffect, useState } from "react";
import FormControl from "react-bootstrap//FormControl";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import Links from "../components/Links";
import Problem from "./Problem";

const Landing = () => {
  //cookies
  const cookies = new Cookies();
  const [redirectToTicketGallery, setRedirectToTicketGallery] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  //radios
  const [radioValue, setRadioValue] = useState("basicAuth");

  //url
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const isError = params.get("error");

  //radios
  const radios = [
    { name: "Basic Auth", value: "basicAuth" },
    { name: "API Token", value: "apiToken" },
  ];

  //put in stuff to store input vals
  const submit = async () => {
    setIsLoading(true);
    const type = radioValue;
    cookies.set("username", username);
    cookies.set("password", password);
    cookies.set("subdomain", subdomain);

    var data = JSON.stringify({
      type: type,
      data: {
        username: username,
        password: password,
        subdomain: subdomain,
      },
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
        setIsLoading(false);
        localStorage.setItem("tickets", JSON.stringify(response.data));
        setRedirectToTicketGallery(true);
      })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  };
  const renderSpinner = () => {
    return (
      <Row className=" justify-content-center">
        <Col xs="auto">Loading Please Wait...</Col>
        <Col sm="auto" className="spinner-border">
          <span></span>
        </Col>
      </Row>
    );
  };

  if (isLoading) {
    return renderSpinner();
  }
  const renderBasicAuth = () => {
    return (
      <>
        <Row className="mb-4 justify-content-center">
          <Col sm="auto">
            <InputGroup>
              <InputGroup.Text className="bg-secondary ">Email</InputGroup.Text>
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
              <InputGroup.Text className="bg-secondary">
                {radioValue === "basicAuth" ? "Password" : "API Token"}
              </InputGroup.Text>
              <FormControl
                type="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-4 justify-content-center">
          <Col sm="auto">
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
      </>
    );
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
      <Row className="p-3 justify-content-md-center">
        <Col sm="auto">
          <ButtonGroup>
            {radios.map((radio, index) => (
              <ToggleButton
                key={index}
                id={`radio-${index}`}
                type="radio"
                variant={"outline-primary"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      {renderBasicAuth()}
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
