import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation with Home link', () => {
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders navigation with Blog link', () => {
  render(<App />);
  const blogLink = screen.getByText(/Blog/i);
  expect(blogLink).toBeInTheDocument();
});

