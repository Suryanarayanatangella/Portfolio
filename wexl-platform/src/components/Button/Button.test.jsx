import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders button element', () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with children', () => {
    render(<Button>Custom Content</Button>);
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  test('button is clickable', () => {
    const { container } = render(<Button>Clickable</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });
});
