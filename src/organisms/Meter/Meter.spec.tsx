import { fireEvent, render, screen } from '@testing-library/react';
import Meter from '.';
import { DIGIT_LENGTH } from '../../util/constants';

const onAddNewReadingMock = jest.fn();

const renderMeter = () => render(<Meter onAddNewReading={onAddNewReadingMock} lastReading={33012} />);

describe('Meter', () => {
  it(`should render error message if input value is less than ${DIGIT_LENGTH} digits`, () => {
    renderMeter();

    fireEvent.change(screen.getByRole('textbox', { name: /readinginput/i }), { target: { value: '123' } })
    expect(screen.getByText(`Reading must be ${DIGIT_LENGTH} digits long`)).toBeInTheDocument();
  });

  it(`should render error message if input value is less than ${DIGIT_LENGTH} digits`, () => {
    renderMeter();

    fireEvent.change(screen.getByRole('textbox', { name: /readinginput/i }), { target: { value: '13012' } })
    expect(screen.getByText('The reading must be higher than the last one')).toBeInTheDocument();
  });

  it('should call onAddNewReadingMock with correct value on click', () => {
    renderMeter();

    fireEvent.change(screen.getByRole('textbox', { name: /readinginput/i }), { target: { value: '43012' } });

    fireEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(onAddNewReadingMock).toHaveBeenCalledTimes(1);
    expect(onAddNewReadingMock).toHaveBeenCalledWith([4, 3, 0, 1, 2]);
  });
});