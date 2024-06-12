import { useNavigate } from "react-router-dom"
import Input from "components/Input/Input"
import * as Yup from "yup"
import { FIELD_NAMES, LoginFormValues } from "./types"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  ButtonBox,
  ChecboxContainer,
  Checkbox,
  InputButtonContainer,
  InputsContainer,
  LabelCheckBox,
  LoginFormContainer,
  LoginFormWrapper,
  PasswordForget,
  TextError,
  TextErrorServer,
  TitleBox,
  TitleContainer,
  TitleLogin,
} from "./styles"
import {
  authSliceActions,
  authSliceSelectors,
} from "store/redux/auth/authSlice"
import { useEffect } from "react"
import Button from "components/Button/Button"
import GoToBackButton from "components/GoToBackButton/GoToBackButton"
import Spinner from "components/Spinner/Spinner";

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const errorField = useAppSelector(authSliceSelectors.errorField)
  const errorMessage = useAppSelector(authSliceSelectors.error)
  const status = useAppSelector(authSliceSelectors.status)

  const validationSchema = Yup.object().shape({
    [FIELD_NAMES.EMAIL]: Yup.string()
      .required("E-Mail-Adresse ist erforderlich")
      .email("Muss eine gültige E-Mail-Adresse sein"),
    [FIELD_NAMES.PASSWORD]: Yup.string().required("Passwort ist erforderlich"),
  })

  const formik = useFormik({
    initialValues: {
      [FIELD_NAMES.EMAIL]: "",
      [FIELD_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      loginUser()
      console.log(values)
    },
  })

  const loginUser = () => {
    dispatch(
      authSliceActions.logIn({
        email: formik.values.email,
        password: formik.values.password,
      }),
    )
  }
  const toRegister = () => {
    navigate("/register")
  }

  useEffect(() => {
    if (isLogin) {
      navigate("/")
    }
  })

  return (
    <LoginFormWrapper>
      {status === 'loading'&& <Spinner/>}
      <GoToBackButton />
      <LoginFormContainer onSubmit={formik.handleSubmit}>
        <TitleContainer>
           {errorMessage && <TextErrorServer>{errorMessage}</TextErrorServer>}
        {errorField ? (
          <TitleBox>
            <TitleLogin>Oops! Etwas ist schiefgegangen.</TitleLogin>
            <TextError>{errorField?.password}</TextError>
          </TitleBox>
        ) : (
          <TitleBox>
            <TitleLogin>Schön, dass du wieder da bist!</TitleLogin>
          </TitleBox>
        )}
        </TitleContainer>
       <InputButtonContainer>
        <InputsContainer>
          <Input
            name={FIELD_NAMES.EMAIL}
            placeholder="E-Mail-Adresse eingeben"
            label="E-Mail-Adresse"
            onInputChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
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
      <ButtonBox>
        <ChecboxContainer>
          <Checkbox type="checkbox"/>
<LabelCheckBox>Zugangsdaten speichern</LabelCheckBox>
        </ChecboxContainer>
<Button name="Anmelden" bgColorIsRed type="submit" />
<PasswordForget href="">Passwort vergessen?</PasswordForget>
      </ButtonBox>
        </InputButtonContainer>
         </LoginFormContainer>
        <Button name="Registrieren" bgColorIsRed onButtonClick={toRegister} />
    </LoginFormWrapper>
  )
}

export default LoginForm
