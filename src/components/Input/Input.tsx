import React, { ChangeEvent, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import {
  ErrorMessage,
  InputComponent,
  InputComponentContainer,
  InputLabel,
  EyeIcon,
} from "./styles"
import { InputProps } from "./types";


function Input({
  name,
  type = "text",
  placeholder,
  label,
  onInputChange,
  value,
  error,
  onBlur,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <InputComponentContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <div style={{ position: "relative", width: "100%" }}>
        <InputComponent
          name={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          onChange={onInputChange}
          value={value}
          onBlur={onBlur}
        />
        {type === "password" && (
          <EyeIcon onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        )}
      </div>
      <ErrorMessage>{error ? error.toString() : ""}</ErrorMessage>
    </InputComponentContainer>
  )
}

export default Input