import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import { LogoH } from "assets"


export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fffeef;
`

export const Header = styled.header`
  display: flex;
  justify-content: end;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  background-color: #007132;
`

export const NavContainerLink = styled.div`
display: flex;
gap: 40px;
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 5px;
  gap: 245px;
  margin-left: 360px;
`

export const HeaderLogoContainer = styled.div`
  position: absolute;
  left: 70px;
  width: 80px;
  cursor: pointer;
`

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

HeaderLogo.defaultProps = { src: LogoH }



export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 20px;
`

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  color: #020e14;
`

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: white;
`

export const UserName = styled.div`
  font-size: 24px;
`

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledButton = styled.div`
  width: 216px;
`
export const FooterContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;`

export const FooterLeftLink = styled(StyledLink)`
  text-decoration: none;
  color: #373e3a;
  font-size: 14px;
  display: inline-block;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid transparent;
`

// export const FooterRightLinks = styled.div`
//   display: flex;
//   gap: 20px;
//   & > ${StyledLink} {
//     color: #373e3a;
//   }
// `

export const FooterText = styled.p`
  font-size: 14px;
  color: #373e3a;
  display: inline-block;
`

export const CopyrightText = styled.p`
  font-size: 14px;
  color: #373e3a;
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
