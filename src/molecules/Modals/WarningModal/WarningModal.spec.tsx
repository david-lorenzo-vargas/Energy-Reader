import { render, screen } from '@testing-library/react';
import WarningModal from '.';
import { mockReadings } from '../../../Mock/mockReadings';

describe('WarningModal', () => {
  it('should render modal elements', () => {
    render(<WarningModal  mounted onCloseWarningModal={jest.fn()} onAcceptNewReading={jest.fn()} reading={mockReadings[0].value} />);

    expect(screen.getByText('Are you sure you want to add')).toBeInTheDocument();
    expect(screen.getByText(mockReadings[0].value)).toBeInTheDocument();
    expect(screen.getByText('as a new reading?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'closeButton' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  })
});