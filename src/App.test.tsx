import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { routes } from './config';

// https://create-react-app.dev/docs/running-tests/#docsNav
test('renders start page', () => {
  render(<App />);
  const element = screen.getByText(/Start page/i);
  expect(element).toBeInTheDocument();
});


test("navigate to sign in page when you click Sing In link and back to start page", async () => {
  render(
    <App />
  );

  act(() => {
    const goToLoginLink = screen.getByTestId(routes['signin'])
    goToLoginLink.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  })
  // Checking existanse of Sign In page after clicking login link
  let SignInPageElement = screen.getByText("Sign In page");
  expect(SignInPageElement).toBeInTheDocument()
  // Checking non-existanse of Start page
  let StartPageElement = screen.queryByText('Start page')
  expect(StartPageElement).toBeNull() // it doesn't exist

  act(() => {
    const goToHomePageLink = screen.getByTestId(routes['startPage'])
    goToHomePageLink.dispatchEvent(new MouseEvent("click", { bubbles: true }))
  })

  // Checking existanse of Start page after clicking Home link
  StartPageElement = screen.getByText("Start page")
  expect(StartPageElement).toBeInTheDocument()
})
