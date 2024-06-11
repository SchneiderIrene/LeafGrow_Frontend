
import {
  ButtonControl,
  MyPotsWrapper,
  PotCard,
  PotImage,
  PotTitle,
  PotsContainer,
} from "./styles"
import { PotImg } from "assets"
import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { Pot } from "store/redux/pots/types";

import { useEffect } from "react";
import { potsSliceActions, potsSliceSelectors } from "store/redux/pots/potsSlice";



function MyPots() {
const dispatch = useAppDispatch()
const pots = useAppSelector(potsSliceSelectors.potData)



useEffect(()=>{
dispatch(potsSliceActions.potProfile())
}, [])

  const activatePot = (id: string) => {
    dispatch(potsSliceActions.activatePot(id));
  }

  return (
    <MyPotsWrapper>
      <PotsContainer>

      {pots.map((pot: Pot, index: number) => (
          <PotCard key={index}>
            <PotTitle>{`Topf ${index + 1}`}</PotTitle>
            <PotImage src={PotImg} alt="pot" />
            <ButtonControl>
              <Button
                name="Aktivieren"
                bgColorIsRed
                onButtonClick={()=>activatePot(pot.potId)}
              />
            </ButtonControl>
          </PotCard>
        ))}
      </PotsContainer>
    </MyPotsWrapper>
  )
}

export default MyPots
