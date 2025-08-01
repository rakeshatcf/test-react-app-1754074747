import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders home page by default', () => {
    render(<App />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('navigation works correctly', async () => {
    render(<App />);
    const user = userEvent.setup();
    const aboutLink = screen.getByText(/About/i);
    await user.click(aboutLink);
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });

  test('layout renders header and footer', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});