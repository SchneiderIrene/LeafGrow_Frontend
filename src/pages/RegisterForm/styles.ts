import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const RegisterWrapper = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%;
`

export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 708px;
  height: 999px;
`

export const TitleContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const StyledLink = styled(Link)`
font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: rgba(55, 62, 58, 1);
`
export const TitleRegister = styled.h3`
 font-family: "Inter";
  font-weight: 600;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
`

export const TitleText = styled.p`
font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: rgba(55, 62, 58, 1);
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export const EmailMessage = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
width: 520px;
height: 275px;
`

export const TextMessage = styled.h1`
font-size: 32px;
`

export const TextQustion = styled.p`
font-size: 24px;
`

export const BackToRegister = styled.a`
font-size: 20px;
text-decoration: underline;
cursor: pointer;
`

export const MessageError = styled.p`
color: red;
`
export const CheckBoxContainer = styled.div``
export const CheckboxError = styled.div`
position: absolute;
`

export const TextError = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 500;
`

export const ErrorBox = styled.div`
position: absolute;
display: flex;
justify-content: center;
top: 300px;

`

export const StyledP = styled.span`
  text-align: left;
  font-size: 12px;
  color: #007132;
  font-family: "DM Sans";
`
export const StyledH5 = styled.h5`
  text-align: left;
  font-size: 12px;
  color: #373e3a;
  font-family: "DM Sans";
`
export const Label = styled.label`
  font-family: "DM Sans";
  font-size: 12px;
  color: #373e3a;
  cursor: pointer;
  &::after {
    content: " ";
  }
  & a {
    text-decoration: underline;
    color: #373e3a;
  }
`
