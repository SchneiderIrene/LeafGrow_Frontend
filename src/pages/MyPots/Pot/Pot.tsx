import Button from "components/Button/Button"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  potsSliceActions,
  potsSliceSelectors,
} from "store/redux/pots/potsSlice"
import { ButtonContainer, ButtonControl, PotContainer, PotWrapper, StyledP } from "./styles"
import DayCard from "components/DayCard/DayCard"
import { useEffect } from "react";

function Pot() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const pots = useAppSelector(potsSliceSelectors.potData)

  const pot = pots.find(p => p.id === id?.toString())

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [])

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [dispatch])

  const deActivatePot = (id: string) => {
    console.log(pot)

    dispatch(potsSliceActions.deActivatePot(id))
    console.log(pot)
  }

  const activatePot = (id: string) => {
    dispatch(potsSliceActions.activatePot(id))  
  }

  return (
    <PotWrapper>
    <PotContainer>
      <ButtonContainer>
        <StyledP>
          Bevor du mit dem Cannabisanbau fortfährst, lies die Informationen
          <br /> zum ersten Tag und aktivierte deinen Topf, wenn du bereit bist.
        </StyledP>
        <ButtonControl>
          {!pot?.active && 
          <Button
          name="Topf activieren"
          bgColorIsRed
          onButtonClick={() => id && activatePot(id)}
        />
        }
        </ButtonControl>
      </ButtonContainer>
      <DayCard />
      <ButtonContainer>
        <StyledP>
          Hast du Probleme beim Cannabisanbau? Möchtest du deinen <br /> Topf
          entfernen?
        </StyledP>
        <ButtonControl>
          <Button
          name="Topf entfernen"
          bgColorIsRed
          onButtonClick={() => id && deActivatePot(id)}
        />
        </ButtonControl>
      </ButtonContainer>
    </PotContainer>
    </PotWrapper>
  )
}

export default Pot
