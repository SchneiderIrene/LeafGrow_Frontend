import {
  ArrowIcon,
  LinkTopf,
  ModalContainer,
  ModalText,
  ModalTextWrapper,
  MyPotsWrapper,
  PotCard,
  PotImage,
  PotTitle,
  PotsContainer,
} from "./styles"
import { PotImg } from "assets"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"

import { Pot } from "store/redux/pots/types"

import { useEffect, useState } from "react"
import {
  potsSliceActions,
  potsSliceSelectors,
} from "store/redux/pots/potsSlice"
import { authSliceSelectors } from "store/redux/auth/authSlice"
import Modal from "components/Modal/Modal"
import {  useNavigate } from "react-router-dom"


function MyPots() {
  const dispatch = useAppDispatch()
  const pots = useAppSelector(potsSliceSelectors.potData)
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (!isLogin) {
      handleOpenModal()
    }
  }, [])

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [])

  return (
    <MyPotsWrapper>
      <PotsContainer>
        {pots.map((pot: Pot, index: number) => (
          <LinkTopf to={`/mypots/pot/${pot.id}`}>
          <PotCard activ={pot.active} key={pot.id}>
            <PotTitle>{`Topf ${index + 1}`}</PotTitle>
            <PotImage src={PotImg} alt="pot" />
          </PotCard>
          </LinkTopf>
        ))}
      </PotsContainer>
      {!isLogin && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <ModalTextWrapper>
              <ModalText>
                Diese Seite ist nur für registrierte und eingeloggte
                Benutzer/innen verfügbar
              </ModalText>
              <Button
                name={
                  <span>
                    Zurück zum Homepage <ArrowIcon>→</ArrowIcon>
                  </span>
                }
                bgColorIsRed
                onButtonClick={() => navigate("/")}
              />
            </ModalTextWrapper>
          </ModalContainer>
        </Modal>
      )}
    </MyPotsWrapper>
  )
}

export default MyPots
