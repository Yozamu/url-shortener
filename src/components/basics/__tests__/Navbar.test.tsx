import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar tests', () => {
  test('renders without error', () => {
    const component = render(<Navbar />);
    expect(component).toBeTruthy();
  });
});
