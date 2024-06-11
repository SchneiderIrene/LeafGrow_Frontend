import styled from "@emotion/styled"

export const GuidePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
  width: 100%;
  gap: 110px;
  padding: 0 60px;
  counter-reset: item;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
  border: 2px solid green;
  position: relative;

  &:first-of-type {
    margin-top: -60px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: calc(100vw - 100%);
    background-color: green;
    right: 100%;
    top: calc(50% - 1px);
  }
  &::before {
    transform: translateY(-30px);
  }
  &::after {
    transform: translateY(30px);
    content: counter(item) "0";
    counter-increment: item;
    position: limk;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const StyledPCont2 = styled.p<{ isLogin: boolean }>`
  text-align: center;
  font-size: 22px;
  margin-top: 20px;
  max-width: 100%;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  visibility: ${props => (props.isLogin ? "visible" : "hidden")};
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  z-index: 0;
  padding: 14px;
`

export const StyledH1 = styled.h1`
  text-align: center;
  font-size: 38px;
  font-family: "DM Sans";
  max-width: 100%;
  margin-top: 20px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;
`

export const StyledH3 = styled.h3<{ isLogin: boolean }>`
  text-align: center;
  font-size: 28px;
  font-family: "DM Sans";
  margin-top: 20px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  display: ${props => (props.isLogin ? "block" : "none")};
`

export const StyledP = styled.p<{ isLogin: boolean }>`
  text-align: left;
  font-size: 22px;
  font-family: "DM Sans";
  max-width: 100%;
  margin-top: 20px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  display: ${props => (props.isLogin ? "block" : "none")};
  padding: 16px 16px 0 16px;
`


