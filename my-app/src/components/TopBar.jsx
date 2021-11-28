import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopBar = () => {
  return (
    <Navbar variant="light" bg="primary">
      <Container>
        <Navbar.Brand>Zendesk Coding Challenge Ticket Viewer</Navbar.Brand>
        {/* <Navbar.Brand></Navbar.Brand> Maybe add a settings option here*/}
      </Container>
    </Navbar>
  );
};
export default TopBar;
