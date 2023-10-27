import { fireEvent, render } from '@testing-library/react';
import ShrinkerForm from '../ShrinkerForm';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => ({ shortUrl: '' }),
  })
);

describe('ShrinkerForm tests', () => {
  test('renders without error', () => {
    const component = render(<ShrinkerForm />);
    expect(component).toBeTruthy();
  });

  test('renders input and button', () => {
    const component = render(<ShrinkerForm />);
    const input = component.getByRole('textbox');
    const shortenButton = component.getByRole('button');
    expect(input).toBeTruthy();
    expect(shortenButton).toBeTruthy();
  });

  test('can type value and click on button', () => {
    const typedUrl = 'Some URL';
    const component = render(<ShrinkerForm />);
    const input = component.getByRole('textbox');
    fireEvent.change(input, { target: { value: typedUrl } });
    expect(input).toHaveValue(typedUrl);
    fireEvent.click(component.getByRole('button'));
  });
});
