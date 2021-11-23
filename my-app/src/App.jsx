import "./App.css";
import Container from "react-bootstrap/Container";
import TicketPage from "./TicketPage";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <TicketPage page={2} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
