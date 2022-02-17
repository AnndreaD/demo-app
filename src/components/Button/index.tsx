import { StyledButton } from "./styles";
import { ExportedProps } from "./types";

export const Button = ({
  children,
  onClick,
  hasShadow,
  variant,
}: ExportedProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <StyledButton onClick={handleClick} hasShadow variant={variant}>
      {children}
    </StyledButton>
  );
};
