import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Navigate } from "react-router-dom";
import Links from "../components/Links";
const TopBar = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);

  return (
    <>
      {redirect && <Navigate to={Links.landing} />}
      <Navbar variant="light" bg="primary">
        <Container>
          <Navbar.Brand
            onClick={() => {
              setRedirect(true);
            }}
          >
            Zendesk Coding Challenge Ticket Viewer
          </Navbar.Brand>
          {/* <Navbar.Brand></Navbar.Brand> Maybe add a settings option here*/}
        </Container>
      </Navbar>
    </>
  );
};
export default TopBar;
