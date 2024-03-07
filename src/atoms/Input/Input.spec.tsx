import { render, screen, fireEvent } from '@testing-library/react';

import Input from '.';
import { HTMLInputTypeAttribute } from 'react';

const placeholder = 'placeHolder';
const inputName = 'inputName';
const label = 'label';

const renderInput = (
  type?: HTMLInputTypeAttribute
) =>
  render(
  <Input
    label={label}
    placeholder={placeholder}
    inputName={inputName}
    type={type}
  />);

describe('Input', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render', () => {
    renderInput();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('text input should render if type text is passed as prop', () => {
    renderInput('text');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('number input should render if type number is passed as prop', () => {
    renderInput('number');
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  });

  it('if there is no value, placeholder should render', () => {
    renderInput();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should call onChange and value types needs to be displayes', () => {
    renderInput();
    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'aaa'}});
    expect(screen.getByRole('textbox')).toHaveValue('aaa');
  });

  it('if type number is passed as props should render a number input and render numbers as value', () => {
    renderInput('number');
    fireEvent.change(screen.getByRole('spinbutton'), {target: {value: 1}});
    expect(screen.getByRole('spinbutton')).toHaveValue(1);
  });

  it('if type number is passed as props should render a number input and accept only numbers as value', () => {
    renderInput('number');
    fireEvent.change(screen.getByRole('spinbutton'), {target: {value: 'a'}});
    expect(screen.getByRole('spinbutton')).toHaveValue(null);
  });
});
