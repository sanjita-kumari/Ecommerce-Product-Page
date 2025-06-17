import { render, screen } from '@testing-library/react';
import App from './App';

// this is a test js file
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
