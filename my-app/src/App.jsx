import "./App.css";
import Container from "react-bootstrap/Container";
import TicketGallery from "./TicketGallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import TopBar from "./components/TopBar";
import TicketView from "./TicketView";
import Landing from "./Landing";
import "bootswatch/dist/morph/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path={Links.landing}
            element={<Container className="pt-3"><Landing /></Container>}
          />
          <Route
            path={Links.ticketGallery}
            element={
              <Container className="pt-3">
                <TicketGallery />
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
    </>
  );
}

export default App;
