import { render } from '@testing-library/react';
import ShrinkerMessage from '../ShrinkerMessage';

jest.mock('../../../store/shrinker.ts');
const shrinkerStore = require('../../../store/shrinker.ts');
shrinkerStore.useShrinkerStore.mockReturnValue({
  message: { status: '', content: '' },
});

describe('ShrinkerMessage tests', () => {
  test('renders without error', () => {
    const component = render(<ShrinkerMessage />);
    expect(component).toBeTruthy();
  });

  test('renders no message by default', () => {
    const component = render(<ShrinkerMessage />);
    const container = component.queryByTestId('message-container');
    expect(container).not.toBeInTheDocument();
  });

  test('renders error message if URL is invalid', () => {
    shrinkerStore.useShrinkerStore.mockReturnValue({
      message: { status: 'error', content: 'Error message' },
    });
    const component = render(<ShrinkerMessage />);
    const container = component.getByTestId('message-container');
    expect(container.classList.contains('bg-error-background')).toBe(true);
    expect(component.getByTestId('message-content')).toHaveTextContent('Error message');
  });

  test('renders success message with link if short URL is provided', () => {
    shrinkerStore.useShrinkerStore.mockReturnValue({
      message: { status: 'success', content: 'Success message' },
      shortUrl: 'ShortURL',
    });
    const component = render(<ShrinkerMessage />);
    const container = component.getByTestId('message-container');
    expect(container.classList.contains('bg-success-background')).toBe(true);
    expect(component.getByTestId('message-content')).toHaveTextContent('Success message');
    expect(component.getByRole('link')).toHaveTextContent('ShortURL');
  });
});
