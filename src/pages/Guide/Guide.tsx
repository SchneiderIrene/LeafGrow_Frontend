import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Guide1, Guide2, Guide3, Guide4, Guide5 } from "assets"
import {
  GuidePageWrapper,
  Container,
  Image,
  StyledH3,
  StyledP,
  StyledPCont2,
  StyledH1,
  ModalContainer,
  ModalTextWrapper,
  ArrowIcon,
  ModalText
} from "./styles"
import { authSliceSelectors } from "store/redux/auth/authSlice"
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { useEffect, useState } from "react";


function Guide() {
  const navigate = useNavigate()
  const isLogin = useSelector(authSliceSelectors.isLogin)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

useEffect (()=>{
  if(!isLogin){
handleOpenModal();
  }
}, [])


  return (
    <GuidePageWrapper>
      <StyledH1>Wesentliche Tipps für den erfolgreichen Cannabisanbau</StyledH1>
      <Container>
        <Image
          src={Guide1}
          alt="Guide1"
          style={{ filter: isLogin ? "none" : "blur(5px)" }}
        />
        <StyledH3 isLogin={isLogin}>Temperaturregelung</StyledH3>
        <StyledP isLogin={isLogin}>
          Die optimale Temperatur im Anbaugebiet sollte zwischen 22 und 28 °C
          liegen. Die ideale Temperatur für Cannabis beträgt etwa 23-24 °C.
          Nachts kann sie um 5-7 Grad sinken, aber insgesamt wirkt sich ein
          solches Mikroklima positiv auf das Wachstum der Pflanze aus, sorgt für
          eine gute vegetative Entwicklung und eine üppige Blüte.
        </StyledP>
      </Container>
      {isLogin && (
        <>
          <Container>
            <Image src={Guide2} alt="Guide2" />
            <StyledH3 isLogin={isLogin}>Luftfeuchtigkeit</StyledH3>
            <StyledPCont2 isLogin={isLogin}>
              Die Luftfeuchtigkeit sollte im Bereich von 50-60 % liegen.
            </StyledPCont2>
          </Container>
          <Container>
            <Image src={Guide3} alt="Guide3" />
            <StyledH3 isLogin={isLogin}>Erde</StyledH3>
            <StyledP isLogin={isLogin}>
              Eine gute Erde für den Anbau von Cannabis kann in jedem
              Gartencenter gekauft werden. Ideal ist eine Mischung mit Humus und
              Perlit, wie zum Beispiel verschiedene Erden für Rosen und
              Zitronen. Diese können alleine verwendet oder im Verhältnis 1:1
              gemischt werden. Wichtig ist, sicherzustellen, dass der pH-Wert
              der Erde zwischen 5,5 und 7 liegt. So fühlen sich die Pflanzen
              wohl und können die Nährstoffe leicht aufnehmen.
            </StyledP>
          </Container>
          <Container>
            <Image src={Guide4} alt="Guide4" />
            <StyledH3 isLogin={isLogin}>Beleuchtung</StyledH3>
            <StyledP isLogin={isLogin}>
              Einer der wichtigsten Aspekte der Vorbereitung ist die
              Installation der richtigen Beleuchtung. Moderne LED-Leuchten
              verbrauchen wenig Strom, sind kompakt, erzeugen kaum Wärme und
              bieten das richtige Lichtspektrum sowohl für die Vegetation als
              auch für die Blüte von Cannabis. Optimale Leistungswerte für
              LED-Pflanzenlampen liegen bei 100-300 Watt. Der Mindestwert ist
              für den Anbau einer Pflanze geeignet, während der Höchstwert für
              eine Arbeitsfläche von einem Quadratmeter ausgelegt ist. Solche
              Lampen können in einem Abstand von 10-20 Zentimetern von der
              Spitze der Pflanze installiert werden. Die Pflanze benötigt 18
              Stunden Licht und 6 Stunden Dunkelheit – dies ist der anerkannte
              Standardlichtzyklus für selbstblühendes Cannabis.
            </StyledP>
          </Container>
          <Container>
            <Image src={Guide5} alt="Guide5" />
            <StyledH3 isLogin={isLogin}>Bewässerung</StyledH3>
            <StyledP isLogin={isLogin}>
              Gegossen werden sollte nur mit Wasser, das mindestens einen Tag
              lang abgestanden ist. Die ideale Wassertemperatur für die
              Bewässerung beträgt 24-25 Grad.
            </StyledP>
          </Container>
        </>
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
              onButtonClick={()=>navigate("/")}/>
            </ModalTextWrapper>
          </ModalContainer>
        </Modal>
      )}
    </GuidePageWrapper>
  )
}

export default Guide