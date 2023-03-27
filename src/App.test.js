import { render, screen } from '@testing-library/react';
import App from './App';

test('title heading', () => {
  render(<App />);
  const textElement = screen.getByText(/Weather App/i);
  expect(textElement).toBeInTheDocument();
});