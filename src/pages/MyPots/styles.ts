import styled from "@emotion/styled"
import { NavLink } from "react-router-dom";


export const MyPotsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
`
export const PotsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 1284px;
height: 420px;
gap:36px;
`
export const PotCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(242, 242, 242, 1);
width: 404px;
box-shadow: 4px 10px 4px rgba(55, 62, 58, 0.2) ;
padding: 40px;
cursor: pointer;
`

export const PotTitle = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  color: rgba(56, 34, 29, 1);
`
export const PotImage = styled.img`
width: 200px;
height: 280px;
filter: grayscale(100%);
`

export const StyledLink = styled(NavLink)`

`

export const ButtonControl = styled.div`
filter: grayscale(100%);
width: 100%;
position: relative;

:hover {
  transform: scale(1.1);
}


`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px 40px 80px;
  width: 660px;
  height: 280px;
  max-width: 80%;
  border: 2px solid rgba(2, 88, 41, 1);
  background-color: rgba(255, 254, 239, 1);
  text-align: center;
`

export const ModalTextWrapper = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  gap: 36px;
`

export const ArrowIcon = styled.span`
  margin-left: 10px;
`

export const ModalText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
`
