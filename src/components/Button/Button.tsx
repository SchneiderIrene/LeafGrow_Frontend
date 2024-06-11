import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

function Button({
  name,
  type = "button",
  onButtonClick,
  disabled = false,
  color = "grey",
  bgColorIsRed = false,
  border = false,
  children
}: ButtonProps) { 
  return (
    <ButtonComponent
      disabled={disabled}
      type={type}
      onClick={onButtonClick}
      color={color}
      bgColorIsRed={bgColorIsRed}
      border={border}    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
