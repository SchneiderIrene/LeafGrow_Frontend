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
  FooterNavContainer,
  UserName,
  AccountContainer,
  FooterLeftLink,
  StyledButton,
  NavContainerLink,
  ModalContainer,
  ModalTextWrapper,
  ArrowIcon,
  ModalText
} from "./styles"
import { LogoH } from "assets"
import {authSliceActions, authSliceSelectors} from "store/redux/auth/authSlice"
import {  useAppDispatch, useAppSelector } from "store/hooks"
import Button from "components/Button/Button"
import Modal from "components/Modal/Modal";
import { useState } from "react";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  
  const goToHomePage = () =>{
    navigate("/")
    setIsModalOpen(false)
  } 

  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const userData = useAppSelector(authSliceSelectors.userData)
  const dispatch = useAppDispatch();

  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)
  


  const toLogin = () => {
    dispatch(authSliceActions.resetErrorField())
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
          {isLogin ? (
            <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/guide"
            onClick={() => navigate("/guide")}
          >
            Anleitung
          </StyledNavLink>
          ) : (
            <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/guide"
            onClick={handleOpenModal}
          >
            Anleitung
          </StyledNavLink>
          )}
          {isLogin ? (
            <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/mypots"
            onClick={() => navigate("/mypots")}
          >
            Töpfe
          </StyledNavLink>
          ) : (
            <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/mypots"
            onClick={handleOpenModal}
          >
            Töpfe
          </StyledNavLink>
          )}
          
          </NavContainerLink>
         
          {isLogin ? (
            <StyledNavLink
              to="/account"
              onClick={() => navigate("/account")}
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
           {!isLogin && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <ModalTextWrapper>
              <ModalText>
                Diese Seite ist nur für registrierte und eingeloggte
                Benutzer/innen verfügbar
              </ModalText>
              <Button name={<span>Zurück zum Homepage <ArrowIcon>→</ArrowIcon></span>} 
              bgColorIsRed 
              onButtonClick={goToHomePage}/>
            </ModalTextWrapper>
          </ModalContainer>
        </Modal>
      )}
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
      <FooterLeftLink to="/legalInfo">
          Gesetzliche Informationen
        </FooterLeftLink>
        <div>
          <p>Copyright © 2024 LeafGrow</p>
        </div>
        <FooterNavContainer>
           {/* <StyledLink to="/">Datenschutz</StyledLink>
          <StyledLink to="/">Nutzungsbedingungen</StyledLink>
          <StyledLink to="/">Impressum</StyledLink> */}
        </FooterNavContainer>
      </Footer>
      {isModalOpen && (
         <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
         <ModalContainer>
           <ModalTextWrapper>
             <ModalText>
               Diese Seite ist nur für registrierte und eingeloggte
               Benutzer/innen verfügbar
             </ModalText>
             <Button name={<span>Zurück zum Homepage <ArrowIcon>→</ArrowIcon></span>} 
             bgColorIsRed 
             onButtonClick={goToHomePage}/>
           </ModalTextWrapper>
         </ModalContainer>
       </Modal>
      )}
    </LayoutWrapper>
  )
}

export default Layout
