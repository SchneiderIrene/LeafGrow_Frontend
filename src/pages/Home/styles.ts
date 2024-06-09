import { FAQs } from "assets"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  width: 100%;
  gap: 20px;
`

export const Container1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: -50px;
  padding-bottom: 60px;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Image2 = styled.img`
  max-width: 35%;
  height: auto;
  object-fit: contain;
  z-index: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 0px;
  margin-bottom: 30px;
  left: 0;
  width: 100%;
  z-index: 2;

  & > *:first-child {
    margin-left: 220px;
  }

  & > * + * {
    margin-left: -40px;
  }
`

export const Square = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
  width: 300px;
  margin-top: 190px;
  margin-left: 14px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export const RectangleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`

export const Rectangle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: -5px;
  width: 320px;
  height: 44px;
  margin-top: 22px;
  margin-left: 50px;
  padding: 6px;
  gap: 30px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
`

export const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 30px;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Image1 = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: contain;
  margin-top: -30px;
  margin-left: 80px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Image3 = styled.img`
  width: 360px;
  height: 400px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImageLogo = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const StyledH1Container1 = styled.h1`
  display: flex;
  font-size: 38px;
  margin-top: -200px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`
export const StyledH2Container2 = styled.h2`
  font-size: 26px;
  margin-top: -130px;
  margin-left: 100px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  z-index: 1;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
export const StyledPContainer1 = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin-top: 20px;
  max-width: 500px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`
export const StyledH3 = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-top: 120px;
`

export const StyledPContainer4 = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
  max-width: 1200px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
`

export const StyledPContainer5 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  max-width: 700px;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-image: url(${FAQs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
`

export const StyledH5 = styled.h2`
  text-align: center;
  font-size: 26px;
  color: #373e3a;
  margin-top: 80px;
`

export const StyledP5 = styled.h3`
  text-align: center;
  font-size: 16px;
  color: #373e3a;
`

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: #ba2d00;
`

export const StyledP = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  max-width: 700px;
  margin-top: 15px;
  position: relative;
  padding: 30px;
  border-bottom: 2px solid green;
  color: #373e3a;
  z-index: 2;
  &::after {
    content: "✔";
    color: red;
    position: absolute;
    right: 0;
  }
`

export const StyledSpan = styled.span`
  color: red;
  text-decoration: underline;
  position: absolute;
  left: 0;
`

export const ButtonControl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 50px;
  width: 220px;
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`
