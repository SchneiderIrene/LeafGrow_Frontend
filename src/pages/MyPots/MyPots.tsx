import { useNavigate } from "react-router-dom";
import {
  MyPotsWrapper,
  PotCard,
  PotImage,
  PotTitle,
  PotsContainer,
  StyledLink,
} from "./styles"
import { PotImg } from "assets"


function MyPots() {
const navigate = useNavigate()

  return (
    <MyPotsWrapper>
      <PotsContainer>
        <PotCard onClick={()=>{navigate("/mypots/pot1")}}>
          <PotTitle>Topf 1</PotTitle>
          <PotImage src={PotImg} alt="pot" />
        </PotCard>
        <PotCard onClick={()=>{navigate("/mypots/pot2")}}>
          <PotTitle>Topf 2</PotTitle>
          <PotImage src={PotImg} alt="pot" />
        </PotCard>
        <PotCard onClick={()=>{navigate("/mypots/pot3")}}>
          <PotTitle>Topf 3</PotTitle>
          <PotImage src={PotImg} alt="pot" />
        </PotCard>
      </PotsContainer>
    </MyPotsWrapper>
  )
}

export default MyPots
