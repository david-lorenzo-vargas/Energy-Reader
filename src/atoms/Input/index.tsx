import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from "react";

const Input = ({
  placeholder,
  inputName,
  label,
  type ='text',
  rounded,
  errorMessage,
  value,
  onChange,
  bgColour,
}: Props): ReactElement => {
  return (
    <div>
      {!!label && (
        <div className="mb-2">
          <span className="text-sm text-veryDarkBlue">
            {label}
          </span>
        </div>
      )}
      <div>
        <input
          className={`
            w-full
            px-3
            py-2
            border
            border-lightGray
            text-end
            focus:border
            focus:border-orange
            placeholder:text-sm
            placeholder:italic
            placeholder:font-semibold
            placeholder:text-darkBlueGray
            ${rounded ? rounded : 'rounded'}
            ${bgColour ? bgColour : 'bg-lightGray'}
          `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={inputName}
          aria-label={inputName}
          type={type}
        />
      </div>
      <span className={`text-sm ${!!errorMessage ? 'text-cancelRed' : 'text-transparent'}`}>
        {errorMessage ? errorMessage : 'error message'}
      </span>
    </div>
  );
};

interface Props {
  placeholder?: string;
  inputName: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  rounded?: string;
  bgColour?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
