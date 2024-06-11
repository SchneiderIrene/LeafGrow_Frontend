import {
    LegalInfoWrapper,
    StyledH4,
    StyledH5,
    StyledP,
    StyledLink,
  } from "./styles"
  
  function LegalInfo() {
    return (
      <LegalInfoWrapper>
        <StyledP>
          Seit dem 1. April 2024 dürfen Personen über 18 Jahren in Deutschland 25
          Gramm Cannabis für den Konsum besitzen und mit sich führen. Außerdem
          können Haschischliebhaber nun drei Cannabispflanzen in ihren eigenen
          vier Wänden anbauen und bis zu 50 Gramm getrocknetes Cannabis lagern.
          <br />
          <br />
          Der gesamte Gesetzestext ist
          <StyledLink
            to="https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/detail/cannabisgesetz.html"
            target="_blank"
          >
            hier zu finden.
          </StyledLink>
          (https://www.recht.bund.de/bgbl/1/2024/109/VO.html?nn=55638)
        </StyledP>
        <StyledH4> Artikel 1 Kapitel 1 § 3 </StyledH4>
        <StyledH5> Erlaubter Besitz von Cannabis </StyledH5>
        <StyledP>
          (1) Personen, die das 18. Lebensjahr vollendet haben, ist der Besitz von
          bis zu 25 Gramm Cannabis, bei Blüten, blütennahen Blättern oder
          sonstigem Pflanzenmaterial der Cannabispflanze bezogen auf das Gewicht
          nach dem Trocknen, zum Eigenkonsum erlaubt.
          <br />
          <br />
          (2) Personen, die das 18. Lebensjahr vollendet haben, ist abweichend von
          Absatz 1 im Geltungsbereich dieses Gesetzes an ihrem Wohnsitz oder an
          ihrem gewöhnlichen Aufenthalt der Besitz von Cannabis wie folgt erlaubt:
          1. von bis zu 50 Gramm Cannabis, bei Blüten, blütennahen Blättern oder
          sonstigem Pflanzenmaterial der Cannabispflanze bezogen auf das Gewicht
          nach dem Trocknen, und <br /> 2. von bis zu drei lebenden
          Cannabispflanzen. <br /> In den Fällen des erlaubten Besitzes von
          Cannabis nach Satz 1 Nummer 1 und Absatz 1 darf die insgesamt besessene
          Menge 50 Gramm Cannabis, bei Blüten, blütennahen Blättern oder sonstigem
          Pflanzenmaterial der Cannabispflanze bezogen auf das Gewicht nach dem
          Trocknen, nicht übersteigen.
          <br />
          <br />
          (3) Unbeschadet von Absatz 2 ist Personen, die das 18. Lebensjahr
          vollendet haben, ein über Absatz 1 hinausgehender Besitz von Cannabis
          nur erlaubt innerhalb des befriedeten Besitztums einer Anbauvereinigung
          mit einer Erlaubnis nach § 11 Absatz 1 oder zum Zweck des Transports
          nach § 22 Absatz 3. <br />
          <br />
          Seite 6 von 50 Bundesgesetzblatt Jahrgang 2024 Teil I Nr. 109,
          ausgegeben zu Bonn am 27. März 2024
        </StyledP>
      </LegalInfoWrapper>
    )
  }
  
  export default LegalInfo