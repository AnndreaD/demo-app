import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasShadow?: boolean;
  variant?: ButtonVariants;
}

export type ButtonVariants = "blue" | "grey";

export type ExportedProps = ButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
