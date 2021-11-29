import { render, screen } from "@testing-library/react";
import App from "./views/App";
import Ticket from "./components/Ticket";
test("navbar", () => {
  render(<App />);
  expect(
    screen.getByText("Zendesk Coding Challenge Ticket Viewer")
  ).toBeInTheDocument();
});

test("basic auth", () => {
  render(<App />);
  expect(screen.getByText("Basic Auth")).toBeInTheDocument();
});
test("form submit", () => {
  render(<App />);
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByText("Subdomain")).toBeInTheDocument();
  expect(screen.getByText("Subdomain")).toBeInTheDocument();
  expect(screen.getByText(".zendesk.com")).toBeInTheDocument();
});

test("API Token", () => {
  render(<App />);
  expect(screen.getByText("API Token")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByText("Subdomain")).toBeInTheDocument();
  expect(screen.getByText("Subdomain")).toBeInTheDocument();
  expect(screen.getByText(".zendesk.com")).toBeInTheDocument();
});
