import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// https://create-react-app.dev/docs/running-tests/#docsNav
test('renders start page', () => {
  render(<App />);
  const element = screen.getByText(/Start page/i);
  expect(element).toBeInTheDocument();
});
