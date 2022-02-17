import React from "react";
import { ReactNode } from "react";
import { StyledInput, StyledLabel } from "./styles";

//TODO add validation to field for email

export interface InputProps {
  name: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  placeholder: string;
  disabled?: boolean;
  type?: string;
  children?: string | ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = "text",
  name,
  label,
  placeholder,
  disabled = false,
  children,
  defaultValue,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput
        defaultValue={defaultValue}
        disabled={disabled}
        id={name}
        key={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};
