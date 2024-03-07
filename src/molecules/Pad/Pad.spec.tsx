import { render, screen, fireEvent } from '@testing-library/react';
import Pad, { numbers } from '.';

const onPadButtonMock = jest.fn();
const onRemovePadButtonMock = jest.fn();
const onRemoveAllPadButtonMock = jest.fn();

const renderPad = () => render(<Pad onPadButton={onPadButtonMock} onRemovePadButton={onRemovePadButtonMock} onRemoveAllPadButton={onRemoveAllPadButtonMock} />);

describe('Pad', () => {
  it('should render Pad with its elements', () => {
    renderPad();

    numbers.forEach((n: number) => {
      expect(screen.getByRole('button', { name: `${n}` })).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: 'removeAllPadButton' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'removePadButton' })).toBeInTheDocument();
  });

  it('should call removeAllPadButton on click', () => {
    renderPad();
    fireEvent.click(screen.getByRole('button', { name: 'removeAllPadButton' }));
    expect(onRemoveAllPadButtonMock).toHaveBeenCalledTimes(1);
  });

  it('should call onRemovePadButton on click', () => {
    renderPad();
    fireEvent.click(screen.getByRole('button', { name: 'removePadButton' }));
    expect(onRemovePadButtonMock).toHaveBeenCalledTimes(1);
  });

  it('should call onPadButton on click with the correct value', () => {
    renderPad();
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    expect(onPadButtonMock).toHaveBeenCalledTimes(1);
    expect(onPadButtonMock).toHaveBeenCalledWith(5);
  });
});