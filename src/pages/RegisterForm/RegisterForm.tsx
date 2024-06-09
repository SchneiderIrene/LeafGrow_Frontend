import Input from "components/Input/Input"
import * as Yup from "yup"
import {
  BackToRegister,
  ButtonMessage,
  CheckBoxContainer,
  Checkbox,
  CheckboxError,
  EmailMessage,
  ErrorBox,
  InputsContainer,
  Label,
  RegisterFormContainer,
  RegisterWrapper,
  StyledLink,
  TextErrorServer,
  TextMessage,
  TextQustion,
  TitleContainer,
  TitleRegister,
  TitleText,
} from "./styles"
import { useFormik } from "formik"
import { FIELD_NAMES, RegisterFormValues } from "./types"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useEffect, useState } from "react"
import GoToBackButton from "components/GoToBackButton/GoToBackButton";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";

function RegisterForm() {
  const dispatch = useAppDispatch()
  const errorField = useAppSelector(authSliceSelectors.errorField)
  const errorMessage = useAppSelector(authSliceSelectors.error)
  const status = useAppSelector(authSliceSelectors.status)
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    if (status === "success" && !errorField) {
      setIsRegister(true)
    }
  }, [status, errorField])

  const validationSchema = Yup.object().shape({
    [FIELD_NAMES.USERNAME]: Yup.string()
      .required("Benutzername ist erforderlich")
      .min(2, "Mindestens 2 Zeichen")
      .max(15, "Maximal 15 Zeichen")
      .matches(/^[A-Za-z0-9]+$/, "Nur lateinische Buchstaben sind erlaubt"),
    [FIELD_NAMES.EMAIL]: Yup.string()
      .required("E-Mail-Adresse ist erforderlich")
      .email("Muss eine gültige E-Mail-Adresse sein")
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Ungültige E-Mail"),
    [FIELD_NAMES.PASSWORD]: Yup.string()
      .required("Passwort ist erforderlich")
      .min(8, "Mindestens 8 Zeichen")
      .max(60, "Maximal 60 Zeichen")
      .matches(/[a-z]/, "Mindestens 1 Kleinbuchstabe")
      .matches(/[A-Z]/, "Mindestens 1 Großbuchstabe")
      .matches(/[0-9]/, "Mindestens 1 Ziffer"),
    [FIELD_NAMES.CHECKBOX]: Yup.boolean().oneOf(
      [true],
      "Checkbox muss akzeptiert werden",
    ),
  })

  const formik = useFormik({
    initialValues: {
      [FIELD_NAMES.USERNAME]: "",
      [FIELD_NAMES.EMAIL]: "",
      [FIELD_NAMES.PASSWORD]: "",
      [FIELD_NAMES.CHECKBOX]: false,
    } as RegisterFormValues,
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: RegisterFormValues) => {
      if (formik.isValid) {
        addUser()
        setIsRegister(true)
        console.log(values)
      }
    },
  })
  const addUser = () => {
    dispatch(
      authSliceActions.registerUser({
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
      }),
    )
  }

  const showRegisterForm = () => {
    setIsRegister(false)
    formik.resetForm()
  }

  const resetEmail = () => {
    dispatch(authSliceActions.resetEmail())
  }

  return (
    <RegisterWrapper>
      {status === 'loading' && <Spinner/>}
      <GoToBackButton/>
      {isRegister && status === "success" && !errorField ? (
        <EmailMessage>
          <TextMessage>
            Wir haben dir eine E-Mail mit dem Verifizierungslink geschickt.
          </TextMessage>
          <TextQustion>Hast du die E-Mail noch nicht erhalten? </TextQustion>
          <ButtonMessage onClick={resetEmail}>Erneut senden</ButtonMessage>
          <BackToRegister onClick={showRegisterForm}>
            Zurück zur Registrierung
          </BackToRegister>
        </EmailMessage>
      ) : (
        <RegisterFormContainer onSubmit={formik.handleSubmit}>
          <TitleContainer>
            
            <TitleRegister>Registrieren</TitleRegister>
            
             <TitleText>Hast du bereits ein Konto? <span/>  
              <StyledLink to="/login">Melde dich an</StyledLink></TitleText>
              <ErrorBox>
                 {errorMessage && <TextErrorServer>{errorMessage}</TextErrorServer>}
              </ErrorBox>
            
           
          </TitleContainer>
            
          <InputsContainer>
            <Input
              name={FIELD_NAMES.USERNAME}
              placeholder="Benutzername eingeben"
              label="Benutzername"
              onInputChange={formik.handleChange}
              value={formik.values.username}
              error={formik.errors.username || errorField?.username}
              onBlur={formik.handleBlur}
              onChange={formik.handleBlur}
            />

            <Input
              name={FIELD_NAMES.EMAIL}
              type="email"
              placeholder="E-Mail-Adresse eingeben"
              label="E-Mail-Adresse"
              onInputChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email || errorField?.email}
              onBlur={formik.handleBlur}
            />
            <Input
              name={FIELD_NAMES.PASSWORD}
              type="password"
              placeholder="Passwort eingeben"
              label="Passwort"
              onInputChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
              onBlur={formik.handleBlur}
            />
          </InputsContainer>
          <CheckBoxContainer>
            <Checkbox
              type="checkbox"
              id="checbox-id"
              name={FIELD_NAMES.CHECKBOX}
              checked={formik.values.checkbox}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Label
              htmlFor="checbox-id"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Ich akzeptiere die Bedingungen
            </Label>
            {formik.errors.checkbox && (
              <CheckboxError style={{ color: "red" }}>
                {formik.errors.checkbox.toString()}
              </CheckboxError>
            )}
          </CheckBoxContainer>
          <Button name="Konto erstellen" type="submit" bgColorIsRed/>
        </RegisterFormContainer>
    )}
    </RegisterWrapper>
  )
}
export default RegisterForm
