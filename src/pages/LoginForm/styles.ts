import styled from "@emotion/styled"

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 481px;
  height: 888px;
`

export const TitleContainer = styled.div`
width: 100%;

`

export const InputButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-around;
gap: 24px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
export const ButtonBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-around;
gap: 16px;

`

export const ChecboxContainer = styled.div`
display: flex;
`

export const Checkbox = styled.input`
border: 1.97px solid rgba(55, 62, 58, 1);
width: 18px;
height: 18px;
`

export const LabelCheckBox = styled.label`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 700;

`

export const PasswordForget = styled.a`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 700;
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 87px;
  gap: 10px;
`

export const TitleLogin = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
`

export const TextError = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
`

export const TextErrorServer = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 500;
  position: fixed;
`
