import { render, screen } from '@testing-library/react';
import Body from '.';
import { numbers } from '../../../molecules/Pad';

const renderBody = (isDisabled: boolean = false, error: string | undefined = undefined) => render(<Body currentReading="00123"
  onInputChange={jest.fn()}
  onPadButton={jest.fn()}
  onRemovePadButton={jest.fn()}
  onRemoveAllPadButton={jest.fn()}
  onAddNewReading={jest.fn()}
  addButtonIsDisabled={isDisabled}
  errorMessage={error}
/>);

describe('Body', () => {
  it('should render Body main elements', () => {
    renderBody();

    expect(screen.getByRole('textbox', { name: /readinginput/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    numbers.forEach((n: number) => {
      expect(screen.getByRole('button', { name: `${n}` })).toBeInTheDocument();
    });
  });

  it('should render error message is error is passed', () => {
    renderBody(true, 'some error');
    expect(screen.getByText('some error')).toBeInTheDocument();
  });

  it('should render disabled button if addButtonIsDisabled is true', () => {
    renderBody(true);
    expect(screen.getByRole('button', { name: /add/i })).toBeDisabled();
  });
});