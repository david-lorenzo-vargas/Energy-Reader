import { render, screen } from '@testing-library/react';
import SeeAllReadingsModal from '.';
import { mockReadings } from '../../../Mock/mockReadings';

const mockReading = mockReadings[0];

describe('SeeAllReadingsModal', () => {
  it('should render modal elements', () => {
    render(<SeeAllReadingsModal  onToggleSeeAll={jest.fn()} mounted readings={[mockReadings[0]]} />);
    
    expect(screen.getByText('Previous meter readings')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'closeButton' })).toBeInTheDocument();
    expect(screen.getByText(`source: ${mockReading.source}`)).toBeInTheDocument();
    expect(screen.getByText(`reading: ${mockReading.value}`)).toBeInTheDocument();
    expect(screen.getByText('Mon Mar 04 2024')).toBeInTheDocument();
  })
});