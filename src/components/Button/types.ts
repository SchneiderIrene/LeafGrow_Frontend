type ButtonType = "button" | "submit" | "reset" | undefined;
type ButtonColor = "red" | "grey" | "green" | undefined

export interface ButtonProps {
  name?:  React.ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  color?: ButtonColor,
  bgColorIsRed?: boolean,
  border?: boolean,
  onButtonClick?: () => void,
  children?: React.ReactNode;

}
