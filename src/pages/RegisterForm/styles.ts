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
export const CheckBoxContainer = styled.div``
export const Label = styled.label``
export const CheckboxError = styled.div``
export const RegisterButton = styled.button``
export const UserButton = styled.button``

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

export const ButtonMessage = styled.button`
width: 100%;
height: 58px;
color: aliceblue;
font-size: 20px;
border: none;
background-color: rgba(186, 45, 0, 1);
cursor: pointer;
`

export const BackToRegister = styled.a`
font-size: 20px;
text-decoration: underline;
cursor: pointer;
`

export const MessageError = styled.p`
color: red;

`

export const Checkbox = styled.input`
border: 1.97px solid rgba(55, 62, 58, 1);
width: 18px;
height: 18px;
`
export const TextErrorServer = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 500;
  position: fixed;
`

export const ErrorBox = styled.div`
position: fixed;
display: flex;
justify-content: center;
top: 320px;

`

