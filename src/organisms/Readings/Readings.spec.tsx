import { fireEvent, render, screen } from '@testing-library/react';
import Readings from '.';
import { mockReadings } from '../../Mock/mockReadings';

const onSeeAllReadingsMock = jest.fn();

const renderReadings = () => render(<Readings readings={mockReadings} onSeeAllReadings={onSeeAllReadingsMock} />);


describe('Readings', () => {
  it('should render Readings elements', () => {
    renderReadings();

    expect(screen.getByText('Previous meter readings')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'See all' })).toBeInTheDocument();
  });

  it('should call onSeeAllReadings on click', () => {
    renderReadings();

    fireEvent.click(screen.getByRole('button', { name: 'See all' }));
    expect(onSeeAllReadingsMock).toHaveBeenCalledTimes(1);
  });
});