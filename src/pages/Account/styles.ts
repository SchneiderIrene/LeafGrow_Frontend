import styled from "@emotion/styled"

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 125px;
  gap: 65px;
`
export const AccountContainer = styled.div`
  display: flex;
  gap: 147px;
`
export const Title = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
`

export const DeleteLogOutContainer = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
`

export const TextDeleteLogOut = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500px;
`

export const DeleteLogOutBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  align-items: center;
`

export const PasswortChangeContainer = styled.div`
  width: 480px;
  height: 479px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 24px;
`
export const Form = styled.form`
width: 480px;
height: 202px;
`
export const TitleInformation = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500px;
`
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ModalWrapper = styled.div`
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
`

export const InputDesabled = styled.input`
  width: 100%;
  height: 60px;
  background-color: rgba(242, 242, 242, 1);
  border: 1px solid rgba(55, 62, 58, 0.4);
  padding: 17px 32px;
  font-size: 20px;
  color: rgba(55, 62, 58, 1);
  font-family: "DM Sans";
  font-weight: 500;
`

export const LabelByInputDesable = styled.label`
  color: rgba(2, 88, 41, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
`

export const ButtonPasswordModalBox = styled.div`
padding-top: 36px;
`
export const ModalContainerPassword = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  gap: 35px;
  padding: 69px 96px;
  width: 672px;
  height: 592px;
  border: 2px solid rgba(2, 88, 41, 1);
  background-color: rgba(255, 254, 239, 1);
`

export const TitleContainerPasswordChangeModal = styled.div`
  width: 403px;
  height: 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
`

export const TextPasswordChangeModal = styled.p`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 500;
`

export const ModalContainerDeleteLogOut = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  display: flex;
  background-color: rgba(255, 254, 239, 1);
  padding: 69px 96px;
  width: 863px;
  height: 362px;
  border: 2px solid rgba(2, 88, 41, 1);
`

export const TextModal = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
`

export const ButtonBoxModal = styled.div`
  width: 480px;
`
