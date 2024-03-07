"use client"

import { ReactElement, useState } from "react";

const Button = ({
  children,
  size,
  bgColour,
  padding,
  rounded,
  border,
  onClick,
  disabled,
  type,
  id,
  hoverable,
}: Props): ReactElement => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <button
      title={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={id}
      onMouseEnter={hoverable ? () => setHovered(true) : () => {}}
      onMouseLeave={hoverable ? () => setHovered(false) : () => {}}
      className={`
        relative
        ${size ? size : ''}
        ${bgColour ? bgColour : ''}
        ${padding ? padding : ''}
        ${rounded ? rounded : ''}
        ${border ? border : ''}
        ${disabled ? 'opacity-20' : 'cursor-pointer'}
      `}
    >
      {hoverable && hovered && (
        <div className={`
            h-full
            w-full
            bg-darkBlueGray
            absolute
            top-0
            left-0
            opacity-40
            border-4
            border-darkBlueGray
            flex flex-row items-center justify-center
            ${rounded ? rounded : ''}
          `}
        />
      )}
      {children}
    </button>
  );
};

interface Props {
  children: ReactElement;
  size?: string;
  bgColour?: string;
  padding?: string;
  rounded?: string;
  border?: string;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'button';
  id: string;
  hoverable?: boolean;
}

export default Button;
