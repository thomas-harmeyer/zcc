import "./App.css";
import Container from "react-bootstrap/Container";
import TicketPage from "./TicketPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import TopBar from "./components/TopBar";
import TicketView from "./TicketView";
import "bootswatch/dist/morph/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopBar />} />
        <Route
          path={Links.ticketPage}
          element={
            <Container className="pt-3">
              <TicketPage />
            </Container>
          }
        />
        <Route
          path={Links.ticket}
          element={
            <Container className="pt-3">
              <TicketView />
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
