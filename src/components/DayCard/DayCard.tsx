import {
    CardContainer,
    ImageContainer,
    StyledH1,
    StyledH2,
    StyledP,
    Container2,
    Container3,
  } from "./styles"

  function DayCard ({image, title, content, isNumbered} : CardProps)  {
    return (
      <CardContainer>
        <ImageContainer src={image} alt={title} />
        <StyledH1>TAG{title}</StyledH1>
        {/* {isNumbered ? (
          <ol>
            {(content as string[]).map((item, index) => (
              <li key={index}>
                <StyledP>{item}</StyledP>
              </li>
            ))}
          </ol>
        ) : (
          <StyledP>{content as string}</StyledP>
        )} */}
        <Container2>
          <StyledH2>Subtitle 2</StyledH2>
          <StyledP>Paragraph 2</StyledP>
        </Container2>
        <Container3>
          <StyledH2>Subtitle 3</StyledH2>
          <StyledP>Paragraph 3</StyledP>
        </Container3>
      </CardContainer>
    )
  }



  
  
  export default DayCard