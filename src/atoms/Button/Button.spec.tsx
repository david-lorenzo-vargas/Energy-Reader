import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Button from '.';

const mockOnClick = jest.fn();
const id = 'button';
const type = 'submit';

const ChildComponent = () => {
  return (
    <div data-testid="ChildComponent">ChildComponent</div>
  );
};

const renderButton = (disabled: boolean = false) =>
  render(<Button disabled={disabled} id={id} onClick={() => mockOnClick()} type={type}><ChildComponent /></Button>);

describe('Button', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render', () => {
    renderButton();
    expect(screen.getByTitle(id)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not be disabled when passed false', () => {
    renderButton();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  it('should call onClick when button is clicked', async () => {
    renderButton();
    fireEvent.click(screen.getByTitle(id));
    await waitFor(() => {
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  it('should render a child component', () => {
    renderButton();
    expect(screen.getByTestId("ChildComponent")).toBeInTheDocument();
  });
});