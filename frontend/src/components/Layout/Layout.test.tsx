import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout Component', () => {
  test('renders header with navigation', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders children content', () => {
    render(<Layout><div data-testid="content">Test Content</div></Layout>);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  test('renders footer with correct content', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByRole('contentinfo')).toHaveTextContent(/© 2024/i);
  });
});