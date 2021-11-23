import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopBar = () => {
  return (
    <Navbar bg="primary" variant="light">
      <Container>
        <Navbar.Brand>Zendesk Coding Challenge Ticket Viewer</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default TopBar;
