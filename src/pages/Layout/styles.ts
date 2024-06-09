import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import { LogoH } from "assets"
import Button from "components/Button/Button"

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
export const FooterLeftLink = styled(StyledLink)`
  margin-right: auto;
  color: #373e3a;
  font-size: 14px;
`

export const FooterRightLinks = styled.div`
  display: flex;
  gap: 20px;
  & > ${StyledLink} {
    color: #373e3a;
  }
`
