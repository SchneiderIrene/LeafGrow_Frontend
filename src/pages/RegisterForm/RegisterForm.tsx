import Input from "components/Input/Input"
import * as Yup from "yup"
import {
  BackToRegister,
  CheckBoxContainer,
  CheckboxError,
  EmailMessage,
  ErrorBox,
  InputsContainer,
  Label,
  RegisterFormContainer,
  RegisterWrapper,
  StyledH5,
  StyledLink,
  StyledP,
  TextError,
  TextErrorField,
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
import {  useState } from "react"
import GoToBackButton from "components/GoToBackButton/GoToBackButton";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";

function RegisterForm() {
  const dispatch = useAppDispatch()
  const errorField = useAppSelector(authSliceSelectors.errorField)
  const errorMessage = useAppSelector(authSliceSelectors.error)
  const status = useAppSelector(authSliceSelectors.status)
  const [isRegister, setIsRegister] = useState(false)


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
          <Button  name="Erneut senden" bgColorIsRed onButtonClick={resetEmail}/>
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
                 {errorMessage && <TextError>{errorMessage}</TextError>}
                 {errorField && <TextError>{errorField.message}</TextError>}
              </ErrorBox>
          </TitleContainer>
          <InputsContainer>
            <Input
              name={FIELD_NAMES.USERNAME}
              placeholder="Benutzername eingeben"
              label="Benutzername"
              onInputChange={formik.handleChange}
              value={formik.values.username}
              error={formik.errors.username }
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
              error={formik.errors.email }
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
          <StyledH5>
              <StyledP> Wichtig: *Felder sind erforderlich.</StyledP> Achte
              darauf, dass nach der Kontoerstellung dein Benutzername und deine
              E-Mail-Adresse nicht geändert werden können.
            </StyledH5>
            <br />
            <Label htmlFor="checbox-id">
              <input
                type="checkbox"
                id="checbox-id"
                name={FIELD_NAMES.CHECKBOX}
                checked={formik.values.checkbox}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span>*Ich habe die </span>
              <a href="/nutzungsbedingungen">Nutzungsbedinungen</a>
              <span> und </span>
              <a href="/legalinfo">gesetzliche Informationen</a>
              <span>
                gelesen und akzeptiere diese. Zusätzlich habe ich die
                Informationen über die Verwendung meiner personenbezogenen Daten
                verstanden, die in der{" "}
              </span>
              <a href="/datenschutzerklärung">Datenschutzerklärung</a>
              <span> erläutert werden.</span>
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
