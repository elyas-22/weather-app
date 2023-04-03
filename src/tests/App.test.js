import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("title heading", () => {
  render(<App />);
  const textElement = screen.getByText(/Weather App/i);
  expect(textElement).toBeInTheDocument();
});
