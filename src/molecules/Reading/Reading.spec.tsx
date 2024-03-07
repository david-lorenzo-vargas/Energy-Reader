import { render, screen } from '@testing-library/react';
import Reading from '.';
import { MeterReadingSourceEnum } from "../../types";

describe('Reading', () => {
  it('should render Reading elements', () => {
    render(<Reading date={new Date('2023-08-07T15:45:25.449Z')} source={MeterReadingSourceEnum.customer} value="00123" />);

    expect(screen.getByText('source: customer')).toBeInTheDocument();
    expect(screen.getByText('reading: 00123')).toBeInTheDocument();
    expect(screen.getByText('Mon Aug 07 2023')).toBeInTheDocument();
  });
});
