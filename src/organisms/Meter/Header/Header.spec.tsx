import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('should render Header elements', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});