"use client";

import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  rounded?: boolean;
  wave?: boolean;
  outline?: boolean;
  disabled?: boolean;
  small?: boolean;
  beforeIcon?: IconType;
  afterIcon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
  label,
  rounded,
  small,
  outline,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-neutral-900 w-full flex flex-row items-center justify-center relative hover:opacity-90 transition 
      ${small ? "p-2 text-sm" : "p-3"}
      ${
        outline
          ? "bg-transparent border-2 border-neutral-900 text-black font-semibold hover:bg-neutral-300"
          : "border-none text-white"
      }
      ${rounded ? "rounded-full" : " rounded-md"}
      `}
    >
      {BeforeIcon && (
        <span className="absolute top-[50%] translate-y-[-50%] left-4 md:left-6">
          <BeforeIcon size={26} />
        </span>
      )}
      {label}
      {AfterIcon && (
        <span className="absolute top-[50%] translate-y-[-50%] right-4 md:right-6">
          <AfterIcon size={26} />
        </span>
      )}
    </button>
  );
};

export default Button;
