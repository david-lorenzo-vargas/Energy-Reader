import { fireEvent, render, screen } from '@testing-library/react';
import Prediction from '.';
import { mockReadings } from '../../Mock/mockReadings';
import * as util from "../../util/formatPrediction";
import { MeterReadingSourceEnum } from '../../types';

const onAddPredictionMock = jest.fn();
const mockDate = new Date('2023-08-07T15:45:25.449Z');

let originalDate: DateConstructor;
let dateSpy: jest.SpyInstance;

const renderPrediction = () => render(<Prediction readings={mockReadings} onAddPrediction={onAddPredictionMock} />);

describe('Prediction', () => {
  beforeEach(() => {
    jest.spyOn(util, 'formatPrediction').mockImplementation(() => '00080');

    originalDate = global.Date;
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  });
  
  afterEach(() => {
    dateSpy.mockRestore();
    global.Date = originalDate;
  });

  it('should render Prediction elements', () => {
    renderPrediction();
    expect(screen.getByText('Predicted usage next month')).toBeInTheDocument();
    expect(screen.getByText('00080')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add predicted reading' })).toBeInTheDocument();
  });

  it('should call onAddPrediction with correct values on button click', () => {
    renderPrediction();
    fireEvent.click(screen.getByRole('button', { name: 'Add predicted reading' }));
    expect(onAddPredictionMock).toHaveBeenCalledTimes(1);
    expect(onAddPredictionMock).toHaveBeenCalledWith({
      value: '00080',
      date: mockDate,
      source: MeterReadingSourceEnum.estimated,
      uuid: ''
    });
  });
});