import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./types"
import { MdAccountCircle } from "react-icons/md"

import {
  LayoutWrapper,
  Header,
  HeaderLogoContainer,
  HeaderLogo,
  NavContainer,
  Main,
  Footer,
  StyledNavLink,
  StyledLink,
  FooterNavContainer,
  UserName,
  AccountContainer,
  FooterLeftLink,
  StyledButton,
  NavContainerLink
} from "./styles"
import { LogoH } from "assets"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => navigate("/")

  const dispatch = useAppDispatch()

  const userLogIn = useAppSelector(authSliceSelectors.isLogin)
  const userData = useAppSelector(authSliceSelectors.userData)

  const handleLinkClick = (path: string) => {
    if (!userLogIn && (path === "/guide" || path === "/mypots")) {
      if (path === "/guide") {
        alert("Anleitung ist nur für registrierte und angemeldete Benutzer verfügbar.");
      } else if (path === "/mypots") {
        alert("Meine Töpfe ist nur für registrierte und angemeldete Benutzer verfügbar.");
      }
    } else {
      navigate(path);
    }
  };

  const toLogin = () => {
    dispatch(authSliceActions.resetState())
    navigate("/login")
  }

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={LogoH} />
        </HeaderLogoContainer>
        <NavContainer>
          <NavContainerLink>
             <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/guide"
            onClick={() => handleLinkClick("/guide")}
          >
            Anleitung
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/mypots"
            onClick={() => handleLinkClick("/mypots")}
          >
            Töpfe
          </StyledNavLink>
          </NavContainerLink>
         
          {userLogIn ? (
            <StyledNavLink
              to="/account"
              onClick={() => handleLinkClick("/account")}
            >
              <AccountContainer>
                <MdAccountCircle />
                <UserName>{userData ? userData.username : null}</UserName>
              </AccountContainer>
            </StyledNavLink>
          ) : (
            <StyledButton>
              <Button name="Anmelden" bgColorIsRed onButtonClick={toLogin} />
            </StyledButton>
          )}
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <FooterLeftLink to="/gesetzinfo">
          Gesetzliche Informationen
        </FooterLeftLink>
        <div>
          <p>Copyright © 2024 LeafGrow</p>
        </div>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo src={LogoH} />
        </HeaderLogoContainer>
        <FooterNavContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/meinetöpfe">Meine Töpfe</StyledLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout
