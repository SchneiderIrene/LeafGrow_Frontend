import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import Input from "components/Input/Input"
import Modal from "components/Modal/Modal"
import {
  AccountContainer,
  AccountWrapper,
  ButtonBoxModal,
  ButtonPasswordModalBox,
  DeleteLogOutBox,
  DeleteLogOutContainer,
  Form,
  InputBlock,
  InputDesabled,
  InputsContainer,
  LabelByInputDesable,
  ModalContainerDeleteLogOut,
  ModalContainerPassword,
  PasswortChangeContainer,
  TextDeleteLogOut,
  TextModal,
  TextPasswordChangeModal,
  Title,
  TitleContainerPasswordChangeModal,
  TitleInformation,
  TitlePasswordChangeModal,
} from "./styles"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useAppDispatch } from "store/hooks"
import { CloseButton } from "components/Modal/styles"
import Button from "components/Button/Button"

const Account = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLogin = useSelector(authSliceSelectors.isLogin)
  const userData = useSelector(authSliceSelectors.userData)
  const status = useSelector(authSliceSelectors.status)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false)

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true)
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false)
  const handleOpenPasswordModal = () => setIsPasswordModalOpen(true)
  const handleClosePasswordModal = () => setIsPasswordModalOpen(false)
  const handleOpenLogOutModal = () => setIsLogOutModalOpen(true)
  const handleCloseLogOutdModal = () => setIsLogOutModalOpen(false)

  useEffect(() => {
    if (!isLogin) {
      navigate("/")
    }
  }, [isLogin, navigate])

  useEffect(() => {
    if (status === "success" && !isLogin) {
      navigate("/")
    }
  }, [status, isLogin, navigate])

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Neues Passwort ist erforderlich")
      .min(8, "Mindestens 8 Zeichen")
      .max(60, "Maximal 60 Zeichen")
      .matches(/[a-z]/, "Mindestens 1 Kleinbuchstabe")
      .matches(/[A-Z]/, "Mindestens 1 Großbuchstabe")
      .matches(/[0-9]/, "Mindestens 1 Ziffer"),
  })

  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema,
    onSubmit: values => {},
  })

  useEffect(() => {
    if (status === "success") {
      handleClosePasswordModal()
    }
  }, [status])

  const changePasswort = () => {
    dispatch(
      authSliceActions.changePassword({
        newPassword: formik.values.newPassword,
      }),
    )
  }
  const logoutUser = () => {
    dispatch(authSliceActions.logOut())
  }

  const deleteAccount = () => {
    dispatch(authSliceActions.deleteAccount())
  }

  return (
    <AccountWrapper>
      <Title>Kontoeinstellungen</Title>
      <AccountContainer>
        <PasswortChangeContainer>
          <TitleInformation>
            Das Benutzername und die E-Mail-Adresse können nicht geändert
            werden.{" "}
            <span style={{ fontWeight: "700" }}>
              Du kannst nur dein Passwort ändern.
            </span>
          </TitleInformation>
          <InputBlock>
            <InputsContainer>
              <LabelByInputDesable htmlFor="username">
                Benutzername
              </LabelByInputDesable>
              <InputDesabled
                name="username"
                id="username"
                value={userData?.username}
                disabled={true}
              />
            </InputsContainer>

            <InputsContainer>
              <LabelByInputDesable htmlFor="email">
                E-Mail-Adresse
              </LabelByInputDesable>
              <InputDesabled
                name="email"
                id="email"
                value={userData?.email}
                disabled={true}
              />
            </InputsContainer>
            <InputsContainer>
              <LabelByInputDesable htmlFor="passwort">
                Passwort
              </LabelByInputDesable>
              <InputDesabled
                name="passwort"
                id="passwort"
                value="********"
                disabled={true}
              />
            </InputsContainer>
          </InputBlock>
          <Button
            name=" Passwort ändern"
            bgColorIsRed={true}
            onButtonClick={handleOpenPasswordModal}
          />
        </PasswortChangeContainer>
        <DeleteLogOutContainer>
          <DeleteLogOutBox>
            <TextDeleteLogOut>Möchtest du dich abmelden?</TextDeleteLogOut>
            <Button
              name="Abmelden"
              border={true}
              color="green"
              onButtonClick={handleOpenLogOutModal}
            />
          </DeleteLogOutBox>
          <DeleteLogOutBox>
            <TextDeleteLogOut>Möchtest du dein Konto löschen?</TextDeleteLogOut>
            <ButtonBoxModal>
              <Button
                name="Konto löschen"
                border={true}
                color="red"
                onButtonClick={handleOpenDeleteModal}
              />
            </ButtonBoxModal>
          </DeleteLogOutBox>
        </DeleteLogOutContainer>
        <Modal isOpen={isLogOutModalOpen} onClose={handleCloseLogOutdModal}>
          <ModalContainerDeleteLogOut>
            <CloseButton onClick={handleCloseLogOutdModal}>X</CloseButton>
            <TextModal>
              Bist du sicher, dass du dich abmelden möchtest?
            </TextModal>
            <Button
              name="Abmelden"
              bgColorIsRed={true}
              onButtonClick={logoutUser}
            />
          </ModalContainerDeleteLogOut>
        </Modal>
        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
          <ModalContainerDeleteLogOut>
            <CloseButton onClick={handleCloseDeleteModal}>X</CloseButton>
            <TextModal>
              Bist du sicher, dass du dein Konto löschen möchtest?
            </TextModal>
            <Button
              name="Konto löschen"
              bgColorIsRed={true}
              onButtonClick={deleteAccount}
            />
          </ModalContainerDeleteLogOut>
        </Modal>
        <Modal isOpen={isPasswordModalOpen} onClose={handleClosePasswordModal}>
          <ModalContainerPassword>
            <CloseButton onClick={handleClosePasswordModal}>X</CloseButton>
            <TitleContainerPasswordChangeModal>
              <Title>Passwort ändern</Title>
              <TextPasswordChangeModal>
                Wähle mindestens 8 Zeichen für dein Passwort mit 1
                Kleinbuchstabe, 1 Großbuchstabe, 1 Ziffer
              </TextPasswordChangeModal>
            </TitleContainerPasswordChangeModal>
            <Form onSubmit={formik.handleSubmit}>
              <Input
                name="newPassword"
                type="password"
                placeholder="Gebe ein neues Passwort ein"
                label="*Neues Passwort"
                onInputChange={formik.handleChange}
                value={formik.values.newPassword}
                error={formik.errors.newPassword}
                onBlur={formik.handleBlur}
              />
              <ButtonPasswordModalBox>
                <Button
                  name="Bestätigen"
                  type="submit"
                  bgColorIsRed={true}
                  onButtonClick={changePasswort}
                  disabled={!formik.isValid || !formik.dirty}
                />
              </ButtonPasswordModalBox>
            </Form>
          </ModalContainerPassword>
        </Modal>
      </AccountContainer>
    </AccountWrapper>
  )
}

export default Account
