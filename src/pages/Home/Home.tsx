import { useSelector } from "react-redux"
import { authSliceSelectors } from "store/redux/auth/authSlice"
import { useNavigate } from "react-router-dom"
import {
  LogoF,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
} from "assets"
import {
  HomePageWrapper,
  Container1,
  Container2,
  Container3,
  LogoContainer,
  Image1,
  Image2,
  Image3,
  ImageLogo,
  StyledH1Container1,
  StyledPContainer1,
  ButtonControl,
  Icon,
  TextWrapper,
  Square,
  Rectangle,
  TextColumn,
  StyledH2Container2,
  StyledPContainer4,
  StyledP,
  StyledSpan,
  OverlayContainer,
  StyledPContainer5,
  RectangleContainer,
  StyledH3,
  StyledH5,
  StyledP5,
  BackgroundImage,
  StyledLink,
} from "./styles"
import Button from "components/Button/Button";

function Home() {
  const navigate = useNavigate()
  const userLogIn = useSelector(authSliceSelectors.isLogin)

  const handleButtonClick = () => {
    navigate("/login")
  }

  return (
    <HomePageWrapper>
      <Container1>
        <div>
          <StyledH1Container1>
            Vom Samen bis zur Ernte: gemeinsam Cannabis <br /> sicher
            kultivieren. <br />
            Topf für Topf.
          </StyledH1Container1>
          <StyledPContainer1>
            Ab 01.04.2024 darf man in Deutschland bis zu drei <br />{" "}
            Cannabispflanzen für Eigenbedarf zu Hause anbauen.
            <br /> Begleite uns auf dem Weg zum Erfolg beim Selbstanbau!
          </StyledPContainer1>
        </div>
        <Image1 src={Img1} alt="Img1" />
      </Container1>

      <Container2>
        <Image2 src={Img2} alt="Img2" />
        <StyledH2Container2>
          Entdecke die Vorteile von LeafGrow - dem <br /> ultimativen
          persönlichen Assistent für den <br /> Cannabisheimanbau
        </StyledH2Container2>
        <OverlayContainer>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Square>
              <Icon src={Icon1} alt="Icon1" />
              <TextWrapper>
                <p>
                  Schritt-für-Schritt-Anleitungen für Anfänger, die den Anbau
                  ganz zugänglich machen
                </p>
              </TextWrapper>
            </Square>
            <Square>
              <Icon src={Icon2} alt="Icon2" />
              <TextWrapper>
                <p>
                  Individuelle Empfehlungen, die auf die besonderen Bedürfnisse
                  jedes Nutzers eingehen
                </p>
              </TextWrapper>
            </Square>
          </div>
          <TextColumn>
            <RectangleContainer>
              <Rectangle>
                <Icon src={Icon3} alt="Icon3" />
                <TextWrapper>
                  <p>Datensicherheit</p>
                </TextWrapper>
              </Rectangle>
              <Rectangle>
                <Icon src={Icon4} alt="Icon4" />
                <TextWrapper>
                  <p>Echtzeitbenachrichtigungen</p>
                </TextWrapper>
              </Rectangle>
              <Rectangle>
                <Icon src={Icon5} alt="Icon5" />
                <TextWrapper>
                  <p>Benutzerfreundlichkeit</p>
                </TextWrapper>
              </Rectangle>
            </RectangleContainer>
          </TextColumn>
        </OverlayContainer>
      </Container2>

      <StyledH3>
        Schaue dir die Funktionalität an, die beim Registrieren verfügbar ist
      </StyledH3>

      <Container3>
        <Image3 src={Img3} alt="Img3" />
        <Image3 src={Img4} alt="Img4" />
        <Image3 src={Img5} alt="Img5" />
      </Container3>

      <StyledPContainer4>
        <p>
          Erhalte personalisierte Unterstützung für den <br /> Anbau von
          Cannabis zu Hause mit LeafGrow
        </p>
        <ButtonControl>
          {!userLogIn && <Button name="Anmelden"bgColorIsRed onButtonClick={handleButtonClick}/>}
        </ButtonControl>
      </StyledPContainer4>

      <h1>FAQs</h1>
      <h3>
        Häufig gestellte Fragen zu LeafGrow und dem Cannabisanbau zu Hause
      </h3>
      <StyledPContainer5>
        <BackgroundImage />
        <div>
          <StyledP>
            <StyledSpan>01</StyledSpan> Was ist LeafGrow? LeafGrow ist ein
            persönlicher Assistent, der Ihnen hilft, zu Hause Unkraut anzubauen.
            Er bietet Anleitungen zum Pflanzen, Gießen und Ernten sowie Tipps
            zur Optimierung der Wachstumsbedingungen.
          </StyledP>
          <StyledP>
            <StyledSpan>02</StyledSpan> Wurde Cannabis legalisiert? Ab dem 1.
            April 2024 trat das Cannabis-Gesetz in Kraft, welches den Besitz und
            Anbau von Cannabis in Deutschland unter bestimmten Vorgaben für
            Erwachsene legalisiert. 
              <StyledLink to="https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/cannabisgesetz.html">
                Mehr zu erfahren
              </StyledLink>            
          </StyledP>
          <StyledP>
            <StyledSpan>03</StyledSpan> Warum muss man sich bei LeafGrow
            anmelden? Wir kümmern uns um Minderjährigen, für die der Konsum und
            Anbau von Cannabis gesetzlich verboten ist. Es ist wichtig, dass nur
            Erwachsene Zugang zu unseren Anbauanleitungen für Cannabis haben.
            Daher ist eine Registrierung auf unserer Website erforderlich.
          </StyledP>
          <StyledP>
            <StyledSpan>04</StyledSpan> Welche persönlichen Daten muss man auf
            unserer Website angeben? Wähle einfach einen einzigartigen
            Benutzernamen aus, gib eine beliebige aktuelle E-Mail-Adresse an, um
            personalisierte Benachrichtigungen zu erhalten, und erstelle ein
            Passwort. Wir schätzen deine Privatsphäre und garantieren die
            Anonymität deiner Daten!
          </StyledP>
          <StyledP>
            <StyledSpan>05</StyledSpan>Wie viele Cannabispflanzen darf man zu
            Hause haben? Zu Hause sind der Besitz von bis zu 50 Gramm
            getrocknetem Cannabis sowie bis zu 3 weiblichen Cannabispflanzen pro
            erwachsener Person erlaubt. Auf den Besitz größerer Mengen steht
            eine Freiheitsstrafe von bis zu drei Jahren oder eine Geldstrafe.
          </StyledP>
        </div>
      </StyledPContainer5>
      <StyledH5>Hast du noch einige Fragen?</StyledH5>
      <StyledP5>
        Wir helfen dir, Klarheit zu schaffen! <br />
        Schreibe uns einfach eine E-Mail:{" "}
      </StyledP5>
      <p>Email: info@leafgrow.com</p>      
      <LogoContainer>
        <ImageLogo src={LogoF} alt="Logo" />
      </LogoContainer>
    </HomePageWrapper>
  )
}

export default Home