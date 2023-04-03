import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders the App Component", () =>{
    render(<App location={forecast.location} />);
    const h2Element = screen.getByText(/Manchester, UK/i);
    expect(h2Element).toBeInTheDocument();
  });
});

// test("title heading", () => {
//  render(<App />);
//  const textElement = screen.getByText(/Weather App/i);
// expect(textElement).toBeInTheDocument();
// });
